import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export default function EditTodo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
}
