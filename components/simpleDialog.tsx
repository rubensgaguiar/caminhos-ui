import React from "react";

import {
  Dialog,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from '@mui/material/styles';

import YoutubeVideo from "./youtube";

import styles from "../styles/Dialog.module.css";

import { Checkpoint, SimpleDialogProps } from "../common/types";

const TitleTypography = styled(Typography)({
  marginTop: 32,
});

const TextTypography = styled(Typography)({
  marginTop: 8,
});

const ContainerCaminho = styled(Container)({
  marginTop: 16,
  marginBottom: 16,
});


function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  return selectedValue && (
    <Dialog fullScreen onClose={handleClose} open={open}>
      <AppBar color="transparent" sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {selectedValue.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <ContainerCaminho maxWidth="md">
        <YoutubeVideo
          title={selectedValue.title}
          videoId={selectedValue.youtubeId}
        />
        <TitleTypography variant="h6">
          Caminho
        </TitleTypography> 
        {selectedValue.caminho.map((checkpoint: Checkpoint, index: number) => (
          <TextTypography key={index + 1}>
            {index + 1}.{" "}
            <Link href={checkpoint.link} target="_blank" rel="noopener">
              {checkpoint.title}
            </Link>
          </TextTypography>
        ))}
        <TitleTypography variant="h6">
          Descrição
        </TitleTypography> 
        {selectedValue.description.map((paragraph: string) => (
          <TextTypography key={0}>
            {paragraph}
          </TextTypography>
        ))}
        {
          selectedValue.extras.length > 0 &&
            <TitleTypography variant="h6">
              Extras
            </TitleTypography>
        }
        <TextTypography>
          {selectedValue.extras_description}
        </TextTypography>

        {selectedValue.extras.map((checkpoint: Checkpoint, index: number) => (
          <TextTypography key={index + 1}>
            {index + 1}.{" "}
            <Link href={checkpoint.link} target="_blank" rel="noopener">
              {checkpoint.title}
            </Link>
          </TextTypography>
        ))}
      </ContainerCaminho>
    </Dialog>
  );
}

export default SimpleDialog;
