import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActions } from "@mui/material";

export default function MessageCard({
  image,
  title,
  id
}) {
  return (
    <div className="car-card-div">
      <Card className="car-card-width">
        <CardMedia component="img" height="170" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions style={{ padding: 15 }}>
          <Link
            to={"message/" + id}
            style={{
              marginRight: "10%",
              textDecoration: "none",
            }}
          >
            Edit
          </Link>
          <Link
            to={"/delete/" + id}
            style={{
              textDecoration: "none",
              color: "red",
            }}
          >
            Delete
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
