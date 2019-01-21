import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader'
import { getQuestions } from '../../../actions';
import ThemeList from '../../organisms/ThemeList';
import './Dashboard.scss';

class Dashboard extends Component {

    componentDidMount(){
        if(this.props.questions) return
        else this.props.getQuestions()
    }
    render() {
        const { questions } = this.props
    return (
      <div className="dashboard">
            { !questions ? <Loader /> : 
                <ThemeList questions={questions} />
            }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    getQuestions: () => dispatch(getQuestions()),
})
const mapStateToProps = ({questions}) => ({questions})

export default connect(mapStateToProps, mapDispatchToProps )(Dashboard);