import { Cabecalho } from "./styledApp"

export const Header = ()=> {
    return (
        <Cabecalho>
            <nav>
            <a href="#">INICIO</a>
            <a href="" className="esq">HISOTRIA</a>
            <a href="" className="esq">WALLPAPERS</a>
            <a href="" className="esq">MAIS +</a>
            </nav>

            <div className="subHeader">
                <h1>Veja os Filmes em Cartaz no Momento</h1>
            </div>

        </Cabecalho>
    )
}