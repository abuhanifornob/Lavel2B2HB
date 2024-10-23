import { useEffect, useState } from "react";
import UserList from "./UserList";

const UserContainer = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  const getUserData = async () => {
    setIsloading(true);
    try {
      const res = await fetch(userUrl);
      const data = await res.json();
      setIsloading(false);
      setData(data);
      console.log(data);
    } catch (err) {
      setError(err);
    }
  };

  if (isLoading && !error) {
    <p>Loading .....</p>;
  }
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <UserList isLoading={isLoading} error={error} data={data} />
    </div>
  );
};

export default UserContainer;
