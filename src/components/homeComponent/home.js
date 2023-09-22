import styles from "./style.module.css"
import * as React from 'react';
import img from '../../assets/img/photo.jpg'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Home() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.socialMediaIcons}>
              <Facebook />
              <Instagram />
              <Twitter />
        </div>
        

      </div>
    </>
  )
}