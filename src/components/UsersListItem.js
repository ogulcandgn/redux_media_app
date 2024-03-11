import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { removeUsers } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(removeUsers);

  const handleUserDelete = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button
        loading={isLoading}
        onClick={handleUserDelete}
        style={{ border: "none" }}
      >
        <IoMdCloseCircle size={23} className="ml-2" />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return;
};

export default UsersListItem;
