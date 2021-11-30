import { Button, Card, CardActions, CardContent, CardMedia, FormControlLabel, Switch, Typography } from "@mui/material";


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Agua"
        height="30"
        image="C:\Users\img\jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          H2O
        </Typography>
        <Typography variant="body2" color="text.secondary">
          La molécula más importante del mundo
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Lección</Button>
        <FormControlLabel control={<Switch defaultChecked />} label="" />
      </CardActions>
    </Card>
    
    
  );
}
