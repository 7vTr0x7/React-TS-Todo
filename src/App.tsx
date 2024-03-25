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
import { useEffect, useState } from "react";
import { getTodos, saveTodos } from "./utils/features";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      if (item.id === id) item.isCompleted = !item.isCompleted;
      return item;
    });

    setTodos(newTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (
    id: TodoItemType["id"],
    title: TodoItemType["title"]
  ): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      if (item.id === id) item.title = title;
      return item;
    });

    setTodos(newTodos);
  };
  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.floor(Math.random() * 100)),
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

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
              editHandler={editHandler}
            />
          ))}
        </Stack>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          label={"New Task"}
        />
        <Button
          disabled={title === ""}
          onClick={submitHandler}
          sx={{ margin: "1rem 0" }}
          fullWidth
          variant="contained">
          Add
        </Button>
      </Container>
    </div>
  );
};

export default App;
