import UsersList from "../components/Users/UsersList";
import LoadingUsers from "../components/Users/LoadingUsers";
import { useQuery } from "@tanstack/react-query";
import ErrorUsers from "../components/Users/ErrorUsers";
import { getUserFN } from "../api/users";

const UsersView = () => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUserFN,
  });

  return (
    <div>
      <h1>Este es mi listado de usuarios</h1>
      {/* Listado */}
      {/* {isLoading ? <LoadingUsers /> : <UsersList users={users} />} */}
      {isLoading && <LoadingUsers />}
      {isError && <ErrorUsers />}
      {isSuccess && <UsersList users={users} />}
    </div>
  );
};
export default UsersView;
