import React, { useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const TAG = "GALLERY IMAGES";
type GalleryImagesProps = {
  onSelect?: (res: string) => void;
};
export type GalleryImagesType = {
  img: string;
  title: string;
  author: string;
  rows?: number;
  cols?: number;
  featured?: number;
};
const GalleryImages: React.FC<GalleryImagesProps> = ({ onSelect }) => {
  console.log(TAG, "render");
  const [selected, setSelected] = useState("");
  const [images, setImages] = useState<GalleryImagesType[]>([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=10")
      .then(async (res) => {
        const arrRes: any[] = await res.json();
        const arr: GalleryImagesType[] = [];
        for (const key in arrRes) {
          const element = arrRes[key];
          arr.push({
            img: element.download_url,
            title: element.author,
            author: element.author,
          });
        }
        // author: "Greg Rakozy";
        // download_url: "https://picsum.photos/id/1004/5616/3744";
        // height: 3744;
        // id: "1004";
        // url: "https://unsplash.com/photos/SSxIGsySh8o";
        // width: 5616;
        console.log(arr);
        setImages(arr);
      })
      .catch(() => setImages([]));
  }, []);
  return (
    <div className="GalleryImages">
      <ImageList sx={{ width: "100%" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Imagenes de muestra</ListSubheader>
        </ImageListItem>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  onClick={() => setSelected(item.img)}
                  sx={{
                    color: (t) =>
                      selected !== item.img
                        ? "rgba(255, 255, 255, 0.54)"
                        : t.palette.primary.main,
                  }}
                  aria-label={`info about ${item.title}`}
                >
                  <CheckCircle />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
export default GalleryImages;
