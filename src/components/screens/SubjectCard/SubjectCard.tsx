import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CustomAccordion from "../../ui/CustomAccordion/CustomAccordion";

export default function SubjectCard() {
  const theme = useTheme();

  return (
    <Card>
      <Box sx={{ display: "flex", p: 2 }} width="100" height="100">
        <Box width="100" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Danza
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://firebasestorage.googleapis.com/v0/b/nuestra-tribu.appspot.com/o/banners%2Fdanza1.png?alt=media&token=e96c048d-d0c4-4afe-b528-4c628f22f4ff"
          alt="Live from space album cover"
        />
      </Box>
      <Box sx={{ display: "flex", p: 2 }}>
        <CustomAccordion />
      </Box>
    </Card>
  );
}
