import styled from 'styled-components'

export const Container = styled.div `
    font-family: Arial, Helvetica, sans-serif;
   
`

//Header
export const Cabecalho = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    nav{
        position: fixed;
        top: 0;
        margin-top: -7px;
        padding: 20px;
        display: flex;
        justify-content: center;
        background-color: rgba(187, 34, 47, 0.8);
        width: 100vw;
        }
    
    nav a {
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        }   

    .esq {
        margin-left: 30px;
    }

    .subHeader h1 {
        font-size: 50px;
        color: #FFFFFF;
        font-weight: bolder;
        text-shadow: 2px 2px black;
        margin-top: 60px;
    }
    
    //Responsividade:
    @media (max-width: 780px) {
        .subHeader {
           text-align: center;
           margin-left: 5px;
           margin-right: 5px;
        }
    }

    @media (max-width: 415px) {

        nav a{
            font-size: 13px;
        }

        .subHeader h1{
            margin-top: 100px;
            font-size: 30px;
        }
    }

`


//Main
export const Principal = styled.main `    
    .paralelograma {
        margin-top: 45px;
        width: 275px;
        height: 45px;
        transform: skew(-20deg);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(187, 34, 47);
        margin-left: 80px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #F9F9F9;
        text-decoration: none; 
        margin-bottom: 20px;
}

.paralelograma:hover{
    border: 2px solid #BB222F;
    background-color: rgba(0,0,0, 0.5);
}

.grid{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 20px;
}

.filmes {
    background-color: rgba(0,0,0, 0.5);
    width: 200px;
    margin: 25px;
    text-align: center;
    border-radius: 0 15px;
    box-shadow: 0 20px 25px -5px #000000;
}

.filmes h1 {
    color: white;
    font-size: 12px;
    padding: 5px;

}

.botao {
    display: flex;
    justify-content: center;
}

button {
    background-color: #BB222F;
    border: 2px solid #BB222F;
    padding: 10px;
    border-radius: 15px;
    margin: 8px 0 25px 0;
    
}

button:hover {
    border: 2px solid #BB222F;
    background-color: rgba(0,0,0, 0.5);
    
}

button a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: #F9F9F9;
}

`

//Footer
export const Rodape = styled.footer `
    text-align: center;
    width: 100%;
    padding: 3px;
    background-color: rgba(187, 34, 47, 0.8);
    color: #FFFFFF;
    padding: 8px;

    a{
        text-decoration: none;
        color:#FFFFFF;;
    }

    a:hover {
        text-decoration: underline;
    }
`


export const Load = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`