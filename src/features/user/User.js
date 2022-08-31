import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchUsersApi } from "./userAPI";
import { fetchUsers } from "./userSlice";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";

export default function User() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);

  useEffect(() => {
    if (userList.length === 0) {
      fetchUsersApi().then((data) => {
        dispatch(fetchUsers(data));
      });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1>Users</h1>
      <Link to={'/users/0'}>New</Link>
      <UserTable users={userList} />
    </section>
  );
}
