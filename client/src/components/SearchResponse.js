import React, { useState,useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

export const SearchResponse = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const params = searchParams.get('search')
    const [items, setItems] = useState(null);

    const searchUrl = "http://localhost:4200/api/items?search=";

    const fetchItems = async (url) => {
        return await axios.get(url)
            .then(items => {
                setItems(items.data.items)
            })
            .catch(error => console.log(error))
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
            <div className="wrap">
                <div style={{backgroundColor:'#ededed', paddingBottom: '80px'}}>
                <div className='breadcrumb' style={{textAlign: 'left', width: '1200px',margin:' auto',paddingTop:'15px',paddingBottom:'15px', color:'rgb(102, 102, 102)',fontWeight:'lighter'}}>Consolas y Videojuegos <span>{'>'}</span>Videojuegos</div>
                <div className='items' data-testid="items" style={{width:'1200px',margin:'auto'}}>
                    {items.map((item,index)=>(
                        <div key={index} className="item_container" style={{display:'flex',flexDirection:'column',backgroundColor:'white'}}>
                            <div className="item" style={{display:'flex', justifyContent:'space-between',backgroundColor:'white',margin:'20px'}}>
                                <div className="left" style={{display:'flex',}}>
                                    <div className="item_img">
                                        <img src={item.picture} alt="" style={{width:'200px',height:'200px',cursor: 'pointer'}} data-testid="item_img" onClick={() => getDetails(item)}/>
                                    </div>
                                    <div className="item_info" style={{display:'flex',flexDirection:'column',textAlign:'left',marginLeft:'20px',marginTop:'15px'}}>
                                        <div className="price" style={{fontSize:'25px',cursor: 'pointer'}} onClick={() => getDetails(item)} data-testid="item_price" >$ {item.price.decimals}</div>
                                        <div className="title" style={{fontSize:'20px',marginTop:'5px',cursor: 'pointer'}} onClick={() => getDetails(item)} data-testid="item_title">{item.title}</div>
                                        <div className="condition" style={{fontSize:'20px',cursor: 'pointer'}} onClick={() => getDetails(item)} data-testid="item_condition">{item.condition}</div>
                                    </div>
                                </div>
                                <div className="right" style={{marginTop:'25px',marginRight:'60px',fontSize:'15px'}}>{item.free_shipping?"Envio Gratis":"Envio Pago"}</div>
                            </div>
                            <hr style={{width: '95%',color:'white',margin:'auto',border:'none',borderBottom: 'thin solid #eee'}} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
            :
            <div>LOADING</div>
        :
        <div>WRONG URL</div>
    )

}
