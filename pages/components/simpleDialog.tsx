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

import YoutubeVideo from "./youtube";

import styles from "../../styles/Dialog.module.css";

interface Caminho {
  title: string;
  link: string;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: any;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
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

      <Container maxWidth="md" className={styles.container}>
        <YoutubeVideo
          title={selectedValue.title}
          videoId={selectedValue.youtubeId}
        />
        <Typography variant="h6" className={styles.title}>
          Caminho
        </Typography> 
        {selectedValue.caminho.map((caminho: Caminho, index: number) => (
          <Typography key={index + 1} className={styles.typography}>
            {index + 1}.{" "}
            <Link href={caminho.link} target="_blank" rel="noopener">
              {caminho.title}
            </Link>
          </Typography>
        ))}
        <Typography variant="h6" className={styles.title}>
          Descrição
        </Typography> 
        {selectedValue.description.map((paragraph: string) => (
          <Typography key={0} className={styles.typography}>
            {paragraph}
          </Typography>
        ))}
        {
          selectedValue.extras.length > 0 &&
            <Typography variant="h6" className={styles.title}>
              Extras
            </Typography>
        }
        <Typography className={styles.typography}>
          {selectedValue.extras_description}
        </Typography>

        {selectedValue.extras.map((caminho: Caminho, index: number) => (
          <Typography key={index + 1} className={styles.typography}>
            {index + 1}.{" "}
            <Link href={caminho.link} target="_blank" rel="noopener">
              {caminho.title}
            </Link>
          </Typography>
        ))}
      </Container>
    </Dialog>
  );
}

export default SimpleDialog;
