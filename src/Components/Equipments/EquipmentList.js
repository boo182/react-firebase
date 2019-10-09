// @flow
import React, { useContext, memo } from 'react';
// Externals
import styled from 'styled-components';
import { withTheme, makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
// Components
import withContext from '../../utils/withContext';
import { EquipmentContext } from '../../Container/Equipments/equipmentContext';
import type { EquipmentRecord } from '../../flowTypes';
import type { Map } from 'immutable';
import EquipmentListItem from './EquipmentListItem';
import { ContentContainer } from '../Misc/ContentContainer';

// ===============================================

type Props = {
  foo: Map<string, EquipmentRecord>,
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
  const classes = useStyles();
  return (<ContentContainer>
    <Wrapper>
      <List className={classes.root}>
        {[...equipments.values()].map(item => <EquipmentListItem equipment={item} key={item.id}/>)}
      </List>
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
