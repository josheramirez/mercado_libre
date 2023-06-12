import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import React, {useEffect, useState} from 'react';
import { Search } from './components/Search';
import { ItemDetail } from './components/ItemDetail';
import { SearchResponse } from './components/SearchResponse';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <>
    <Search/>
    <Routes>
      <Route path='/items/:id' element={<ItemDetail/>}></Route>
      <Route path='/items' element={<SearchResponse/>}></Route>
      <Route path='*' element={<div>ERROR PAGE</div>}></Route>
    </Routes>
    </>
  );
}

export default App;
