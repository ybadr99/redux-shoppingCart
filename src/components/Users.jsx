import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../features/users/usersSlice';
const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <ul style={{ textAlign: 'center' }}>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <p>{error && <h3>{error}</h3>}</p>
    </>
  );
};

export default Users;
