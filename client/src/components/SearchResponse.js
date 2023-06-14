import React, { useState,useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Error404 from './Error404';
import EmptySearch from './EmptySearch';

export const SearchResponse = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const params = searchParams.get('search')
    const [items, setItems] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const searchUrl = "http://localhost:4200/api/items?search=";

    const fetchItems = async (url) => {
        return await axios.get(url,{timeout: 3000})
            .then(resp => {
                setItems(resp.data.items);
                console.log((resp.data.items).length);
                setLoading(true)
            })
            .catch(error => {console.log(error.message);setError(error.message);setLoading(false)})
    }

    useEffect(() => {
        fetchItems(searchUrl+params)
    }, [params]);

    const getDetails = (item) => {
        navigate("/items/"+item.id)
    }
    
    
    return (
        params?
            items?
                items!=0?
                    <div className="wrapper_items">
                        <div className="container_items">
                        <div className='breadcrumb' >Consolas y Videojuegos <span>{'>'}</span>Videojuegos</div>
                        <div className='items' data-testid="items">
                            {items.map((item,index)=>(
                                <div key={index} className="item_container">
                                    <div className="item" >
                                        <div className="left">
                                            <div className="item_img">
                                                <img src={item.picture} alt="" data-testid="item_img" onClick={() => getDetails(item)}/>
                                            </div>
                                            <div className="item_info">
                                                <div className="price"  onClick={() => getDetails(item)} data-testid="item_price" >$ {item.price.decimals}</div>
                                                <div className="title" onClick={() => getDetails(item)} data-testid="item_title">{item.title}</div>
                                                <div className="condition" onClick={() => getDetails(item)} data-testid="item_condition">{item.condition}</div>
                                            </div>
                                        </div>
                                        <div className="right" >{item.free_shipping?"Envio Gratis":"Envio Pago"}</div>
                                    </div>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    :
                    <EmptySearch/>
            :
            <div>
                {error && <div>{"error en el servidor : "+error}</div>}
                {loading? <div>LOADING...</div>:""}
            </div>
        :
        <Error404/>
    )

}
