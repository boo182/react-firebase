// @flow
import React, { useContext, memo, useState, useEffect } from 'react';
// Externals
import styled from 'styled-components';
import { withTheme, makeStyles } from '@material-ui/styles';
import { List as MuiList } from '@material-ui/core';
// Components
import withContext from '../../utils/withContext';
import { EquipmentContext } from '../../Container/Equipments/equipmentContext';
import type { EquipmentRecord } from '../../flowTypes';
import type { List } from 'immutable';
import EquipmentListItem from './EquipmentListItem';
import { ContentContainer } from '../Misc/ContentContainer';
import ListSortBar from './ListSortBar';
import FloatingButton from '../Misc/FloatingButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { Flex } from '../Misc/FlexDivs'


// ===============================================

type Props = {
  equipments: List<EquipmentRecord>,
  onDeleteEquipments: Funciton,
};

const Wrapper = withTheme(styled.div`
  margin-top: ${(props) => props.theme.spacing(3)}px;
  height: 75vh;
  width: 98%;
  overflow: auto;
`);

const FloatingButtonsContainer = withTheme(styled(Flex)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  justify-content: flex-end;
`);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

const EquipmentList = ({ equipments, onDeleteEquipments }: Props) => {
  const [list, setList] = useState(equipments);
  const disaplayDeleteButton = Boolean(equipments.find(item => item.selected));

  useEffect(() => {
    setList(equipments);
  }, [equipments]);

  const classes = useStyles();
  return (
    <ContentContainer>
      <ListSortBar onReverseSort={() => setList(list.reverse())}/>
      <Wrapper>
        <MuiList className={classes.root}>
          {list.size > 0 && list.map(item => <EquipmentListItem equipment={item} key={item.id}/>)}
        </MuiList>
      </Wrapper>
      <FloatingButtonsContainer>
        {disaplayDeleteButton && <FloatingButton onClick={onDeleteEquipments} icon={<DeleteIcon />} />}
        <FloatingButton onClick={() => console.log('delete')} icon={<AddIcon />} />
      </FloatingButtonsContainer>
    </ContentContainer>
  );
};

const Select = () => {
  const { equipments, onDeleteEquipments } = useContext(EquipmentContext);
  return {
    equipments,
    onDeleteEquipments,
  };
};

export default withContext(
  memo(EquipmentList),
  Select,
);
