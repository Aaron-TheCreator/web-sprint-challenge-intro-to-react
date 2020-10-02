import React, { useState, useEffect } from "react";
import ChCard from './ChCard';
import axios from "axios";


function Character() {
    const [chars, setChar] = useState([]);
    // const { setChar } = props;

    // API http https://swapi.dev/api/people/
    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/")
            .then(res => {
                // console.log(res.data.results)
                // console.log(char.data.results);
                const charArray = res.data.results;
                // charArray.map( (e) => {
                //     console.log(e.name);
                // })
                // console.log(charArray);
                setChar(charArray);
                // charArray.map( (item) => {
                //     return (
                //         <ChCard />
                //     )
                // })
                
            })
            // .then((res) => setChar(res))
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <div className="container">
               {chars.map(item => {
                   return <ChCard props={item} />
               },0)}
            
        </div>
    );
}

export default Character;