import { Modal, ModalProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const TAG = "CUSTOM MODAL";
interface CModalProps extends ModalProps {}
const CModal: React.FC<CModalProps> = (props) => {
  console.log(TAG, "render");
  return (
    <Modal {...props} open={props.open} onClose={props.onClose}>
      <Box margin={3} maxHeight={"95%"} overflow="auto">
        {props.children}
      </Box>
    </Modal>
  );
};
export default CModal;
