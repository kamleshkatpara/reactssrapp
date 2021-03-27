import React from "react";
import { Route, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Todo from "./features/todos";
import AddTodo from "./features/todos/addTodo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography align="center" variant="h6" className={classes.title}>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/addtodo">Add</Link>
            </li>
          </ul>

          <hr />
          <Route exact path="/">
            <Todo />
          </Route>
          <Route path="/addtodo">
            <AddTodo />
          </Route>
        </div>
      </div>
    </Container>
  );
}
