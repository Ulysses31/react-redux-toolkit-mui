import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addUser, updateUser, fetchUserById } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const usrDummy = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export default function UserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const userList = useSelector((state) => state.user.userList);

  const [usr, setUsr] = useState(usrDummy);

  useEffect(() => {
    if (parseInt(params.id) > 0) {
      dispatch(fetchUserById(+params.id));
      setUsr(selectedUser);
    } else {
      setUsr({ ...usrDummy });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser]);

  const formStateHandler = (e) => {
    setUsr({ ...usr, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Form Submitted...");

    if (usr.id > 0) {
      console.log("UPDATE...", usr);
      dispatch(updateUser(usr));
      navigateBack();
    } else {
      console.log("INSERT...", usr);
      usr.id = userList.length + 1;
      dispatch(addUser(usr));
      navigateBack();
    }
  };

  const navigateBack = () => {
    navigate("/users");
  };

  return (
    <section>
      <h1>User Form</h1>
      <form onSubmit={formSubmitHandler}>
        <input
          type="hidden"
          name="id"
          value={usr.id}
          onChange={formStateHandler}
          readOnly={true}
        />
        <table border="0" cellSpacing={5} cellPadding={2}>
          <caption>
            <span style={{ color: "#cdcdcd" }}>User Info</span>
          </caption>
          <tbody>
            <tr>
              <td>
                <TextField
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  value={usr.name}
                  onChange={formStateHandler}
                />
              </td>
              <td>
                <TextField
                  label="Username"
                  variant="outlined"
                  type="text"
                  name="username"
                  value={usr.username}
                  onChange={formStateHandler}
                />
              </td>
              <td>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="text"
                  name="email"
                  value={usr.email}
                  onChange={formStateHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  label="Phone"
                  variant="outlined"
                  type="text"
                  name="phone"
                  value={usr.phone}
                  onChange={formStateHandler}
                />
              </td>
              <td>
                <TextField
                  label="Website"
                  variant="outlined"
                  type="text"
                  name="website"
                  value={usr.website}
                  onChange={formStateHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table border="0" cellSpacing={5} cellPadding={2}>
          <caption>
            <span style={{ color: "#cdcdcd" }}>Address</span>
          </caption>
          <tbody>
            <tr>
              <td>
                <TextField
                  label="Street"
                  variant="outlined"
                  type="text"
                  name="street"
                  value={usr.address.street}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
              <td>
                <TextField
                  label="Suite"
                  variant="outlined"
                  type="text"
                  name="suite"
                  value={usr.address.suite}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
              <td>
                <TextField
                  label="City"
                  variant="outlined"
                  type="text"
                  name="city"
                  value={usr.address.city}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  label="ZipCode"
                  variant="outlined"
                  type="text"
                  name="zipcode"
                  value={usr.address.zipcode}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table border="0" cellSpacing={5} cellPadding={2}>
          <caption>
            <span style={{ color: "#cdcdcd" }}>Company</span>
          </caption>
          <tbody>
            <tr>
              <td>
                <TextField
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  value={usr.company.name}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
              <td>
                <TextField
                  label="CatchPhrase"
                  variant="outlined"
                  type="text"
                  name="catchPhrase"
                  value={usr.company.catchPhrase}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
              <td>
                <TextField
                  label="BS"
                  variant="outlined"
                  type="text"
                  name="bs"
                  value={usr.company.bs}
                  onChange={formStateHandler}
                  readOnly={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </form>
    </section>
  );
}
