import React, { Component } from 'react'
import { connect } from 'react-redux';
import { equipmentLoadRequest } from './actions';

export class Equipments extends Component {
    render() {
        return (
            <div>
              <button onClick={() => this.props.onIncrement()}>++</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(equipmentLoadRequest),
});

export default connect(false, mapDispatchToProps)(Equipments)
