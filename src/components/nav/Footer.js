import React from "react"
import "./nav.css"

export const Footer = () => {

    return  <>
    
                <footer id="footer">
                    
                    <div className="footer--item github">
                                                
                        <a href="https://github.com/morriscodez/one-left-foot-client">
                            <img src="https://pngimg.com/uploads/github/github_PNG15.png"
                                    width="120"
                                    height="40"
                                    alt="link to Github">                                 
                            </img>
                        </a>
                    </div>

                    
                    <div className="footer--item">
                        (C) 2021
                        <a href="https://github.com/morriscodez/one-left-foot-client">
                            <img    src="https://i.imgur.com/xEW56G2.png"
                                    width="50"
                                    height="50"
                                    alt="One Left Foot logo"
                            ></img>
                        </a>
                    </div>
                </footer>

            </>
}