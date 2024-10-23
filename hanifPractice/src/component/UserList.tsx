const UserList = ({ isLoading, error, data }) => {
  if (isLoading) {
    <p>Loding....</p>;
  }
  if (error) {
    <p>Something Wrong</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
