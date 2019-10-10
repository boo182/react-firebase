// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {
  makeSelectEquipmentList,
  makeSelectFullMultipleSelection,
  makeSelectMultipleSelection,
  makseSelectEquipmentSortType,
  makeSelectEquipmentFilter
} from './selector';
import { EquipmentContext as Context } from './equipmentContext';
import EquipmentList from '../../Components/Equipments/EquipmentList';
import { toggleSelectEquipment, toggleMultiple } from './actions';
import { sortEquipmentList, filterEquipmentList } from '../../genericActions/uiActions'

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
  equipmentSortType: makseSelectEquipmentSortType,
  equipmentFilter: makeSelectEquipmentFilter,
})


const mapDispatchToProps = dispatch => ({ 
  onToggleSelectEquipment: (equipId: string) => dispatch(toggleSelectEquipment(equipId)),
  onToggleMultiple: (isAllSelected: boolean) => dispatch(toggleMultiple(isAllSelected)),
  onSortlist: (sortType: string) => dispatch(sortEquipmentList(sortType)),
  onFilterEquipmentList: (filter: string) => dispatch(filterEquipmentList(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Equipments)


