import React from 'react'

export const ResultComponent = ({items, returnItem}) => {
    console.log("ResultComponent recive : ",items);

    const getDetails = (item) => {
        returnItem(item)
    }
    return (
    <div style={{backgroundColor:'#ededed'}}>
        
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
        hola
    </div>
    )
}
