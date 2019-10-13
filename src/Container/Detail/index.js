// @flow
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { makeSelectEquipment, makeSelectCheckpoints } from './selector';
import { DetailContext as Context } from './detailContext';
import { loadEquipmentRequest, loadCheckpointRequest, updateNote } from './actions';
import LoadingIndicator from '../../Components/Misc/LoadingIndicator';
import EquipmentCard from '../../Components/Detail/EquipmentCard';

const Detail = (props) => {
  const equipId = props.match.params.equipmentId
  const { equipment } = props;
  
  useEffect(() => {
    props.loadCheckpoint(equipId);
  }, [equipment]);

  if (!props.equipment.id) {
    props.loadEquipment(equipId);
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
})


const mapDispatchToProps = dispatch => ({
  loadEquipment: (equipId: string) => dispatch(loadEquipmentRequest(equipId)),
  loadCheckpoint: (equipId: string) => dispatch(loadCheckpointRequest(equipId)),
  onUpdateNote: (note: string) => dispatch(updateNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
