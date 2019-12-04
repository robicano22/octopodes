import React, {Component} from  'react';
import Card from './card.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'

const mapStateToProps = (state) => ({
  newCard: state.jobCards.newCard,
  interested: state.jobCards.interested,
  applied: state.jobCards.applied,
  phone: state.jobCards.phone,
  onsite: state.jobCards.onsite,
  offer: state.jobCards.offer,
  accepted: state.jobCards.accepted,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchSubmitInfo: (company, role, link) => {
    return dispatch(actions.submitInfoActionCreator(company, role, link))
  },
})

class Column extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const relevantCards = [];
    const arrayInState = this.props[this.props.id];
    for (let i = 0; i < arrayInState.length; i += 1){
      relevantCards.push(<Card jobObject={arrayInState[i]} inArray={true} key={`arrayCard${i}`}/>)
    }
    return (
      <div id='column' style={{
        margin: '40px',
        border: '5px solid pink',
        width: '200px',
        height: '200px',
        }}>
        <h2>{this.props.column}</h2>
        <Card newCard={this.props.newCard} dispatchSubmitInfo={this.props.dispatchSubmitInfo} columnID={this.props.id}/>
        { relevantCards }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);
