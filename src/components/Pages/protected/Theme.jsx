import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../../../actions'
import Button from '../../Atoms/Button'
import Modal from '../../Molecules/Modal'
import './Theme.scss'
import QuestionList from '../../organisms/QuestionList';
class Theme extends Component {
  state = {
    showModal: false,
    initQuestions: false
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleShowModal = () => {
    this.setState({
      showModal: false,
      initQuestions: false
    })
  }

  handleInitQuestions = () => {
    this.setState({
      initQuestions: true

    })
  }
  componentDidMount = () => {
    const {
      themes,
      handleOnSetTheme,
      match: {
        params: { id }
      }
    } = this.props

    handleOnSetTheme(themes[id])
  }

  render() {
    const { theme, history } = this.props
    const { showModal, initQuestions } = this.state
    console.log(this.props)
    return (
      <div className='theme__container'>
        {theme && (
          <>
            <img
              src={theme.theory.image}
              alt='imagen de tema'
              className='theme__image-img'
            />
            <div className='theme__theory'>
              <Button theme='button--orange button--goback' onClick={() => { history.goBack() }}>
                Atrás
              </Button>
              <Button theme='button--orange button--practice' onClick={() => { this.openModal() }}>
                Practicar
              </Button>
              {theme.theory.text}
            </div>
          </>
        )}
        {showModal && (
          initQuestions ? (
            <Modal handleShowModal={() => { this.handleShowModal() }} title='Practica'>
              <QuestionList questions={theme.practice} />
            </Modal>
          ) : (
              <Modal handleShowModal={() => { this.handleShowModal() }} title='¿ Deseas comenzar la practica ?'>
                <div className="button__container">
                  <Button onClick={() => { this.handleInitQuestions() }}>Aceptar</Button>
                  <Button theme='button--red' onClick={() => { this.handleShowModal() }}>Cancelar</Button>
                </div>
              </Modal>
            )
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ themes, theme }) => ({ themes, theme })

const mapDispatchToProps = dispatch => ({
  handleOnSetTheme: theme => dispatch(setTheme(theme))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme)
