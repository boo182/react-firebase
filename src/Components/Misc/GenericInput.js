
import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(2),
      }
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      width: 300,
      padding: "5px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderColor: theme.palette.primary.main
      }
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
  })
);

const GenericInput = ({ label, value, onChange }) => {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <FormControl>
        <InputLabel shrink htmlFor="bootstrap-input">
          {label}
        </InputLabel>
        <BootstrapInput       
          id="outlined-name"
          value={value}
          onChange={onChange}
          variant="outlined"/>
      </FormControl>
    </form>
  );
}

export default GenericInput
