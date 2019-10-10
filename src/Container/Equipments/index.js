// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {
  makeSelectEquipmentList,
  makeSelectFullMultipleSelection,
  makeSelectMultipleSelection
} from './selector';
import { EquipmentContext as Context } from './equipmentContext';
import EquipmentList from '../../Components/Equipments/EquipmentList';
import { toggleSelectEquipment, toggleMultiple } from './actions';
import { sortEquipmentList } from '../../genericActions/uiActions'

const Equipments = (props) => {
  return (
    <Context.Provider value={props}>
      <EquipmentList />
    </Context.Provider>
  ) 

}
const mapStateToProps = createStructuredSelector({
  equipments: makeSelectEquipmentList,
  isAllEquipSelected: makeSelectFullMultipleSelection,
  isSomeSelected: makeSelectMultipleSelection,
})


const mapDispatchToProps = dispatch => ({ 
  onToggleSelectEquipment: (equipId: string) => dispatch(toggleSelectEquipment(equipId)),
  onToggleMultiple: (isAllSelected: boolean) => dispatch(toggleMultiple(isAllSelected)),
  onSortlist: (sortType: string) => dispatch(sortEquipmentList(sortType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Equipments)


