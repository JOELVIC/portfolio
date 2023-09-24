
import  "./Contactstyle.css";
import React from "react";
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import {LocalPostOffice} from "@mui/icons-material";

export const Contact =()=>{

    React.useEffect(() => {
    
        window.scrollTo(0, 0)
  
      return () => {
  
      }
    }, [])

    return(
        <>
        <section className="ftco-section" style={{backgroundColor:"black",color:"whitesmoke"}}>
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <br/>
                        <h2 className="heading-section">Lets Talk</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12">
                        <div className="wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 mb-5">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="dbox w-100 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <ExploreRoundedIcon/>
                                                </div>
                                                <div className="text">
                                                    <p><span>Address:</span> Beethovenstraße 25. 73463 Westhausen
                                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="dbox w-100 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                   <LocalPhoneRoundedIcon/>
                                                </div>
                                                <div className="text">
                                                    <p><span>Phone:</span> <a href="tel://1234567920">+00491627418842</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="dbox w-100 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <LocalPostOffice/>
                                                </div>
                                                <div className="text">
                                                    <p><span>Email:</span> <a
                                                        href="nbarmel@gmail.com">nbarmel@gmail.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="contact-wrap">
                                        <h3 className="mb-4 text-center">Get in touch with us</h3>
                                        <div id="form-message-warning" className="mb-4 w-100 text-center"></div>
                                        <div id="form-message-success" className="mb-4 w-100 text-center">
                                            Your message was sent, thank you!
                                        </div>
                                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                            <div className="row" style={{gap:"20px"}}>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name"
                                                               id="name" placeholder="Name" style={{backgroundColor:"transparent",color:"white"}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email"
                                                               id="email" placeholder="Email" style={{backgroundColor:"transparent",color:"white"}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject"
                                                               id="subject" placeholder="Subject" style={{backgroundColor:"transparent",color:"white"}}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" id="message"
                                                                  cols="30" rows="8" placeholder="Message" style={{backgroundColor:"transparent",color:"white"}}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="Send Message" className="btn btn-dark"
                                                               style={{color:"darkgray"}}/>
                                                            <div className="submitting">
                                                                <br/>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}