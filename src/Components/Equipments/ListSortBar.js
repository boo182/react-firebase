import React, { useContext, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
// Components
import GenericSelect from '../Misc/GenericSelect';
import withContext from '../../utils/withContext';
import { EquipmentContext } from '../../Container/Equipments/equipmentContext';
import { NAME, DEFAULTS_COUNT, DOMAIN } from '../../constants';
import { CenteredAlignDiv } from '../Misc/FlexDivs';

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
}));

type Props = {
  onToggleMultiple: () => void,
  isAllEquipSelected: boolean,
  isSomeSelected: boolean,
}
const ListSortBar = ({ isAllEquipSelected, isSomeSelected, onToggleMultiple }: Props) => {
  const classes = useStyles();
  const handleChange = (e) => console.log(e.target.value);

  return (
    <CenteredAlignDiv button onClick={() => onToggleMultiple(isAllEquipSelected)}>
      <ListItemIcon>
        <Checkbox
          className={classes.indeterminate, classes.root}
          color="primary"
          edge="start"
          checked={isAllEquipSelected}
          indeterminate={Boolean(!isAllEquipSelected && isSomeSelected)}
          disableRipple
        />
        <GenericSelect
          value={NAME.value}
          onChange={handleChange}
          options={[NAME, DEFAULTS_COUNT, DOMAIN]}
          label="Tri"
          outlined
        />
      </ListItemIcon>
    </CenteredAlignDiv>
  )
}

const ContextSelect = () => {
    const { onToggleMultiple, isAllEquipSelected, isSomeSelected, sortList } = useContext(EquipmentContext);
    return {
      onToggleMultiple,
      isAllEquipSelected,
      isSomeSelected,
      sortList,
    };
  };
  
  export default withContext(
    memo(ListSortBar),
    ContextSelect,
  );
  