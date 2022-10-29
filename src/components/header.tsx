import { Cabecalho } from "./styledApp"

export const Header = ()=> {
    return (
        <Cabecalho id="topo">
            <nav>
            <a href="#topo">INICIO</a>
            <a href="" className="esq" target={'_blank'}>CINESYSTEM</a>
            <a href="https://www.cinesystem.com.br/filmes/em-cartaz/" target={'_blank'} className="esq">INGRESSOS</a>
            <a href="https://hiagohgomes.github.io/Linktree/" target={'_blank'} className="esq">CONTATO +</a>
            </nav>

            <div className="subHeader">
                <h1>Filmes em Cartaz no CineSystem</h1>
            </div>

        </Cabecalho>
    )
}