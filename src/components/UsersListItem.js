import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { removeUsers } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";

const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(removeUsers);

  const handleUserDelete = () => {
    doDeleteUser(user);
  };

  return (
    <div className="my-2 border rounded flex items-center ">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button
          loading={isLoading}
          onClick={handleUserDelete}
          style={{ border: "none" }}
        >
          <IoMdCloseCircle size={23} className="ml-2" />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
