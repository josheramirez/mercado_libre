import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import { SearchResponse } from '../components/SearchResponse'
import Router from 'react-router';
import axiosMock from "axios";
import {act, render, cleanup, waitFor, fireEvent, getAllByTestId} from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom'
afterEach(cleanup)

const mockData = {
    "data": {
      "author": {
        "name": "joshe",
        "lastname": "ramirez"
      },
      "categories": [
        "Discos y Piedras"
      ],
      "items": [
        {
          "id": "MLA1400998726",
          "title": "Disco Diamantado Aliafor Patroll Segmentado Ps-4.5 Ps 4-1/2'' 115mm Ladrillos Mamposteria 4,5 115",
          "price": {
            "currency": "ARS",
            "amount": 1,
            "decimals": 2555
          },
          "picture": "http://http2.mlstatic.com/D_733385-MLU54963056988_042023-I.jpg",
          "condition": "new",
          "free_shipping": false
        },
        {
          "id": "MLA811788997",
          "title": "Disco Diamantado Patroll Segmentado Ø 4,5  De Aliafor",
          "price": {
            "currency": "ARS",
            "amount": 1,
            "decimals": 2848.73
          },
          "picture": "http://http2.mlstatic.com/D_767606-MLA31995845431_082019-I.jpg",
          "condition": "new",
          "free_shipping": false
        },
        {
          "id": "MLA916636115",
          "title": "Disco Diamantado Segmentado Patroll 115mm Ps-4.5 De Aliafor",
          "price": {
            "currency": "ARS",
            "amount": 1,
            "decimals": 2555
          },
          "picture": "http://http2.mlstatic.com/D_842278-MLA45602595464_042021-I.jpg",
          "condition": "new",
          "free_shipping": false
        },
        {
          "id": "MLA662202763",
          "title": "Disco Diamantado Segmentado Patroll 4,5 Aliafor 115 Mm",
          "price": {
            "currency": "ARS",
            "amount": 50,
            "decimals": 2700
          },
          "picture": "http://http2.mlstatic.com/D_843383-MLA46336751532_062021-I.jpg",
          "condition": "new",
          "free_shipping": false
        }
      ]
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "content-length": "1169",
      "content-type": "application/json; charset=utf-8"
    },
    "config": {
      "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
      },
      "adapter": [
        "xhr",
        "http"
      ],
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": null
      },
      "method": "get",
      "url": "http://localhost:4200/items?search=ps45"
    },
    "request": {}
}

test('render SearchResponse loading data', async ()=>{
    axiosMock.get.mockResolvedValue(mockData)
    const { getByText, getByTestId, component} = await act( async () => render(
        <MemoryRouter initialEntries={["?search=ps4"]}>
            <SearchResponse />
        </MemoryRouter>
    ));

    const items = await waitFor(() => getByTestId('items'));
    expect((items).hasChildNodes()).toBe(true)
})

test('render SearchResponse wrong query params', async ()=>{
    axiosMock.get.mockResolvedValue(mockData)
    const { getByText, getByTestId, component} = await act( async () => render(
        <MemoryRouter initialEntries={["?badParam=ps4"]}>
            <SearchResponse />
        </MemoryRouter>
    ));

    const res = await waitFor(() => getByText('WRONG URL'));
    expect((res).textContent).toBe('WRONG URL')
})

test('render SearchResponse getDetails of item in view', async ()=>{
    axiosMock.get.mockResolvedValue(mockData)
    const {getByText, getByTestId, getAllByTestId} = await act( async () => render(
        <MemoryRouter initialEntries={["?search=ps4"]}>
            <SearchResponse />
        </MemoryRouter>
    ));

    const items_img = await waitFor(() => getAllByTestId('item_img'));
    const items_price = await waitFor(() => getAllByTestId('item_price'));
    const items_title = await waitFor(() => getAllByTestId('item_title'));
    const items_condition = await waitFor(() => getAllByTestId('item_condition'));
    

    fireEvent.click(items_img[0])
    // fireEvent.click(items_price[0])
    // fireEvent.click(items_title[0])
    // fireEvent.click(items_condition[0])

    // console.log(items_price.length);
    // console.log(items_title.length);
    // console.log(items_condition.length);

    await waitFor(() =>  expect((items_img).length).toBe(4));
   

})