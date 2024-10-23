import { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const controller = new AbortController();
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
    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, error, data };
};

export default useUserData;
