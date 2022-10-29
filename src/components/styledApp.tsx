import styled from 'styled-components'

export const Container = styled.div `
    font-family: Arial, Helvetica, sans-serif;
    /* height: 100vh; */
   
`

export const Cabecalho = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    nav{
        margin-top: 30px;
        display: flex;
        justify-content: center;
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
    }
  
`

export const Principal = styled.main `
    .paralelograma {
    margin-top: 45px;
    width: 275px;
    height: 45px;
    transform: skew(-20deg);
    border: 2px solid #BB222F;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #BB222F;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #F9F9F9;
    text-decoration: none; 
    margin-bottom: 20px;
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
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.filmes h1 {
    color: white;
    font-size: 12px;

}

button {
    background-color: #BB222F;
    padding: 10px;
    border: none;
    border-radius: 15px;
    margin: 8px;
}

button a {
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: #F9F9F9;
}

`