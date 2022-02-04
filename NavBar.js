import React from "react";
import { Link } from "react-router-dom";

export  default function NavBar(){
    return(
        <div>
            <ul>
                <Link to="/"> Let's Scrub This Misson </Link>
            </ul>
        </div>
    )
}