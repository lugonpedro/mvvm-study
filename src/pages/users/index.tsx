import useUsersModel from "./model";
import UsersView from "./view";

export default function Users() {
  const usersModel = useUsersModel();

  return <UsersView {...usersModel} />;
}
