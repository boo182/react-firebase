// @flow
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { makeSelectEquipment, makeSelectCheckpoints, makeSelectCheckpointsLoaded } from './selector';
import { DetailContext as Context } from './detailContext';
import { loadEquipmentRequest, loadAssociatedCheckpointsRequest, updateNote } from './actions';
import LoadingIndicator from '../../Components/Misc/LoadingIndicator';
import EquipmentCard from '../../Components/Detail/EquipmentCard';
import { loadCheckpointRequest } from '../../genericActions/checkpointsActions'; 

const Detail = (props) => {
  const equipId = props.match.params.equipmentId
  const { equipment, checkpointsLoaded } = props;
  
  useEffect(() => {
    props.loadCheckpoint(equipId);
  }, [equipment, checkpointsLoaded]);

  if (!props.equipment.id) {
    props.loadEquipment(equipId);
    props.onLoadCheckpointsRequest()
    return <LoadingIndicator />;
  }

  return (
    <Context.Provider value={props}>
      <EquipmentCard />
    </Context.Provider>
  ) 
}
const mapStateToProps = createStructuredSelector({
  equipment: makeSelectEquipment,
  checkpoints: makeSelectCheckpoints,
  checkpointsLoaded: makeSelectCheckpointsLoaded,
})


const mapDispatchToProps = dispatch => ({
  loadEquipment: (equipId: string) => dispatch(loadEquipmentRequest(equipId)),
  loadCheckpoint: (equipId: string) => dispatch(loadAssociatedCheckpointsRequest(equipId)),
  onUpdateNote: (note: string) => dispatch(updateNote(note)),
  onLoadCheckpointsRequest: () => dispatch(loadCheckpointRequest)
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
