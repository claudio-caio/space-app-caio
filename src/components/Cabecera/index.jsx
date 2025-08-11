import styled from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderEStilizado = styled.header`
 padding: 60px 0;
 display: flex;
 justify-content: space-between;
 img{
    width: 200px;
 }
`

const Cabecera = () => {
    return <HeaderEStilizado>
        <img src="img/logo.png" alt="Logo de Sapce App" />
        <CampoTexto/>
    </HeaderEStilizado>
}

export default Cabecera;