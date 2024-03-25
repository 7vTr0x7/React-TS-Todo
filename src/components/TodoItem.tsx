import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";

import { Delete } from "@mui/icons-material";

type PropType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo, completeHandler, deleteHandler }: PropType) => {
  return (
    <div>
      <Paper sx={{ padding: "1rem" }}>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography marginRight={"auto"}>{todo.title}</Typography>
          <Checkbox onChange={() => completeHandler(todo.id)} />
          <Button sx={{ color: "Black" }}>Edit</Button>
          <Button
            sx={{ color: "Black" }}
            onClick={() => deleteHandler(todo.id)}>
            <Delete />
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default TodoItem;
