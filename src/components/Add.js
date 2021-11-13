import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const Add = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [alert, setOpenAlert] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <div>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab
          style={{ backgroundColor: deepOrange[500] }}
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                rows={4}
                size="small"
                variant="outlined"
                defaultValue="About You"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who Can Comment?</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="Everybody"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everyone"
                />
                <FormControlLabel
                  value="Friends"
                  control={<Radio size="small" />}
                  label="Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alert}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Add;
