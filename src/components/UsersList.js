import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUsers } from "../store";
import Button from "./Button";
import SkeletonLoading from "./Skeleton";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, seLoadingUsersError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        setIsLoadingUsers(false);
      })
      .catch((err) => {
        setIsLoadingUsers(err);
      });
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUsers());
  };

  if (isLoadingUsers) {
    return <SkeletonLoading times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 mt-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl ">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
