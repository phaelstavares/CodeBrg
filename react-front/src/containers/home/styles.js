import styled from "styled-components"


export const Container = styled.div `
    background: black;
    background-size: cover; // cobrir toda a tela com a imagem

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
    height: 100%;
    min-height: 100vh;
`

export const Imagem = styled.img `
    margin-top: 30px;
`

export const ContainerItens = styled.div `
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0 0;

    padding: 50px 36px;
    display: flex;
    flex-direction: column;

    min-height: calc(100vh - 250px);
`

export const InputLabel = styled.p `
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #EEEEEE;
    margin-right: 280px;
    margin-bottom: -40px;
`

export const Input = styled.input `
    width: 342px;
    height: 58px;
    border-radius: 14px;
    padding-left: 25px;
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;

    &::placeholder {
        color: #ffffff;
    }
`