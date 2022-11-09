import { useState, useEffect } from "react";
import {Filmes} from '../components/types/filmes'
import { Principal } from "./styledApp";
import { Carregar } from "./load";
import Swal from 'sweetalert2'

export const Main = ()=> {
    const [filmes, SetFilmes] = useState<Filmes[]>([]);
    const [load, setLoad] = useState(false);

  useEffect(()=>{
    Script()
    }, []);

 const Script = async ()=> {
    try {
    setLoad(true)
    let responde = await fetch('https://api.b7web.com.br/cinema/');
    let json = await responde.json();
    setLoad(false)
    SetFilmes(json)
        
    } catch (error) {
        setLoad(false)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo de errado não está certo, recarregue a página para tentar novamente!',
            iconColor: '#bb222f'
          })
    }
};
    return(
        <Principal>
            {!load &&
                <div className="paralelograma">Filmes em Cartaz no Momento: {filmes.length}</div>
            }

            {load &&
                <Carregar/>
             }
            

            <div className="grid">
                {filmes.map((item, index)=>(
                <div className="filmes">
                    {load &&
                        <div>Carregando...</div>
                    }
                    <img src={item.avatar} alt="" width={200}/>
                    <h1>{item.titulo}</h1>
                </div>
                ))}
            </div>
            <div className="botao">
                <button><a href="https://www.cinesystem.com.br/" target={'_blank'}>Comprar Ingresso</a></button>
            </div>
        </Principal>
    )
}