import "./LoadingPage.scss";
import React from "react";
import Loader from "../../ui/Loader/Loader";
import { Typography } from "@mui/material";
const TAG = "LOADING PAGE";
type LoadingPageProps = {
  title?: string;
};
const LoadingPage: React.FC<LoadingPageProps> = ({ title }) => {
  console.log(TAG, "render");
  return (
    <div className="LoadingPage">
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Loader zoom={1} />
    </div>
  );
};
export default LoadingPage;
