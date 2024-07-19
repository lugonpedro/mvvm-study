import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import useUsersModel from "./model";

export default function UsersView({
  isPending,
  error,
  data,
}: ReturnType<typeof useUsersModel>) {
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        minWidth: "90vw",
        margin: "auto",
        padding: "20px",
        gap: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Users</Typography>
      </div>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data.data.map((user: any) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user.first_name} ${user.last_name}`}
              secondary={user.email}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
