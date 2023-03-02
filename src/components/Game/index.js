import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ButtonImages from '../ButtonImages'
import GameResult from '../GameResult'

import {
  GameContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ParagraphScore,
  ScoreNumber,
  ItemsImagesContainer,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineButton,
  CloseLineContainer,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state
    return (
      <GameResult
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, imageUrl) => {
    console.log(imageUrl)
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        apponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  onGetGameImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachImage => (
          <ButtonImages
            key={eachImage.id}
            buttonDetails={eachImage}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  renderPopUp = () => (
    <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
      {close => (
        <RulesImageContainer>
          <CloseLineContainer>
            <CloseLineButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </CloseLineButton>
          </CloseLineContainer>

          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesImageContainer>
      )}
    </Popup>
  )

  render() {
    const {showResult, score} = this.state
    return (
      <GameContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetGameImages()}
        <PopUpContainer>{this.renderPopUp()}</PopUpContainer>
      </GameContainer>
    )
  }
}
export default Game
