import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

import styles from "../../styles/Home.module.css";

export interface MultiActionAreaCardProps {
  title: string;
  img: string;
  short_description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MultiActionAreaCard(props: MultiActionAreaCardProps) {
  const { title, img, short_description, onClick } = props;

  return (
    <Grid container item xs={12} sm={6} md={4} lg={3} justifyContent="center">
      <Card sx={{ width: 300, height: 300 }}>
        <CardActionArea onClick={onClick} className={styles.actionarea}>
          <CardMedia component="img" height="140" image={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {short_description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
