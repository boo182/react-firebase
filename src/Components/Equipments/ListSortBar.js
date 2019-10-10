import React, { useContext, memo, useState } from 'react';
import styled from 'styled-components';
import { makeStyles, withTheme } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import IconButton from '@material-ui/core/IconButton';
// Components
import GenericSelect from '../Misc/GenericSelect';
import withContext from '../../utils/withContext';
import { EquipmentContext } from '../../Container/Equipments/equipmentContext';
import { sortTypeList, DEFAULTS_COUNT, filterTypeObject } from '../../constants';
import { CenteredAlignDiv } from '../Misc/FlexDivs';
import GenericInput from '../Misc/GenericInput';

// =================================================

const Container = withTheme(styled(CenteredAlignDiv)`
  height: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
  margin: ${({ theme }) => theme.spacing(2)}px;
`);

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey.dark,
    margin: theme.spacing(0.5),
  },
  indeterminate: {
    color: theme.palette.primary.main,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

type Props = {
  onToggleMultiple: () => void,
  isAllEquipSelected: boolean,
  isSomeSelected: boolean,
  equipmentSortType: string,
  onSortlist: () => void,
  equipmentFilter: string,
  onFilterEquipmentList: (string) => void,
  onReverseSort: () => void,
}
const ListSortBar = ({
  isAllEquipSelected,
  isSomeSelected,
  onToggleMultiple,
  equipmentSortType,
  onSortlist,
  equipmentFilter,
  onFilterEquipmentList,
  onReverseSort,
  onSetFilterType,
}: Props) => {
  const classes = useStyles();
  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => onSortlist(e.target.value);
  const onFilterEquipment = (e: React.ChangeEvent<HTMLInputElement>) => onFilterEquipmentList(e.target.value);
  const filterTypeList = sortTypeList.filter(item => item.value !== DEFAULTS_COUNT.value);
  const filterLabel = filterTypeObject[equipmentFilter.filterType].label;

  return (
    <Container>
        <Checkbox
          classes={{ indeterminate: classes.indeterminate, root: classes.root }}
          color="primary"
          edge="start"
          checked={isAllEquipSelected}
          indeterminate={Boolean(!isAllEquipSelected && isSomeSelected)}
          disableRipple
          onClick={() => onToggleMultiple(isAllEquipSelected)}
        />
        <GenericSelect
          value={equipmentSortType}
          onChange={handleChange}
          options={sortTypeList}
          label="Tri"
          outlined
        />
        <IconButton className={classes.button} onClick={onReverseSort} aria-label="delete">
          <SwapVertIcon />
        </IconButton>
        <GenericSelect
          value={equipmentFilter.filterType}
          onChange={(e) => onSetFilterType(e.target.value)}
          options={filterTypeList}
          label="Filtrer sur"
          outlined
        />
        <GenericInput
          value={equipmentFilter.filter}
          onChange={onFilterEquipment}
          label={filterLabel}
        />
    </Container>
  )
}

const ContextSelect = () => {
    const {
      onToggleMultiple,
      isAllEquipSelected,
      isSomeSelected,
      onSortlist,
      equipmentSortType,
      equipmentFilter,
      onFilterEquipmentList,
      onSetFilterType,
    } = useContext(EquipmentContext);
    return {
      onToggleMultiple,
      isAllEquipSelected,
      isSomeSelected,
      onSortlist,
      equipmentSortType,
      equipmentFilter,
      onFilterEquipmentList,
      onSetFilterType,
    };
  };
  
  export default withContext(
    memo(ListSortBar),
    ContextSelect,
  );
  