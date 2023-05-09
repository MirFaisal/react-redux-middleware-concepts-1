import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUserData from "../../services/user_action/userAction";

const User = () => {
  const { isLoading, user, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <div>
      <h1>React-reduc Middleware</h1>
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {user.map((user) => (
        <h2 key={user.key}>{user.name}</h2>
      ))}
    </div>
  );
};

export default User;
