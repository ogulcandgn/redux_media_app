import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import SkeletonLoading from "./Skeleton";

const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <SkeletonLoading times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div>{data.length}</div>;
};

export default UsersList;
