import {inovativa, impulse, nacional, sebrae, startup, move} from "../../assets"

export const Eventos = () => {
    return (
        <div className="flex w-max animate-slide">
            <img
                src={move}
                alt=""
                className="object-contain shrink-0 mx-2 w-[250px]"
            />
            <img
                src={startup}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={inovativa}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={impulse}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={sebrae}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={nacional}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            {/* Repetindo para criar o efeito infinito */}
            <img
                src={move}
                alt=""
                className="object-contain shrink-0 mx-2 w-[250px]"
            />
            <img
                src={startup}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={inovativa}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={impulse}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={sebrae}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
            <img
                src={nacional}
                alt=""
                className="object-contain shrink-0 mx-2"
            />
        </div>
    )
}