import { useEffect, useState } from "react";
import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UserContainer = () => {
  const { isLoading, error, data } = useUserData();

  return (
    <div>
      <UserList isLoading={isLoading} error={error} data={data} />
    </div>
  );
};

export default UserContainer;
