import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.main,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
