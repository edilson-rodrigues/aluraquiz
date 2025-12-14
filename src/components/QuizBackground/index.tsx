import styled from 'styled-components';

interface Props {
  backgroundImage?: string;
}

const QuizBackground = styled.div<Props>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* layer a gradient que vai do transparente para a cor primária no final
      para criar o efeito de fade da imagem para o fundo roxo */
    background-image: linear-gradient(to bottom, rgba(0,0,0,0) 60%, ${({ theme }) => theme.colors.primary} 100%), url(${({ backgroundImage }) => backgroundImage});
    background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  @media screen and (max-width: 500px) {
    /* Em telas pequenas usamos o mesmo efeito, mas com a imagem posicionada
       no topo e um overlay do gradiente para o final roxo do background */
    background-image: linear-gradient(to bottom, rgba(0,0,0,0) 60%, ${({ theme }) => theme.colors.primary} 100%), url(${({ backgroundImage }) => backgroundImage});
    background-position: center top;
    &:before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, ${({ theme }) => theme.colors.primary} 100%);
      z-index: 2;
    }
    /* overlay gradient at the bottom to create a smooth transparency/fade effect
       from the image into the purple background */
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 220px;
      pointer-events: none;
      /* using primary color RGBA for a smooth fade */
      background: linear-gradient(to bottom, rgba(63,81,181,0) 0%, rgba(63,81,181,0.95) 100%);
      z-index: 6;
    }
    > *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
