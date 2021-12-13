import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import CustomAccordion from "../../ui/CustomAccordion/CustomAccordion";
import ClassRoom from "../../../classes/ClassRoom";

const TAG = "SUBJECT CARD";
type SubjectCardProps = {
  title?: string;
  description?: string;
  img?: string;
  classRooms?: ClassRoom[];
};
const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  description,
  img,
  classRooms = [],
}) => {
  console.log(TAG, "render");
  const theme = useTheme();

  return (
    <div>
      <Box sx={{ display: "flex", p: 2 }}>
        <Card>
          <Box sx={{ display: "flex", p: 2 }} width="100" height="100">
            <Box width="100" sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {title}
                </Typography>
                {description && (
                  <Typography component="div" variant="caption">
                    {description}
                  </Typography>
                )}
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, maxWidth: 150 }}
              image={img}
              alt={title + " classroom"}
            />
          </Box>
          <Box sx={{ display: "flex", p: 2 }}>
            {classRooms.map((item) => (
              <CustomAccordion title="Hola" description="pepe" />
            ))}
          </Box>
        </Card>
      </Box>
    </div>
  );
};
export default SubjectCard;
