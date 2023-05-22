import styled from 'styled-components'

export const Border = styled.p`
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 3rem;
  text-align: center;
  font-size: 1.5rem;
`
export const StyledButton = styled.button`
  width: 40%;
  height: 5rem;
  margin: 1%;
  text-align: center;
  font-size: 2rem;
  align-item: center;
  cursor: pointer;
`
export const StyledBody = styled.div`
  text-align: -webkit-center;
`
export const Background = styled.div<{ img: string }>`
  background-image: ${({img}) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
`;