import React from 'react'
import Checkbox from '../Atoms/Checkbox'
import './Question.scss'

const Question = ({ question, index }) => {
  const handleSetAnswer = (answers, i) => (
    answers.map((answer, j) =>
      <Checkbox
        key={`key${i}-${j}`}
        id={`aw${i}-${j}`}
        name={`answer${i}`}
        q={answer.answer}
        value={answer.id}
      />)
  )

  return (
    <div className='question__item'>
      <form>
        <p>{question.question}</p>
        {handleSetAnswer(question.answers, index)}
      </form>
    </div>
  )
}

export default Question
