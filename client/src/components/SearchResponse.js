import React, { useState,useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

export const SearchResponse = () => {

    // const returnData = (items) =>{
    //     returnItems(items)
    // }

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log("searchParams : ",searchParams);
    const params = searchParams.get('search')
    console.log("params : ",params);


    const searchUrl = "http://localhost:4200/items?search=";
    
    // const [text, setText] = useState('');
    // const [submitted, setSubmitted] = useState('');
    const [items, setItems] = useState(null);


    
    const fetchItems = (url) => {
        return axios.get(url)
            .then(items => setItems(items.data.items))
            .catch(error => console.log(error))
    }

    const [loadResult, setloadResult] = useState(false)
    const [loadDetail, setloadDetail] = useState(false)
    const [cleanSearch, setCleanSearch] = useState(false)

    useEffect(() => {
        fetchItems(searchUrl+params)
      }, [params]);

      const getDetails = (item) => {
        console.log("getDetails : ",item);
        navigate("/items/"+item.id)
    }
    // function handleChange(e) {
    //     console.log(e.target.value);
    //     if(cleanSearch){
    //         setCleanSearch(false)
    //     }
    //     setText(e.target.value);
    // }

    // function handleSubmit(e) {
       
    //     e.preventDefault();
    //     setSubmitted(text);
    //     fetchSearch(searchUrl+text)
    //     // setText("")
    // }
    
    return (
        params?
            items?
            // <div style={{
            //     backgroundColor: "#fff159", 
            //     // display:'flex', 
            //     flexDirection: 'row',
                
            //     paddingTop: '10px',
            //     paddingBottom: '10px'
            //     }}>
        
            //         <div className="" 
            //             style={{
            //                 // backgroundColor: "#fff159", 
            //                 display:'flex', 
            //                 flexDirection: 'row',
            //                 // paddingTop: '10px',
            //                 // paddingBottom: '10px',
            //                 width:'1200px',
            //                 margin:'auto'
            //                 }}
            //         >
            //             <img src={logo} style={{height: 40}}/>
                        
            //                 <form onSubmit={handleSubmit}
            //                     style={{
            //                         width:'100%',
            //                         alignContent: 'center',
            //                         display: 'flex'
            //                     }}
            //                 >
            //                     <div className='search_box'
            //                         style={{
            //                             display: 'flex',
            //                             width: '100%',
            //                             justifyContent: 'end'
            //                         }}
            //                     >
            //                         <input type="text" value={cleanSearch?'':text} placeholder="Buscar productos, marcas y más…"  onChange={handleChange} style={{
            //                             all: 'unset',
            //                             width: '90%',
            //                             font: '16px system-ui',
            //                             color: 'black',
            //                             height: '100%',
            //                             textAlign: 'left',
            //                             paddingLeft: '6px',
            //                             // padding: '6px 10px',
            //                             backgroundColor:'white'
            //                             }} />
            //                         <button type="submit" className="searchButton" style={{
            //                                     cursor: 'pointer',
            //                                     width: '44px',
            //                                     height: '44px',
            //                                     backgroundColor: '#ededed',
            //                                     border:'none',
            //                                     // borderLeft:'1px solid black'
            //                         }}>
            //                             <i className="fa fa-search" style={{fontSize:'22px',color:'#888'}}></i>
            //                         </button>
            //                     </div>
            //                 </form>
            //         </div>
            //     {/* submitted: {submitted} */}
            // </div>
            <div className="wrap">

            {/* <Search></Search> */}

            <div style={{backgroundColor:'#ededed', paddingBottom: '80px'}}>
        
            <div className='breadcrumb' style={{textAlign: 'left', width: '1200px',margin:' auto'}}>123/123/123</div>
    
            <div className='items' style={{width:'1200px',margin:'auto'}}>
                {items.map((item,index)=>(
                    <div key={index} className="item_container" style={{display:'flex',flexDirection:'column',backgroundColor:'white'}}>
                        <div className="item" style={{display:'flex', justifyContent:'space-between',backgroundColor:'white',margin:'20px'}}>
                            <div className="left" style={{display:'flex',}}>
                                <div className="item_img">
                                    <img src={item.picture} alt="" style={{width:'200px',height:'200px',cursor: 'pointer'}} onClick={() => getDetails(item)}/>
                                </div>
                                <div className="item_info" style={{display:'flex',flexDirection:'column',textAlign:'left',marginLeft:'20px',marginTop:'15px'}}>
                                    <div className="price" style={{fontSize:'25px',cursor: 'pointer'}} onClick={() => getDetails(item)}>$ {item.price.decimals}</div>
                                    <div className="title" style={{fontSize:'20px',marginTop:'5px',cursor: 'pointer'}} onClick={() => getDetails(item)}>{item.title}</div>
                                    <div className="condition" style={{fontSize:'20px',cursor: 'pointer'}} onClick={() => getDetails(item)}>{item.condition}</div>
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
