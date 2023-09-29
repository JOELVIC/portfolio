
import "./press.css";
import press from "../../assets/images/tino.jpeg"
export const Card = () => {

    return(
        <div style={{backgroundColor:"black"}}>
            <div style={{backgroundColor:"black",color:"lightgray"}} className="container">
                <div style={{display:"flex", padding:"50px"}} className={"main gap-3"}>
                    <img src={press} width={"20%"}/>
                    <div>
                        <h2>UPDATE: PRESS RELEASE</h2>
                        <p>20/08/2022 18/07/2023.by Tino Foy. No comments yet</p>

                    </div>

                </div>
                <br/>
                <div style={{width:"80%",marginLeft:"28px",color:"white"}} className={"line"}>
                    <hr/>
                    <br/>
                </div>

            </div>

        </div>


    )

}