import logo from './logo.svg';
import './App.scss';
import axios from 'axios'

import React, {useEffect, useState} from 'react';
import { Search } from './components/Search';
import { ItemDetail } from './components/ItemDetail';
import { SearchResponse } from './components/SearchResponse';
import { Route, Routes, useLocation } from 'react-router-dom';
import Error404 from './components/Error404';
import EmptySearch from './components/EmptySearch';
import HandleError from './components/HandleError';

function App() {
  return (
    <>
    <Search/>
    <Routes>
      <Route path='/items/:id' element={<ItemDetail/>}></Route>
      <Route path='/items' element={<SearchResponse/>}></Route>
      <Route path='*' element={<HandleError/>}></Route>
    </Routes>
    </>
  );
}

export default App;
