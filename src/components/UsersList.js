import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUsers } from "../store";
import Button from "./Button";
import SkeletonLoading from "./Skeleton";

function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = () => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return [isLoading, error, runThunk];
  };
}

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {}, [dispatch]);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUsers())
      .unwrap()
      .catch((err) => {
        setCreatingUserError(err);
      })
      .finally(() => {
        setIsCreatingUser(false);
      });
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
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {creatingUserError && <div>Error creating user</div>}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
