import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Search } from '../components/Search';

export const ItemDetail = () => {
  
const params =useParams()
const [data, setItem] =useState(null)
const [respStatus, setRespStatus] =useState(null)

const itemUrl = "http://localhost:4200/items/";
  
  const fetchDetails = (url) => {
    return axios.get(url)
        .then(resp =>{ 
            if(resp.status===200){
                setItem(resp.data);
                setRespStatus(resp.data.status)
            };
        })
        .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchDetails(itemUrl+params.id)
  }, []);

  return (
    
    data?
    <div className="wrap" data-testid='container'>
        {respStatus===undefined?(
        <div style={{
        backgroundColor:'#ededed',
        paddingBottom: '80px'
        }}>
        <div className='breadcrumb' style={{textAlign: 'left', width: '1200px',margin:' auto'}}>123/123/123</div>

        <div className='items' style={{width:'1200px',margin:'auto',fontFamily:'Proxima Nova, -apple-system, Roboto, Arial, sans-serif'}}>
            <div className="item_container" style={{display:'flex',flexDirection:'column',backgroundColor:'white'}}>
            <div className="data" style={{display:'flex', justifyContent:'space-between',backgroundColor:'white',margin:'35px 35px 50px 35px'}}>
                <div className="left" style={{display:'flex',flexDirection:'column',textAlign:'left'}}>
                    <div className="item_img">
                        <img src={data.item.picture} alt="" style={{width:'600px'}}/>
                    </div>
                    <div className="item_info" style={{display:'flex',flexDirection:'column',marginTop:'70px',fontSize:'20px'}}>
                        <div className="item_description_title" style={{fontSize:'25px', fontWeight:600,fontSize:'24px'}}>Descripción del producto</div>
                        <div className="item_description" style={{fontSize:'20px',marginTop:'35px',color:'rgb(102, 102, 102)'}}>{data.item.description.plain_text}</div>
                    </div>
                </div>
                <div className="container">
                <div className="right" style={{
                    display:'flex',
                    flexDirection:'column',
                    textAlign:'left',
                    fontSize:'36px',
                    width:'320px'
                    }}>
                    <div className="item_condition" style={{display:'flex',flexDirection:'row',
                fontFamily:'Proxima Nova, -apple-system, Roboto, Arial, sans-serif',
                fontSize:'18px',
                fontWeight:400,
                color:'rgba(0,0,0,.55)'
                }}>
                    <div className="condition">{data.item.condition}</div>
                    <span style={{
                        marginLeft:'5px',
                        marginRight:'5px'
                    }} >|</span>
                    <div className="sales">{data.item.sold_quantity} vendidos</div>
                    </div>
                    <div data-testid="item_title"  
                    style={{
                    fontFamily:'Proxima Nova, -apple-system, Roboto, Arial, sans-serif',
                    fontSize:'27px',
                    fontWeight:'600',
                    marginTop:'10px',
                    textTransform:'uppercase'
                    }} >{data.item.title}</div>
                    <div className="item_price" style={{
                    color:'rgba(0, 0, 0, 0.9)',
                    fontSize:'45px',
                    fontWeight:'350',
                    lineHeight: '36px',
                    marginTop: '25px'
                    }}>$ {data.item.price.decimals}</div>
                    <div className="btn">
                    <button style={{
                        backgroundColor: 'rgb(52, 131, 250)',
                        borderRadius: '6px',
                        display: 'inlinelock',
                        width: '100%',
                        border: 'none',
                        color: 'white',
                        fontize: '16px',
                        fonteHight: '600',
                        height: '48px',
                        lineHeight: '0px',
                        marginTop: '60px',
                        paddingoBttom: '0px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    }}>Comprar</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        </div>)
        :
        (<div>error 404</div>)
        }
    </div>
    :
    <div>LOADING</div>

  )

}
