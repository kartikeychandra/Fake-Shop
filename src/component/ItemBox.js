import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Footer from './Footer'
const Items = () => {
    const { id } = useParams()
    const [itemCont, setItemCont] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getItems = async () => {
            setLoading(true);
            const parsedData = await fetch(`https://fakestoreapi.com/products/${id}`)
                setItemCont(await parsedData.json());
                setLoading(false);

        }
        getItems()
    }, [])
    const rating = itemCont.rating
    const Product = () =>{
        return (
        <>
        
        <div className="col-md-6" id='img'>
            <img src={itemCont.image} alt= {itemCont.title} height="550px" width="410px"  id='itemImage'/>
        </div>
        <div className='col-md-6' id='cont'>
            <h1 id='item-category'>{itemCont.category && itemCont.category.toUpperCase()}</h1>
            <h2 className="h2 fw-bold" id='title'>{itemCont.title}</h2>
            <i className="fa-solid fa-check d-flex flez-direction-row mt-3 mb-2" id='check'><p className="fw-bold fs-20px" id='instock'>In Stock</p></i>
            {itemCont.rating && itemCont.rating.rate}<i className="fa-solid fa-star fs-5 mx-2"></i> {itemCont.rating && itemCont.rating.count} Ratings
            <h2 className="h2 fw-bold mt-3" id='price'>${itemCont.price}</h2>
            <p className="mt-3">{itemCont.description}</p>
            <div id='purchase-btn'>
                <button type="button" className="btn btn-outline-danger mx-3" id='cart-btn'>Add To Cart</button>
                <button type="button" className="btn btn-danger mx-3" id='buy-btn'>Buy Now</button>
            </div>

        </div>

        </>
        )
    }

    return (
        <div className="container">

            <div className="row justify-content-center">
                {loading ? <Footer/> &&<Loading /> :  <Footer/> && <Product/> }
            </div>
        </div>
    )
}

export default Items
