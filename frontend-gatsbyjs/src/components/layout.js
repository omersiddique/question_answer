import React from "react"
import AppBar from "./appbar"


export default ({ children }) => (
    <>      
        <AppBar />
        <div>
            { children }
        </div>
    </>
)