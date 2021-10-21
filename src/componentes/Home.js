import React from "react";
import styled from "styled-components";

const ImgLogo = styled.img`
  height: 12vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;
const ImgCarrinho = styled.img`
  height: 5vh;
`;

const HeaderHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: #4daecd;
  padding: 0px 20px 0px 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

const ButtonEContador = styled.div`
  display: flex;
`;

const ButtonCarrinho = styled.button`
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #4daecd;
  border: none;
`;
const Contador = styled.p`
  display: block;
  position: absolute;
  top: -4px;
  right: 1px;
  width: 20px;
  height: 20px;
  background: #e30001;
  text-align: center;
  border-radius: 50%;
  font-size: 15px;
  margin-right: 10px;
`;

const InputBusca = styled.input`
  margin-left: 30%;
  display: block;
  width: 30vw;
  height: 4vh;
  background-color: #4daecd;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left: 0%;
  }
  ::placeholder {
    color: black;
    margin-right: 5%;
    padding: 10px 10px 10px 10px;
  }
`;

const InputsPrice = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #eae7e7;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const InputMinMax = styled.input`
  margin: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  background-color: #eae7e7;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    margin: 0;
  }
`;

const Order = styled.select`
  margin: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  background-color: #eae7e7;
`;

class Home extends React.Component {
  render() {
    let valorContador = this.props.quantidadeProdutos;
    return (
      <div>
        <HeaderHome>
          <ImgLogo src="/img/space-art-logo.png" />
          <h1>Space Art</h1>
          <InputBusca
            placeholder="Busca por nome"
            value={this.props.query}
            onChange={this.props.updateQuery}
          />
          <ButtonEContador>
            <Contador>{valorContador}</Contador>
            <ButtonCarrinho onClick={this.props.renderizaCarrinho}>
              <ImgCarrinho src="/img/carrinho.png" />
            </ButtonCarrinho>
          </ButtonEContador>
        </HeaderHome>
        <InputsPrice>
          <div>
            <InputMinMax
              type="number"
              placeholder="Preço Minimo"
              value={this.props.minPrice}
              onChange={this.props.updateMinPrice}
            />
            <InputMinMax
              type="number"
              placeholder="Preço Máximo"
              value={this.props.MaxPrice}
              onChange={this.props.updateMaxPrice}
            />
          </div>
          <div>
            <label for="sort">Ordenação:</label>
            <Order
              name="order"
              value={this.props.order}
              onChange={this.props.updateOrder}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </Order>
          </div>
        </InputsPrice>
      </div>
    );
  }
}
export default Home;
