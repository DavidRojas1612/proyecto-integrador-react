import React, { Component } from 'react'
import Question from './Question'
import Button from '../Atoms/Button'
import './QuestionList.scss'

class QuestionList extends Component {
  state = {
    index: 0
  }
  handleRenderQuestion = questions => (questions.map((q, i) => <Question key={`q${i}`} index={i} question={q} />))
  handleNextQuestion = (index, size) => {
    if (index < size - 1) {
      this.setState({ index: ++index })
    }
  }
  handlePrevQuestion = (index, size) => {
    if (index >= 1) {
      this.setState({ index: --index })
    }
  }
  render() {
    const { index } = this.state
    const { questions } = this.props
    const size = questions.length
    return (
      <div className='question'>
        <div className='question__container' style={{
          'transform': `translateX(-${index * 100}%)`
        }}>
          {this.handleRenderQuestion(questions)}
        </div>
        <div className='question__actions'>
          <Button onClick={() => { this.handlePrevQuestion(index, size) }}>Atrás</Button>
          <Button onClick={() => { this.handleNextQuestion(index, size) }}>Siguiente</Button>
        </div>
      </div >
    )
  }
}

export default QuestionList
