import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import "./Modal.css";

const Modal = ({ open, handleCloseModal, user }) => {
  var {
    name,
    username,
    email,
    address: { street },
    phone,
  } = user;

  return (
    <Dialog
      onClose={handleCloseModal}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleCloseModal}>
        User Modal
      </DialogTitle>
      <DialogContent dividers style={{ padding: "0 2rem" }}>
        <table>
          <tr className="modal" style={{ fontWeight: "bold" }}>
            <td className="flex"> Name</td>
            <td className="flex">Username</td>
            <td className="flex"> Email</td>
            <td className="flex"> Address</td>
            <td className="flex">Phone</td>
          </tr>
          <tr className="modal">
            <td className="flex"> {name}</td>
            <td className="flex"> {username}</td>
            <td className="flex"> {email}</td>
            <td className="flex">{street}</td>
            <td className="flex">{phone}</td>
          </tr>
        </table>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCloseModal} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
