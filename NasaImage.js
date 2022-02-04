import React from 'react';
import  {useState, useEffect } from 'react';
import NavBar from "./NavBar";

const apiKey = (process.env.REACT_APP_RAPID_NASA_KEY);

export default function NasaImage(){
const [photoData, setPhotoData] = useState(null);


useEffect(function () {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=4wcP9NVEnyom0ACb1dmCR29kwn5AX1BadK0Kdybi'
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);

        }

    },[]);

if (!photoData) return <div />;


return( 
    <><NavBar /><div>
        {photoData.media_type = "image" ? (
            <img src={photoData.url} alt={photoData.title} />

        ) : (
            <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allowFullScreen
                className="photo" />


        )}
        <div>
            <><h1>{photoData.title}</h1><p>{photoData.date}</p><p>{photoData.explanation}</p></>
        </div>
        


    </div></>
)
}
