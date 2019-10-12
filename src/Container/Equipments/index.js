// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {
  makeSelectEquipmentList,
  makeSelectFullMultipleSelection,
  makeSelectMultipleSelection,
  makseSelectEquipmentSortType,
  makeSelectEquipmentFilter,
} from './selector';
import { EquipmentContext as Context } from './equipmentContext';
import EquipmentList from '../../Components/Equipments/EquipmentList';
import {
  toggleSelectEquipment,
  toggleMultiple,
  deleteEquipments,
  goToDetailPage,
  equipmentLoadRequest
} from './actions';
import { sortEquipmentList, filterEquipmentList, setFilterType } from '../../genericActions/uiActions';
import LoadingIndicator from '../../Components/Misc/LoadingIndicator';

const Equipments = (props) => {

  if (props.equipments.size === 0) {
    props.onLoadEquipments();
    return <LoadingIndicator />
  }
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
  onLoadEquipments: () => dispatch(equipmentLoadRequest),
  onToggleSelectEquipment: (equipId: string) => dispatch(toggleSelectEquipment(equipId)),
  onToggleMultiple: (isAllSelected: boolean) => dispatch(toggleMultiple(isAllSelected)),
  onSortlist: (sortType: string) => dispatch(sortEquipmentList(sortType)),
  onFilterEquipmentList: (filter: string, filterType: string) => dispatch(filterEquipmentList(filter, filterType)),
  onSetFilterType: (filterType: string) => dispatch(setFilterType(filterType)),
  onDeleteEquipments: () => dispatch(deleteEquipments),
  onGoToDetailPage: (equipmentId) => dispatch(goToDetailPage(equipmentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Equipments)


