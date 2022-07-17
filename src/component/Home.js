import React from 'react'
import slider1 from './images/img1.png'
import slider2 from './images/img2.png'
import slider3 from './images/img3.png'
import Items from './Items';
export default function home() {
    return (

        <div>
            <div id="carouselExampleControls"  className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev fs-1 text-dark mr-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <i className="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button className="carousel-control-next fs-1 text-dark mr-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
            <Items/>
        </div>
        

        
    )
}
