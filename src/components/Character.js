import React, { useState, useEffect } from "react";
import axios from "axios";


function Character() {
    const [char, setChar] = useState([]);

    // API http https://swapi.dev/api/people/
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/")
            .then(res => {
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            
        </div>
    );
}

export default Character;