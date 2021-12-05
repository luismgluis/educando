import { StarTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Paper,
  styled,
  Typography,
} from "@mui/material";

import MultipleSelectCheckmarks from "../Checkmarks/Checkmarks";
import Checkmarks from "../Checkmarks/Checkmarks";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ClassesInfo() {
  const itemData = {
    img: "https://images.freeimages.com/images/large-previews/28c/dancing-art-1423697.jpg",
    title: "Danza",
    group: "4B",
    teacher: "Juana Aristizabal Mendoza",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{}} elevation={0}>
            <CardMedia
              component="img"
              height="140"
              image="https://firebasestorage.googleapis.com/v0/b/nuestra-tribu.appspot.com/o/banners%2Fdanza1.png?alt=media&token=e96c048d-d0c4-4afe-b528-4c628f22f4ff"
              alt="danza"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clase de {itemData.title} Grupo {itemData.group}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Profesora: {itemData.teacher}
                <Checkmarks />
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small" color="primary">
                Share
              </Button> */}
            </CardActions>
          </Card>
          {/* <Item>
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={itemData.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${itemData.title}`}
                >
                  <StarTwoTone />
                </IconButton>
              }
              actionPosition="left"
            />
            <Checkmarks />
          </Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}

//     <ImageList sx={{ width: 500, height: 450}}>

//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.group}
//             subtitle={<span>by: {item.teacher}</span>}
//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.freeimages.com/images/large-previews/28c/dancing-art-1423697.jpg',
//     title: 'Inglés',
//     group: "4B",
//     teacher: 'Will Smith'
//   },

// ]
