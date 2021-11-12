import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.main,
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        startIcon={<Person />}
        className={classes.button}
      >
        Material UI
      </Button>
    </div>
  );
};

export default Feed;
