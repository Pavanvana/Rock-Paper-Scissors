import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`
export const ScoreContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  padding-bottom: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  margin-top: 0px;
`
export const ScoreCardContainer = styled.div`
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  min-width: 120px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ParagraphScore = styled.p`
  font-family: 'Bree Serif';
  color: #000000;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin: 0;
`

export const ScoreNumber = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`
export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  height: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 80%;
  align-self: flex-end;
`

export const PopUpButton = styled.button`
  width: 100px;
  border: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`

export const RulesImageContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RulesImage = styled.img`
  width: 60%;
  height: 60%;
  margin-bottom: 30px;
`
export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`
