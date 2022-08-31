import { useDispatch } from "react-redux";
import { deleteUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function UserTableItem({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const editHandler = (id) => {
    if (id) {
      navigate(`/users/${id}`, { replace: true });
    }
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left">{user.id}</TableCell>
      <TableCell align="left">{user.name}</TableCell>
      <TableCell align="left">{user.username}</TableCell>
      <TableCell align="left">{user.email}</TableCell>
      <TableCell align="left">
        <Button variant="contained" onClick={() => editHandler(user.id)}>
          Edit
        </Button>
        <Button variant="contained" onClick={() => deleteHandler(user.id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
