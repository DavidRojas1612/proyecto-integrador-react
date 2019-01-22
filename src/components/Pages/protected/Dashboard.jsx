import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader'
import { getThemes, setTitle } from '../../../actions'
import ThemeList from '../../organisms/ThemeList'
import './Dashboard.scss'

class Dashboard extends Component {
  state = {
    isResetTitle:false
  }

  componentDidMount () {
    const { isResetTitle } = this.state
    if (!this.props.themes) this.props.getThemes() 
    if(!isResetTitle) this.setTitle()
  }
  
  setTitle = () =>{
    this.props.setTitle('Topics Board')
    this.setState({
      isResetTitle:true
    }) 
  }

  render () {
    const { themes} = this.props
    return (
      <div className='dashboard'>
        {!themes ? <Loader /> : 
          <ThemeList themes={themes} /> 
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getThemes: () => dispatch(getThemes()),
  setTitle: value =>  dispatch(setTitle(value))
})
const mapStateToProps = ({ themes }) => ({ themes })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
