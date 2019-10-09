import React, { useContext, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// Components
import withContext from '../../utils/withContext';
import { EquipmentContext } from '../../Container/Equipments/equipmentContext';

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
  return (
    <ListItem button onClick={() => onToggleMultiple(isAllEquipSelected)}>
      <ListItemIcon>
        <Checkbox
          className={classes.indeterminate, classes.root}
          color="primary"
          edge="start"
          checked={isAllEquipSelected}
          indeterminate={!isAllEquipSelected && isSomeSelected}
          disableRipple
        />
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
          <Select
            value={10}
            onChange={() => {}}
            inputProps={{
              name: 'age',
              id: 'filled-age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </ListItemIcon>
    </ListItem>
  )
}

const ContextSelect = () => {
    const { onToggleMultiple, isAllEquipSelected, isSomeSelected } = useContext(EquipmentContext);
    return {
      onToggleMultiple,
      isAllEquipSelected,
      isSomeSelected
    };
  };
  
  export default withContext(
    memo(ListSortBar),
    ContextSelect,
  );
  