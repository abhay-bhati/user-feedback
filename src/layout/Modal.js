import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ModalContext} from '../store/modal-context';
import {useHistory} from 'react-router-dom';

export default function AlertDialog(props) {
  
  const ModalCtx = useContext(ModalContext);
  const [open, setOpen] = React.useState(ModalCtx.modal);
  const history = useHistory();

  const handleClose = () => {
    ModalCtx.setmodal(false);
    history.replace('/table');
  };


  return (
    <div>
      <Dialog
        open={ModalCtx.modal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Feedback Submitted"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you for completing the information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
