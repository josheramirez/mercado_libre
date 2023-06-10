import React, { useState,useEffect } from 'react'
import logo from '../assets/logo.png';
import axios from 'axios'
export const SearchComponent = ({returnItems,cleanSearch,setCleanSearch}) => {

    const returnData = (items) =>{
        returnItems(items)
    }
    
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState('');
    // const [items, setItems] = useState([]);

    const searchUrl = "http://localhost:4200/items?search=";
    
    const fetchSearch = (url) => {
        return axios.get(url)
            .then(items => returnData(items.data.items))
            .catch(error => console.log(error))
    }

    function handleChange(e) {
        console.log(e.target.value);
        if(cleanSearch){
            setCleanSearch(false)
        }
        setText(e.target.value);
    }

    function handleSubmit(e) {
       
        e.preventDefault();
        setSubmitted(text);
        fetchSearch(searchUrl+text)
        // setText("")
    }
    
    return (
        <div                     style={{
            backgroundColor: "#fff159", 
            // display:'flex', 
            flexDirection: 'row',
            
            paddingTop: '10px',
            paddingBottom: '10px'
            }}>
       
                <div className="" 
                    style={{
                        // backgroundColor: "#fff159", 
                        display:'flex', 
                        flexDirection: 'row',
                        // paddingTop: '10px',
                        // paddingBottom: '10px',
                        width:'1200px',
                        margin:'auto'
                        }}
                >
                    <img src={logo} style={{height: 40}}/>
                    
                        <form onSubmit={handleSubmit}
                            style={{
                                width:'100%',
                                alignContent: 'center',
                                display: 'flex'
                            }}
                        >
                            <div className='search_box'
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'end'
                                }}
                            >
                                <input type="text" value={cleanSearch?'':text} placeholder="Buscar productos, marcas y más…"  onChange={handleChange} style={{
                                    all: 'unset',
                                    width: '90%',
                                    font: '16px system-ui',
                                    color: 'black',
                                    height: '100%',
                                    textAlign: 'left',
                                    paddingLeft: '6px',
                                    // padding: '6px 10px',
                                    backgroundColor:'white'
                                    }} />
                                <button type="submit" className="searchButton" style={{
                                            cursor: 'pointer',
                                            width: '44px',
                                            height: '44px',
                                            backgroundColor: '#ededed',
                                            border:'none',
                                            // borderLeft:'1px solid black'
                                }}>
                                    <i className="fa fa-search" style={{fontSize:'22px',color:'#888'}}></i>
                                </button>
                            </div>
                        </form>
                </div>
            submitted: {submitted}
        </div>
    )


}
