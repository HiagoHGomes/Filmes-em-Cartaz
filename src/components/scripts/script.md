import { useState, useEffect } from "react";
import {Filmes} from '../types/filmes'

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