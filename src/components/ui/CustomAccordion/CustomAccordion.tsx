import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const TAG = "ACCORDION";
type AccordionOption = {
  name: string;
  onClick: () => void;
};
type AccordionProps = {
  title?: string;
  description?: string;
  buttons?: AccordionOption[];
};

const CustomAccordion: React.FC<AccordionProps> = ({
  title = "",
  description = "",
  buttons = [],
}) => {
  console.log(TAG, "render");
  return (
    <div className="Accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          <Stack direction="row" spacing={2}>
            {buttons.map((item) => (
              <Button
                onClick={() => item.onClick()}
                variant="contained"
                color="primary"
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default CustomAccordion;
