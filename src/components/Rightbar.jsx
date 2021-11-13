import { Container, makeStyles, Typography, Avatar } from "@material-ui/core";

import { AvatarGroup } from "@material-ui/lab/";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com//static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </Container>
  );
};

export default RightBar;
