import { Margin } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Paper, styled } from "@mui/material";
import useMobile from "../../../hooks/useMobile";
import Checkmarks from "../Checkmarks/Checkmarks";


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export default function ClassesInfo() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <ImageListItemBar
                  title={<span>{itemData.title} 4A </span>}
                  subtitle={<span>Profesor/a: {itemData.teacher}</span>}
                  position="below"
                  />
              {/* <Button
            color="info"
            variant="contained"
          >Cambiar profesor/a
          </Button> */}
          <Checkmarks/>

            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }

  const itemData = 
{
img: 'https://images.freeimages.com/images/large-previews/28c/dancing-art-1423697.jpg',
title: 'Danza',
group: "4B",
teacher: 'Juana Aristizabal Mendoza'
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
