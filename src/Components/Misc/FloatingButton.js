import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),

    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);
type Props = {
  onClick: () => void,
  icon: React.Node,
}
export default function FloatingActionButtons({ onClick, icon }: Props) {
  const classes = useStyles();

  return (
    <div>
      <Fab aria-label="delete" className={classes.fab} onClick={onClick}>
        {icon}
      </Fab>
    </div>
  );
}