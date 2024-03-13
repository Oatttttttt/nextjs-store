import React from "react";
import Navbar from "../components/navbar";
import Alert from "@mui/material/Alert";

export default function page() {
  return (
    <div>
      <Navbar />
      <Alert severity="success">Welcome!!!</Alert>
    </div>
  );
}
