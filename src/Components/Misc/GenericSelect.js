// @flow
import React from 'react';
// Externals
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';

// ================================================

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
  },
  inputRoot: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px, 10px 5px 10px',
    '&:focus': {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: 'transparent',
    },
  },
  outlined: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '5px 30px 5px 12px',

    '&:focus': {
      borderRadius: 4,
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.main,
    },
  },
  inputLabel: {
    color: theme.palette.grey.dark,
  },
}));

type Props = {
  value: string | number,
  label?: string | IntlShape,
  onChange: () => void,
  options: Array<{ value: string | number, label: any }>,
  inputProps?: { name: string, id: string | number },
  outlined?: boolean,
};

const GenericSelect = ({ value, onChange, options, inputProps, outlined, label }: Props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        {label && <InputLabel classes={{ root: classes.inputLabel }}>{label}</InputLabel>}
        <Select
          value={value}
          onChange={onChange}
          input={
            <InputBase
              name="axe"
              id="axe-customized-select"
              classes={{ root: classes.inputRoot, input: outlined ? classes.outlined : classes.input }}
            />
          }
          inputProps={inputProps}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value} dense>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default GenericSelect;
