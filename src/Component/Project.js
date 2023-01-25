import React from 'react'
import "../Component/ProjectStyles.css";

export default function Project({data}) {    
    return (
    <div>
        <a href={data.link} target = "_blank" rel="noreferrer">
            <div className='project-box'>
                <div className='main'>
                    <img className={"img-fluid"} src={`./assets_cart/${data.thumbnail}`} alt={data.title}/>
                    <div className='image_overlay'>
                        <p className='image_description'>
                            <h3 className='hover-title'>{data.title}</h3>
                            <h4 className='hover-description'>{data.description}</h4>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    )
}
