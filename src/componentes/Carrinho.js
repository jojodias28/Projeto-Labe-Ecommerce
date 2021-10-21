import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
  height: 90vh;
  width: 20vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 5px #4daecd;
  border-radius: 9px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 65vw;
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const HeaderHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 12vh;
  background-color: #4daecd;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

const ImgLogo = styled.img`
  height: 12vh;
`;

const MainPrincipal = styled.div`
  background-color: #eae7e7;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const FooterPrincipal = styled.div`
  background-color: #4daecd;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #4daecd;
    height: 16vh;
  }
`;

const IconeSocial = styled.img`
  height: 5vh;
  margin: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4vh;
    margin: 3px;
  }
`;

const Voltar = styled.button`
  width: 10vw;
  height: 6vh;
  background-color: black;
  color: white;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 6vh;
    width: 15vw;
    font-size: 8px;
    border-radius: 10px;
  }
`;

class Carrinho extends React.Component {
  pegarValorTotal = () => {
    let valorTotal = 0;

    for (let produtos of this.props.produtos) {
      valorTotal += produtos.price * produtos.quantidade;
    }

    return valorTotal;
  };

  render() {
    // console.log(this.props.produtos)
    return (
      <div>
        <HeaderHome>
          <ImgLogo src="/img/space-art-logo.png" />
          <h2>CARRINHO</h2>
          <div>
            <Voltar onClick={this.props.renderizaPaginaFalse}>
              Continuar Comprando
            </Voltar>
          </div>
        </HeaderHome>
        <MainPrincipal>
          {this.props.produtos.map((produto) => {
            return (
              <CardProduto>
                {produto.imagemURL}
                <p>{produto.name}</p>
                <p>R${produto.price},00</p>
                <p>{produto.quantidade}</p>
                <button onClick={() => this.props.removerProduto(produto.id)}>
                  Remover
                </button>
              </CardProduto>
            );
          })}
          <div>
            <p>
              <strong>Valor total: R${this.pegarValorTotal()},00</strong>
            </p>
          </div>
        </MainPrincipal>
        <FooterPrincipal>
          <h3>By Hellen, Joana e Mylena.</h3>
          <div>
            <IconeSocial src="/img/facebook.png" />
            <IconeSocial src="/img/instagram.png" />
            <IconeSocial src="/img/logotipo-social-do-twitter.png" />
          </div>
        </FooterPrincipal>
      </div>
    );
  }
}
export default Carrinho;
