import { spawnSync } from "node:child_process"
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { basename, dirname, isAbsolute, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

function git(args, cwd, allowedStatuses = [0]) {
	const result = spawnSync("git", args, {
		cwd,
		encoding: "utf8",
		windowsHide: true,
	})
	if (result.error) throw result.error
	if (!allowedStatuses.includes(result.status)) {
		throw new Error(result.stderr.trim() || `git ${args[0]} falhou`)
	}
	return { status: result.status, output: result.stdout.trim() }
}

// Publica somente dist, em um checkout temporário, sem alterar a branch de trabalho.
export function deploy(projectDirectory = resolve(import.meta.dirname, "..")) {
	const dist = join(projectDirectory, "dist")
	if (!existsSync(join(dist, "index.html"))) {
		throw new Error("Build ausente. Execute npm run build antes de publicar.")
	}
	let remote = git(["remote", "get-url", "origin"], projectDirectory).output
	if (!isAbsolute(remote) && !/^[\w+.-]+:\/\//.test(remote) && !/^[^/\\]+@[^:]+:/.test(remote)) {
		remote = resolve(projectDirectory, remote)
	}
	const name = git(["config", "--get", "user.name"], projectDirectory).output
	const email = git(["config", "--get", "user.email"], projectDirectory).output
	const branch = "refs/heads/gh-pages"
	const branchExists = git(["ls-remote", "--exit-code", "--heads", remote, branch], projectDirectory, [0, 2]).status === 0
	const temporaryRoot = resolve(tmpdir())
	const checkout = mkdtempSync(join(temporaryRoot, "arretech-deploy-"))

	try {
		git(["init", "--quiet"], checkout)
		git(["remote", "add", "origin", remote], checkout)
		if (branchExists) {
			git(["fetch", "--depth=1", "origin", branch], checkout)
			git(["checkout", "-B", "gh-pages", "FETCH_HEAD"], checkout)
			git(["rm", "-r", "--ignore-unmatch", "."], checkout)
		} else {
			git(["checkout", "--orphan", "gh-pages"], checkout)
		}

		for (const entry of readdirSync(dist)) {
			if (entry === ".git") throw new Error("dist não pode conter uma pasta .git")
			cpSync(join(dist, entry), join(checkout, entry), { recursive: true })
		}
		git(["add", "--all"], checkout)
		if (branchExists && git(["diff", "--cached", "--quiet"], checkout, [0, 1]).status === 0) {
			console.log("O site publicado já está atualizado.")
			return
		}
		git(["-c", `user.name=${name}`, "-c", `user.email=${email}`, "commit", "-m", "Atualiza o site"], checkout)
		git(["push", "origin", `HEAD:${branch}`], checkout)
		console.log("Site publicado na branch gh-pages.")
	} finally {
		// A limpeza fica restrita à pasta temporária criada por esta execução.
		if (dirname(checkout) !== temporaryRoot || !basename(checkout).startsWith("arretech-deploy-")) {
			throw new Error("Caminho temporário inválido para limpeza")
		}
		rmSync(checkout, { recursive: true, force: true })
	}
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	try {
		deploy()
	} catch (error) {
		console.error(error.message)
		process.exitCode = 1
	}
}
