// @flow
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { makeSelectEquipment } from './selector';
import { DetailContext as Context } from './detailContext';
// import EquipmentList from '../../Components/Equipments/EquipmentList';
import { loadEquipmentRequest } from './actions';
// import { sortEquipmentList, filterEquipmentList, setFilterType } from '../../genericActions/uiActions'
import LoadingIndicator from '../../Components/Misc/LoadingIndicator';
import EquipmentCard from '../../Components/Detail/EquipmentCard';

const Detail = (props) => {

  if (!props.equipment.id) {
    props.loadEquipment(props.match.params.equipmentId);
    return <LoadingIndicator />
  }
  console.log(props)

  return (
    <Context.Provider value={props}>
      <EquipmentCard />
    </Context.Provider>
  ) 

}
const mapStateToProps = createStructuredSelector({
  equipment: makeSelectEquipment,
})


const mapDispatchToProps = dispatch => ({
  loadEquipment: (equipId: string) => dispatch(loadEquipmentRequest(equipId))
  // onToggleSelectEquipment: (equipId: string) => dispatch(toggleSelectEquipment(equipId)),
  // onToggleMultiple: (isAllSelected: boolean) => dispatch(toggleMultiple(isAllSelected)),
  // onSortlist: (sortType: string) => dispatch(sortEquipmentList(sortType)),
  // onFilterEquipmentList: (filter: string, filterType: string) => dispatch(filterEquipmentList(filter, filterType)),
  // onSetFilterType: (filterType: string) => dispatch(setFilterType(filterType)),
  // onDeleteEquipments: () => dispatch(deleteEquipments)
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
