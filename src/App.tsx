import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: "1", title: "Todo 1", isCompleted: false },
    { id: "2", title: "Todo 2", isCompleted: true },
  ]);

  const completeHandler = (id: TodoItemType["id"]) => {};

  const deleteHandler = (id: TodoItemType["id"]) => {};

  return (
    <div>
      <Container maxWidth="sm" sx={{ height: "85vh" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography>Todo App</Typography>
          </Toolbar>
        </AppBar>

        <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </Stack>
        <TextField fullWidth label={"New Task"} />
        <Button sx={{ margin: "1rem 0" }} fullWidth variant="contained">
          Add
        </Button>
      </Container>
    </div>
  );
};

export default App;
