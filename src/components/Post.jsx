import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://randomwordgenerator.com/img/picture-generator/57e8d3444e51ab14f1dc8460962e33791c3ad6e04e50744172297bd59f4bc2_640.jpg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod si ita
            sit, cur opera philosophiae sit danda nescio. Si quicquam extra
            virtutem habeatur in bonis. Duo Reges: constructio interrete Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Quod si ita sit,
            cur opera philosophiae sit danda nescio. Si quicquam extra virtutem
            habeatur in bonis. Duo Reges: constructio interrete
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
