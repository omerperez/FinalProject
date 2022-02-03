import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MessageTemplate2({ messageName, title, textFields, images }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
      <Card
        sx={{
          width: "800px",
          height: "600px",
          border: "4px solid black",
          background: "grey",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "navy" }}
          >
            {title}
            <span style={{ fontSize: "15px" }}>{" (" + messageName + ")"}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {textFields.map((line) => {
              return (
                <>
                  <span style={{ fontSize: "14px", color: "navy" }}>
                    {line}
                  </span>
                  <br />
                </>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions style={{ borderBottom: "4px solid black" }}>
          <Button size="medium">Temlate 2</Button>
        </CardActions>
        <CardMedia component="img" height="400" image={images} />
      </Card>
    </div>
  );
}
