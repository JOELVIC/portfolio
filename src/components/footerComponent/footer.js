import { Divider } from "@mui/material"
import styles from "./style.module.css"


export default function Footer() {
      return (
            <>
                  <div className={styles.container}>
                        <div className={styles.linkSection}>
                              <div className={styles.linkContainer}>
                                    <div className={styles.head}>Text Me!</div>
                                    <div>Whatsapp</div>
                                    <div>+237888888888</div>
                              </div>
                              <div className={styles.linkContainer}>
                                    <div className={styles.head}>Store</div>
                                    <div className={styles.power}>Shop</div>
                                    <div className={styles.power}>Account</div>
                                    <div className={styles.power}>order</div>
                                    <div className={styles.power}>Download</div>
                              </div>
                              <div className={styles.linkContainer}>
                                    <div className={styles.head}>Fanzone</div>
                                    <div>Subscribe!</div>
                                    <div>
                                          <div>Name*</div>
                                          <input />
                                    </div>
                                    <div>
                                          <div>Email*</div>
                                          <input />
                                    </div>
                                    <button>Subscribe</button>
                              </div>
                        </div>

                        <div className={styles.copyRightSection}>
                              <hr />
                              <div>Copy right c 2023 --------</div>
                              <div className={styles.powerContainer}>powered by: <nav className={styles.power}>REACT DEVS</nav></div>

                        </div>
                  </div>
            </>
      )
}