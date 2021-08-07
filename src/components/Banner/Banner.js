import React from "react";
import { CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "60vh",
  },
  mediaText: {
    position: "absolute",
    top: "35%",
    left: " 50%",
    transform: "translate(-50%, -50%)",
    color: "#f6e900",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <CardMedia
        className={classes.media}
        image={
          "http://cdn.home-designing.com/wp-content/uploads/2018/04/Dark-living-room-scheme.jpg"
        }
      >
        <Typography className={classes.mediaText} variant="h3">Makes Your Happiness</Typography>
      </CardMedia>
    </div>
  );
};

export default Banner;
