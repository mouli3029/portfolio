import React from 'react'
import "./Header.css"
import MyText from "./MyText"

function header() {
    return (
        <div id="home">
            <div className="home">
                <div className ="main_text">
                    Hi, I'm 
                    <br/>
                    <span className="name_text">
                        Venkata Mouli.K
                    </span>
                    <br/>
                    <div className="sub_text">
                        <MyText/>
                    </div>


                </div>
                   
            </div>
            
        </div>
    )
}

export default header
