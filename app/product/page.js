import React from "react";
import { getData } from "./data";
import Navbar from "../../components/navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default async function page() {
  const data = await getData();
  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <Grid container spacing={3}>
        {data.map((result, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    style={{
                      width: "auto",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                    image={result.image}
                    alt="image"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    Price: {result.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
