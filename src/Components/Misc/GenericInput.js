import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }),
);

type Props = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

export default function CustomizedSelects( { value, onChange }: Props) {
  const classes = useStyles();
  return (
      <TextField
        id="outlined-name"
        label="Filtre"
        className={classes.textField}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
  );
}