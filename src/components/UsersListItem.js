import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const UsersListItem = ({ user }) => {
  return (
    <div className="my-2 border rounded flex items-center ">
      <div>
        <IoMdCloseCircle size={23} className="ml-2" />
      </div>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
