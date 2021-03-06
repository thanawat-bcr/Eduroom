import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../../../api";
import Image from "next/image";
import { sTitle, sText, sButtionandVisbile } from "../../materialUIStyle";

const DeleteButton = (props) => {
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    failed: false,
  });

  const statusClose = () => {
    setSubmitStatus({
      success: false,
      failed: false,
    });

    props.onSuccess();
  };

  const handleClickOpen = () => {
    if (props.conno == undefined) {
      setOpen(true);
    } else {
      axios
        .delete("/api/grader/dcontestquestion", {
          params: {
            id: props.id,
            conno: props.conno,
            title: props.title,
            adminid: props.adminid,
          },
        })
        .then(() => {
          props.onSuccess();
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
    props.onSuccess();
  };

  const handleSubmit = () => {
    if (props.conno == undefined) {
      axios
        .delete("/api/grader/dquestion", {
          params: {
            id: props.id,
            title: props.title,
            adminid: props.adminid,
          },
        })
        .then(function (response) {
          setOpen(false);
          setTimeout(() => {
            setSubmitStatus({ ...submitStatus, success: true });
          }, 450);
        })
        .catch(function (error) {
          setOpen(false);
          setTimeout(() => {
            setSubmitStatus({ ...submitStatus, failed: true });
          }, 450);
        });
    }
  };

  return (
    <span>
      <button
        style={{
          padding: 0,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        {" "}
        <Image src="/images/graderCreate/del.svg" width="20" height="20" />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {" "}
          <span style={sTitle}>Are you sure?</span>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <span style={sText}>
              The Question No. {props.id} will be REMOVED from the system. Your
              action will be recorded in the Admin Log, EVERYONE WILL ACKNOWLEGE
              YOUR ACTION.
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <span style={sButtionandVisbile}>Cancel</span>
          </Button>
          <Button onClick={handleSubmit} color="primary">
            <span style={sButtionandVisbile}>Confrim</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.success} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Success!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}> The Question has been deleted.</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.failed} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Opps.... Something went wrong!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}> Come back again later...</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
};
export default DeleteButton;
