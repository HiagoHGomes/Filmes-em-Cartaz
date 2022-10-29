import { useState, useEffect } from "react";
import {Filmes} from '../components/types/filmes'
import { Principal } from "./styledApp";

export const Main = ()=> {
    const [filmes, SetFilmes] = useState<Filmes[]>([]);

  useEffect(()=>{
    Script()
    }, []);

 function Script() {
    fetch('https://api.b7web.com.br/cinema/').then((response)=>{
        return response.json();
    }).then((json)=>{
        SetFilmes(json)
    });
};
    return(
        <Principal>
            <div className="paralelograma">Filmes em Cartaz no Momento: {filmes.length}</div>

        <div className="grid">
            {filmes.map((item, index)=>(
            <div className="filmes">
                <img src={item.avatar} alt="" width={200}/>
                <h1>{item.titulo}</h1>
                <button><a href="">Comprar Ingresso</a></button>
            </div>
            ))}
      </div>
        </Principal>
    )
}