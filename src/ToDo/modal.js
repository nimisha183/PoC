import React from "react";
import { Button } from "reactstrap";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { edit } from "./redux/slices/todoSlice";

import { useDispatch } from "react-redux";

export default function FormDialog({ title,id }) {
  //  console.log("hi");
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [newtitle, setTitle] = React.useState(title);

  const handleClickOpen = () => {
    setOpen(true);
  };
  //   console.log(title);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ marginLeft: "10px" }}
        className="addTodo"
        onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Enter new title for #{id}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Enter new title
          </DialogContentText> */}
          <input
            autoFocus
            margin="dense"
            id="name"
            // label="Enter new title"
            defaultValue={title}
            type="text"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
                  <Button onClick={() => {
                      dispatch(edit([newtitle, id]));
                  handleClose()}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
