import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import React, {useEffect, useState} from 'react';
import { Search } from './components/Search';
import { ItemDetail } from './components/ItemDetail';
import { SearchResponse } from './components/SearchResponse';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  
  const itemUrl = "http://localhost:4200/items/";

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
      <Route path='/items' element={<SearchResponse/>}></Route>
      <Route path='*' element={<div>ERROR PAGE</div>}></Route>
    </Routes>
    </>
  );
}

export default App;
