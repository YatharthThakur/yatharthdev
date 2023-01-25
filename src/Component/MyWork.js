import React from 'react'
import Project from "../Component/Project";
import "../Component/MyWork.css";
import {useState, useEffect} from "react";
import axios from 'axios';
export default function MyWork() {
    const [items, setItem] = useState([]);
    useEffect(() => {
        async function fetchData() 
        {
          try{
            const response = await axios.get("https://resume-3bb0b-default-rtdb.firebaseio.com/items.json");
            setItem(response.data);
          }
          catch(error){
            console.log("link not found");
          }
        }
        fetchData();
      }, []);

    return (
    <>
      <div className='work-container' id='work'>
          <div className='work-heading'>
              <p className='my-work'>MY WORK</p>
              <hr></hr>
              <p>Check out some of my projects (Click to view the project)</p>
          </div>
          <div className='display-data'>
              {items.map((item) => {
            return <Project data = {item} />;
              })}
          </div>
      </div>
    </>
    )
}
