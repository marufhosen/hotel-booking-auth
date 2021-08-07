import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";
import MoneyIcon from "@material-ui/icons/Money";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActionAlign: {
    flexGrow: 1,
  },
}));

const Room = (props) => {
  const { title, description, imgUrl, bed, capacity, bedType, price } =
    props.room;
  const classes = useStyles();
  const history = useHistory();
  const handleBook = () => {
    history.push(`/book/${bedType}`);
  };
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={title}
          subheader={bedType}
        />
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography>Bed: {bed}</Typography>
          {/* <IconButton aria-label="info">
            <InfoIcon />
          </IconButton>
          <Typography>Capacity: {capacity}</Typography> */}
          <IconButton aria-label="money">
            <MoneyIcon />
          </IconButton>
          <Typography className={classes.cardActionAlign}>
            Price: {price} $
          </Typography>
          <Button
            onClick={() => handleBook(bedType)}
            variant="contained"
            color="primary"
          >
            Book Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Room;
