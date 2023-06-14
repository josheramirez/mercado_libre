import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Search } from '../components/Search';
import Error404 from './Error404';

export const ItemDetail = () => {
  
const params =useParams()
const [data, setItem] =useState(null)
const [respStatus, setRespStatus] =useState(null)

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const itemUrl = "http://localhost:4200/api/items/";
  
  const fetchDetails = async (url) => {
    return await axios.get(url,{timeout: 3000})
        .then(resp =>{ 
            if(resp.status===200){
                setItem(resp.data);
                setRespStatus(resp.data.status)
            };
        })
        .catch(error => {console.log(error.message);setError(error.message);setLoading(false)})
  }

  useEffect(() => {
    fetchDetails(itemUrl+params.id)
  }, []);

  return (
    
    data?
    <div className="wrapper_detail" data-testid='container'>
        {respStatus===undefined?(
        <div className='container_item' >
            <div className='breadcrumb'>
                Consolas y Videojuegos <span>{'>'}</span>Videojuegos
            </div>
            <div className='items'>
                <div className="item_container">
                    <div className="data">
                        <div className="left">
                            <div className="item_img">
                                <img src={data.item.picture} alt=""/>
                            </div>
                            <div className="item_info">
                                <div className="item_description_title">Descripción del producto</div>
                                <div className="item_description">{data.item.description}</div>
                            </div>
                        </div>
                        <div className="right">
                        <div className="container">
                            <div className="item_condition">
                                <div className="condition">{data.item.condition}</div>
                                <span>|</span>
                                <div className="sales">{data.item.sold_quantity} vendidos</div>
                            </div>
                            <div className="item_title" data-testid="item_title">{data.item.title}</div>
                            <div className="item_price">$ {data.item.price.decimals}</div>
                            <div className="btn">
                                <button>Comprar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        :
        <Error404/>
        }
    </div>
    :
    <div>
    {error && <div>{"error en el servidor : "+error}</div>}
    {loading? <div>LOADING...</div>:""}
    </div>

  )

}
