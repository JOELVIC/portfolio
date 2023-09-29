import classes from './style.module.css'
import React from 'react'
const albums = [
      {
            image: 'https://live.staticflickr.com/5050/5212230302_c97fdc6d7f_z.jpg',
            paragrahText: 'JULY 25 New Policy is a 4 track project in which I perform predominantly in pidgin. It was a follow up project to Faith, Flaws, & Foes. The songs were also recorded as part of my one week challenge but carried a different theme from FFF. This tape is available for free downloads because I do not own the rights to the instrumentals. I got them off YouTube. All tracks are also produced by Lucas Quinn. Listen on',
            paragrahText1: 'YouTube or Audiomack',
            downloadText: 'Download'
      },
      {
            image: 'https://live.staticflickr.com/4113/5093527651_4fea53fa7c_z.jpg',
            paragrahText: 'JULY 25 New Policy is a 4 track project in which I perform predominantly in pidgin. It was a follow up project to Faith, Flaws, & Foes. The songs were also recorded as part of my one week challenge but carried a different theme from FFF. This tape is available for free downloads because I do not own the rights to the instrumentals. I got them off YouTube. All tracks are also produced by Lucas Quinn. Listen on',
            paragrahText1: 'YouTube or Audiomack',
            downloadText: 'Download'
      },
      {
            image: 'https://live.staticflickr.com/4106/5022359174_2e0247a17b_z.jpg',
            paragrahText: 'JULY 25 New Policy is a 4 track project in which I perform predominantly in pidgin. It was a follow up project to Faith, Flaws, & Foes. The songs were also recorded as part of my one week challenge but carried a different theme from FFF. This tape is available for free downloads because I do not own the rights to the instrumentals. I got them off YouTube. All tracks are also produced by Lucas Quinn. Listen on',
            paragrahText1: 'YouTube or Audiomack',
            downloadText: 'Listen'
      }
]


function Discography(){

      
      const Album = ({image,paragrahText,paragrahText1,downloadText})=>{
            return(
                  
                  <div className={classes.album}>
                  <div className={classes.imageSection}><img src={image} /></div>
                  <div className={classes.textSection}>
                        <div className={classes.textSectionParagraph}>{paragrahText}</div>
                        <div className={classes.textSectionLink}>{paragrahText1}</div>
                  </div>
                  <div className={classes.buttonSection}><div className={classes.button}>{downloadText}</div></div>
            </div>
            )
      }
      React.useEffect(() => {
    
            window.scrollTo(0, 0)
      
          return () => {
      
          }
        }, [])
      
      return(
            <div className={classes.container}>
                  <div className={classes.albums}>
                       {albums.map(
                        (album)=> <Album image={album.image} paragrahText={album.paragrahText} paragrahText1={album.paragrahText1} downloadText={album.downloadText} />
                       )}
                  </div>
            </div>
      )
}

export default Discography