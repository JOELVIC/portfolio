import PhotoAlbum from "react-photo-album";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photo from "../../assets/img/photo.jpg"
import classes from "./styles.module.css"

const photos = [
      {
            src: "https://i.pinimg.com/474x/db/37/3c/db373c92efacb24b2d71de46656fa02f.jpg",
            width: 800,
            height: 600,
      },
      {
            src: "https://i.pinimg.com/474x/f3/f3/bc/f3f3bc0c6bc6f2d8494177dfedc0eb6b.jpg",
            width: 1600,
            height: 900,
      }, {
            src: "https://i.pinimg.com/474x/8d/e6/4b/8de64b5a52b32331a49aa73f14209b36.jpg",
            width: 800,
            height: 600,
      },
      {
            src: "https://i.pinimg.com/474x/79/3b/b0/793bb0d8845f9a44f922b1903fb94c58.jpg",
            width: 800,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg",
            width: 600,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/2c/76/6a/2c766a988657c5ae8438b44277cf4717.jpg",
            width: 1600,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/46/cc/a3/46cca33043868f1c6a70d203b745c7ec.jpg",
            width: 800,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/46/cc/a3/46cca33043868f1c6a70d203b745c7ec.jpg",
            width: 1600,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/ee/a9/db/eea9dbc941723c30616d1be594dcfc23.jpg",
            width: 1600,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/27/1a/13/271a13f53b5c819944040d97803fbe9f.jpg",
            width: 1600,
            height: 900,
      },
      {
            src: "https://i.pinimg.com/474x/4e/48/63/4e4863b199e1d6f13cc1f07671db78d7.jpg",
            width: 400,
            height: 400,
      },
      {
            src: "https://i.pinimg.com/474x/29/1a/cb/291acb91857a78627fe2b41ddd3039f1.jpg",
            width: 1000,
            height: 900,
      },
];
export default function App() {
      // const [open, setOpen] = React.useState(false);

      const [index, setIndex] = React.useState(-1);


      return (
            <>

                 <div className={classes.container}>
                  <div className={classes.headText}>
                        <div>Gallery</div>
                  </div>
                        <div className={classes.albumContainer}>
                              <PhotoAlbum
                                    layout="masonry"
                                    photos={photos}
                                    padding={0}
                                    onClick={({ index: current }) => setIndex(current)}
                              />

                              <Lightbox
                                    index={index}
                                    slides={photos}
                                    open={index >= 0}
                                    close={() => setIndex(-1)}
                              />
                        </div>
                  </div>
            </>
      );
}