import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

const TAG = "ACCORDION";
type AccordionProps = {
  prop1?: any;
};

const CustomAccordion: React.FC<AccordionProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <div className="Accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="ac1"
        >
          <Typography>Grado 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Selecciona el grupo</Typography>
          <Button variant="contained" color="primary">
            4A
          </Button>
          <Button variant="contained" color="primary">
            4B
          </Button>
          <Button variant="contained" color="primary">
            4C
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="ac2"
        >
          <Typography>Grado 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Selecciona el grupo</Typography>
          <Button variant="contained" color="primary">
            5A
          </Button>
          <Button variant="contained" color="primary">
            5B
          </Button>
          <Button variant="contained" color="primary">
            5C
          </Button>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Grado 6</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
};
export default CustomAccordion;
