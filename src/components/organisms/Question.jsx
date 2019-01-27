import React, { Component } from 'react'
import Checkbox from '../Atoms/Checkbox'
import './Question.scss'


class Question extends Component {

  state = {
    answer: null
  }

  handleSelectAnswer = (e) => {
    e.persist()
    console.log(e.target.value)
    this.setState({
      answer: e.target.value
    })

  }

  handleSetAnswer = (answers, i) => (
    answers.map((answer, j) =>
      <Checkbox
        key={`key${i}-${j}`}
        id={`aw${i}-${j}`}
        name={`answer${i}`}
        q={answer.answer}
        value={answer.id}
        onSelect={this.handleSelectAnswer}
      />)
  )

  render() {
    const { question, index } = this.props
    const { answer } = this.state
    return (
      <div className='question__item'>
        <form>
          <h4>{question.question}</h4>
          {this.handleSetAnswer(question.answers, index)}
        </form>
        {answer && (
          answer === question.correct ? (
            <div className="message message__correct">Felicidades, Respuesta correcta!</div>
          ) : (
              <div className="message message__fail">Lo sentimos, Respuesta incorrecta!</div>
            )
        )}
      </div>
    )
  }
}


export default Question
