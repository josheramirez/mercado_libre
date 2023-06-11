import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render , screen} from '@testing-library/react'
import { Search } from '../components/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

test('render Search', ()=>{
    const component = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    component.getByPlaceholderText("Buscar productos, marcas y más…")
})

test('change value input box',()=>{
  const component = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  
  let input = component.getByRole('button', { type: "text" })
  fireEvent.change(input,{target:{value:"gatos"}})
  expect(input).toHaveValue("gatos")
})

test('submit form and move to other url',()=>{
  const component = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  
  let input = component.getByRole('button', { type: "text" })
  fireEvent.change(input,{target:{value:"gatos"}})
  let button = component.getByRole('button', { type: "submit" })
  fireEvent.click(button)

  expect(window.location.pathname).toEqual('/items/');
})
