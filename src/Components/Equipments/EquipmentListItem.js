import React, { useContext, memo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
// Components
import withContext from '../../utils/withContext';
import { EquipmentContext } from '../../Container/Equipments/equipmentContext';

// ================================================


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    paperRoot: {
      margin: theme.spacing(2),
      borderRadius: 3,
    }
  }),
);


type Props = {
  equipment: EquipmentRecord,
}

const EquipmentListItem = ({ equipment, onToggleSelectEquipment }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paperRoot} elevation={1}>
      <ListItem button onClick={() => onToggleSelectEquipment(equipment.id)}>
        <ListItemIcon>
          <Checkbox
            color="primary"
            edge="start"
            checked={equipment.selected}
            disableRipple
            inputProps={{ 'aria-labelledby': equipment.id }}
          />
        </ListItemIcon>
        <ListItemText id={equipment.id} primary={equipment.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}

const Select = () => {
  const { equipments, onToggleSelectEquipment } = useContext(EquipmentContext);
  return {
    equipments,
    onToggleSelectEquipment,
  };
};

export default withContext(
  memo(EquipmentListItem),
  Select,
);