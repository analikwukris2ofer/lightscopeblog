import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.msfttechdays.com/wp-content/uploads/2021/07/Software-Development.jpg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure
            mollitia qui, ducimus saepe nostrum voluptatibus ipsum esse natus
            vero velit animi aut, molestias alias? Et at aliquam odit sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure
            mollitia qui, ducimus saepe nostrum voluptatibus ipsum esse natus
            vero velit animi aut, molestias alias? Et at aliquam odit sint.
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
}

export default Post;
