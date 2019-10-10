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

// ===============================================

type Props = {
  equipments: List<EquipmentRecord>,
};
const Wrapper = withTheme(styled.div`
  margin-top: ${(props) => props.theme.spacing(3)}px;
  height: 88vh;
  width: 98%;
  overflow: auto;
`);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

const EquipmentList = ({ equipments }: Props) => {
  const [list, setList] = useState(equipments);

  useEffect(() => {
    setList(equipments);
  }, [equipments]);

  const classes = useStyles();
  return (<ContentContainer>
    <ListSortBar onReverseSort={() => setList(list.reverse())}/>
    <Wrapper>
      <MuiList className={classes.root}>
        {list.size > 0 && list.map(item => <EquipmentListItem equipment={item} key={item.id}/>)}
      </MuiList>
    </Wrapper>
  </ContentContainer>);
};

const Select = () => {
  const { equipments } = useContext(EquipmentContext);
  return {
    equipments,
  };
};

export default withContext(
  memo(EquipmentList),
  Select,
);
