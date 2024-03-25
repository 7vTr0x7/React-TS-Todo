import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";

import { Delete } from "@mui/icons-material";

type PropType = {
  todo: TodoItemType;
};

const TodoItem = ({ todo }: PropType) => {
  return (
    <div>
      <Paper sx={{ padding: "1rem" }}>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography marginRight={"auto"}>{todo.title}</Typography>
          <Checkbox />
          <Button sx={{ color: "Black" }}>Edit</Button>
          <Button sx={{ color: "Black" }}>
            <Delete />
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default TodoItem;
