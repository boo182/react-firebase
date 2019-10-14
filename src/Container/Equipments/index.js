// @flow
import React, { memo } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {
  makeSelectEquipmentList,
  makeSelectFullMultipleSelection,
  makeSelectMultipleSelection,
  makseSelectEquipmentSortType,
  makeSelectEquipmentFilter,
  makeSelectEquipmentsLoaded
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
import { loadCheckpointRequest } from '../../genericActions/checkpointsActions';
import LoadingIndicator from '../../Components/Misc/LoadingIndicator';

const Equipments = (props) => {

  console.log(props.equipmentsLoaded)
  if (!props.equipmentsLoaded) {
    props.loadCheckpoint();
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
  equipmentsLoaded: makeSelectEquipmentsLoaded,
})


const mapDispatchToProps = dispatch => ({
  onLoadEquipments: () => dispatch(equipmentLoadRequest),
  onToggleSelectEquipment: (equipId: string) => dispatch(toggleSelectEquipment(equipId)),
  onToggleMultiple: (isAllSelected: boolean) => dispatch(toggleMultiple(isAllSelected)),
  onSortlist: (sortType: string) => dispatch(sortEquipmentList(sortType)),
  onFilterEquipmentList: (filter: string, filterType: string) => dispatch(filterEquipmentList(filter, filterType)),
  onSetFilterType: (filterType: string) => dispatch(setFilterType(filterType)),
  onDeleteEquipments: () => dispatch(deleteEquipments),
  onGoToDetailPage: (equipmentId) => dispatch(goToDetailPage(equipmentId)),
  loadCheckpoint: () => dispatch(loadCheckpointRequest),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Equipments))


