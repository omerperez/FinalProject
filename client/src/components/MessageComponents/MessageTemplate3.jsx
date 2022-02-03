import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MessageTemplate3({
  messageName,
  title,
  textFields,
  images,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
      <Card
        sx={{
          width: "800px",
          height: "600px",
          border: "4px solid green",
          background: "grey",
        }}
      >
        <CardMedia component="img" height="400" image={images} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            <span style={{ fontSize: "15px" }}>{" (" + messageName + ")"}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {textFields.map((line) => {
              return (
                <>
                  <span style={{ fontSize: "14px", color: "green" }}>
                    {line}
                  </span>
                  <br />
                </>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Temlate 3</Button>
        </CardActions>
      </Card>
    </div>
  );
}
