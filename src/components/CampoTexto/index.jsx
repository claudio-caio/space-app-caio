import { styled } from 'styled-components';
import search from './2search.png'

const ContainerEstalizado = styled.div`
    position: relative;
    display: inline-block;
`

const CampoTextoEstilizado = styled.input`
  height: 68px;
  padding: 12px 16px;
  border-radius: 20px;
  border: 2px solid #000;
  border-color: #C98Cf1;
  background: transparent;
  box-sizing: border-box;
  width: 500px;
  color: #d9d9d9;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  outline: none;
`
const IconoLupa = styled.img`
position: absolute;
top: 13px;
right: 10px;
width: 38px !important;
height: 39px;
`

const CampoTexto = () => {
    return<ContainerEstalizado>
        <CampoTextoEstilizado type="text" placeholder="¿Qué estas buscando?" />
        <IconoLupa src={search} alt="icono de Lupa" />
    </ContainerEstalizado>

}

export default CampoTexto;