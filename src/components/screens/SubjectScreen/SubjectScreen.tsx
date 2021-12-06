import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import React from "react";
import MoreIcon from "@mui/icons-material/Add";
import SubjectCard from "../SubjectCard/SubjectCard";
const TAG = "SUBJECT SCREEN";
type SubjectScreenProps = {
  prop1?: any;
};
const SubjectScreen: React.FC<SubjectScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <div className="SubjectScreen">
      <SubjectCard />
    </div>
  );
};
export default SubjectScreen;

// de modelo business:

const AddNewSubjectButton = (props: any) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={`GridBusiness00`}>
      <CardActionArea onClick={props.onClick}>
        <Card
          className="AddNewBusiness"
          sx={(t) => ({ bgcolor: t.palette.secondary.light, width: "100%" })}
        >
          <MoreIcon sx={{ fontSize: 80, color: "secondary.darkPlus" }} />
          <Box position="absolute" bottom={0} p={2}>
            <Typography sx={{ color: "secondary.darkPlus" }}>
              Agregar nueva materia
            </Typography>
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
