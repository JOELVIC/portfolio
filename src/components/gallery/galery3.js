import PhotoAlbum from "react-photo-album";
import photo from "../../assets/img/photo.jpg"
import classes from "./styles.module.css"

const photos = [
      {
            src: photo,
            width: 800,
            height: 600,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      }, {
            src: photo,
            width: 800,
            height: 600,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
      {
            src: photo,
            width: 1600,
            height: 900,
      },
];

function Gallery() {
      return (
            <div className={classes.container}>
                  <PhotoAlbum layout="rows" photos={photos} spacing={0}  padding={2} />
            </div>
      )
}
export default Gallery