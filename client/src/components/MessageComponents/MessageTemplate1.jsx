import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function MessageTemplate1({
  messageName,
  title,
  textFields,
  images,
  id
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
      <Card
        sx={{
          width: "800px",
          height: "600px",
          border: "4px solid pink",
          background: "#696969",
        }}
      >
        <CardMedia component="img" height="400" image={images} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b style={{ color: "pink" }}>{title}</b>
            <span style={{ fontSize: "15px", color: "pink" }}>
              {" (" + messageName + ")"}
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {textFields.map((line) => {
              return (
                <>
                  <span style={{ fontSize: "14px", color: "pink" }}>
                    {line}
                  </span>
                  <br />
                </>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" style={{ color: "pink" }}>
            Temlate 1
          </Button>
          <Button size="medium" style={{ color: "black" }}>
            Delete Message {" - " + title}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
