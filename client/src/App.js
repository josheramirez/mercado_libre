import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import React, {useEffect, useState} from 'react';
import { Search } from './components/Search';
import { ResultComponent } from './components/ResultComponent';
import { ItemComponent } from './components/ItemComponent';
import { ItemDetail } from './components/ItemDetail';
import { ItemSearch } from './components/ItemSearch';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {


  // const [loadResult, setloadResult] = useState(false)
  // const [loadDetail, setloadDetail] = useState(false)
  const [cleanSearch, setCleanSearch] = useState(false)

  // const [items, setItems] =useState([])
  // const [item, setItem] =useState(null)
  // const [tempItem, setTemItem] =useState(null)

  // const [searchQuery, setSearchQuery] = useState(null)
  // const returnItems = (items) =>{
  //   console.log("App.js recive :  ",items,items.length);
  //   if(!items.length){
  //     console.log("no se encontraron datos");
  //   }
  //   else{
  //     console.log("cargando vista resultados");
  //     setloadResult(true);
  //     setItems(items);
  //   }
  // }

  const itemUrl = "http://localhost:4200/items/";
  
  // const fetchItem = (url) => {
  //   console.log("llamando a servicio back item : ",url);
  //   return axios.get(url)
  //       .then(item => setTemItem(item.data))
  //       .then(()=>{
  //         setloadResult(false);
  //         setloadDetail(true);
  //         setCleanSearch(true);
  //       })
  //       // .then(console.log("full item : "+JSON.stringify(fullItem)))
  //       .catch(error => console.log(error))
  // }

  // const returnItem = (item) =>{
  //   console.log("App.js recive :  ",item);
  //   // setloadResult(false);
  //   // setloadDetail(true);
  //   // setCleanSearch(true);
  //   setItem(item);

  //   fetchItem(itemUrl+item.id)
  //   // if(!items.length){
  //   //   console.log("no se encontraron datos");
  //   // }
  //   // else{
  //   //   console.log("cargando vista resultados");
  //   //   setloadResult(true);
  //   //   setItems(items);
  //   // }
  // }

  
  // const search = useLocation();
  // useEffect(()=>{
  //   console.log(search);
  //   console.log(onDecodeParams(search))
  // },[search])

  // const onDecodeParams = (search) => {
  //   let params = search.search
  //   let pathname = search.pathname
  //   if((params===undefined || params===null || params==="")&&search.pathname==="/"){return true}
  //   // filter by pathname 'items'
  //   console.log("aqui 3",pathname.split('/'));
  //   if(pathname.includes("items")&&(pathname.split('/').length<3)){
  //     console.log("aqui 2");
  //     // filter by query param '?search'
  //     if (params.includes('?')) {
  //       const replaceFistCharacter = params.replace('?','');
  //       const splitString = replaceFistCharacter.split('&');
  //       // filter by number of parameters
  //       if(splitString.length >1){
  //         return false
  //       }else{
  //         console.log("aqui");
  //         // filter by name query param only accept 'search'
  //         if(splitString[0].split("=")[1]&&splitString[0].split("=")[0]=="search"){
  //           setSearchQuery(splitString[0].split("=")[1])
  //           console.log("aqui 0");
  //           return true
  //         }
  //         return false
  //       }
  //       return true
  //     }else{
  //       return false
  //     }
  //   }else{
  //     return false
  //   }
  // }

  return (
    <>
    <Search/>
    <Routes>
      {/* <Route path="/" element={
        <div className="App">
          <SearchComponent returnItems={returnItems} cleanSearch={cleanSearch} setCleanSearch={setCleanSearch}></SearchComponent>
          {
            loadResult?<ResultComponent items={items} returnItem={returnItem}/>
            :
            loadDetail&&tempItem?<ItemComponent data={tempItem}/>
            :null
          }
        </div>
      }></Route> */}
      {/* <Route path='/' element={<SearchComponent returnItems={returnItems} cleanSearch={cleanSearch} setCleanSearch={setCleanSearch}></SearchComponent>}></Route> */}
      {/* <Route path='' element={<Search/>}></Route> */}
      <Route path='/items/:id' element={<ItemDetail/>}></Route>
      <Route path='/items' element={<ItemSearch/>}></Route>
      <Route path='*' element={<div>ERROR PAGE</div>}></Route>
    </Routes>
    </>
  );
}

export default App;
