import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Delete } from "@mui/icons-material";
import { useState } from "react";

type PropType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (
    id: TodoItemType["title"],
    title: TodoItemType["title"]
  ) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);

  return (
    <div>
      <Paper sx={{ padding: "1rem" }}>
        <Stack direction={"row"} alignItems={"center"}>
          {editActive ? (
            <TextField
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
            />
          ) : (
            <Typography marginRight={"auto"}>{todo.title}</Typography>
          )}

          <Checkbox
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          />
          <Button
            sx={{ color: "Black" }}
            onClick={() => {
              setEditActive((prev) => !prev);
              editHandler(todo.id, textVal);
            }}>
            {editActive ? "Done" : "Edit"}
          </Button>
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
