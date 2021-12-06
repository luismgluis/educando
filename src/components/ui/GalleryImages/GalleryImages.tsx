import React, { useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton,
  ButtonBase,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const TAG = "GALLERY IMAGES";
type GalleryImagesProps = {
  onSelect?: (res: string) => void;
  onRandomImages?: (res: GalleryImagesType[]) => void;
};
export type GalleryImagesType = {
  img: string;
  title: string;
  author: string;
  rows?: number;
  cols?: number;
  featured?: number;
};
const GalleryImages: React.FC<GalleryImagesProps> = ({
  onSelect,
  onRandomImages,
}) => {
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
            author: "link: " + element.url,
          });
        }
        console.log(arr);
        setImages(arr);
        if (onRandomImages) onRandomImages(arr);
      })
      .catch(() => setImages([]));
  }, [onRandomImages]);

  useEffect(() => {
    if (onSelect) onSelect(selected);
  }, [selected, onSelect]);
  return (
    <div className="GalleryImages">
      <ImageList sx={{ width: "100%" }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Imagenes de muestra</ListSubheader>
        </ImageListItem>
        {images.map((item) => (
          <ButtonBase onClick={() => setSelected(item.img)}>
            <ImageListItem
              key={item.img}
              sx={{ maxHeight: 250, overflow: "hidden" }}
            >
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
          </ButtonBase>
        ))}
      </ImageList>
    </div>
  );
};
export default GalleryImages;
