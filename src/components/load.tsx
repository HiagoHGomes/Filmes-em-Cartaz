import { Load } from "./styledApp"
import carrengando from "../assets/Loading.gif"

export const Carregar = ()=> {
    return(
        <Load>
            <img src={carrengando} alt="imagem de load" />
        </Load>
    )
}