// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { makeSelectEquipments } from './selector';
import { EquipmentContext as Context } from './equipmentContext';
import EquipmentList from '../../Components/Equipments/EquipmentList';
import { toggleSelectEquipment } from './actions';

const Equipments = (props) => {
  return (
    <Context.Provider value={props}>
      <EquipmentList />
    </Context.Provider>
  ) 

}
const mapStateToProps = createStructuredSelector({
  equipments: makeSelectEquipments,
})


const mapDispatchToProps = dispatch => ({ 
  onToggleSelectEquipment: (equipId: string) => dispatch(toggleSelectEquipment(equipId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Equipments)


