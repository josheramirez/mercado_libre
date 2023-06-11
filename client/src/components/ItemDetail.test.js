import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import {act, render, cleanup,waitFor} from '@testing-library/react';
import { ItemDetail } from './ItemDetail'
import Router from 'react-router';
import axiosMock from "axios";

const mockData = {
  "data": {
    "author": {
      "name": "joshe",
      "lastname": "ramirez"
    },
    "item": {
      "id": "MLA1365439293",
      "title": "Siameses Seal",
      "price": {
        "currency": "ARS",
        "amount": 1,
        "decimals": 45000
      },
      "picture": "http://http2.mlstatic.com/D_885023-MLA52713234103_122022-I.jpg",
      "condition": "new",
      "free_shipping": false,
      "sold_quantity": 0,
      "description": {
        "text": "",
        "plain_text": "Gatitos siameses de 57 días de edad, machos y hembras disponibles. Realizó entregas sin recargo en caba",
        "last_updated": "2023-04-11T03:42:10.879Z",
        "date_created": "2023-04-11T03:42:10.879Z",
        "snapshot": {
          "url": "http://descriptions.mlstatic.com/D-MLA1365439293.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0",
          "width": 0,
          "height": 0,
          "status": ""
        }
      }
    }
  },
  "status": 200,
  "statusText": "OK"
}
const mockBadData = {
  "message": "Request failed with status code 404",
  "name": "AxiosError",
  "stack": "AxiosError: Request failed with status code 404\n    at settle (C:\\Users\\joshe\\mercado_libre\\server\\node_modules\\axios\\dist\\node\\axios.cjs:1909:12)\n    at IncomingMessage.handleStreamEnd (C:\\Users\\joshe\\mercado_libre\\server\\node_modules\\axios\\dist\\node\\axios.cjs:2989:11)\n    at IncomingMessage.emit (node:events:525:35)\n    at endReadableNT (node:internal/streams/readable:1359:12)\n    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)",
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
          "User-Agent": "axios/1.4.0",
          "Accept-Encoding": "gzip, compress, deflate, br"
      },
      "method": "get",
      "url": "https://api.mercadolibre.com/items//dddd"
  },
  "code": "ERR_BAD_REQUEST",
  "status": 404
}

afterEach(cleanup)

test('render ItemDetail loading', ()=>{
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123123' });
    axiosMock.get.mockResolvedValue(mockBadData)
    const component = render(
      <BrowserRouter>
        <ItemDetail />
      </BrowserRouter>
    );
    component.getByText("LOADING")
})

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
}));

it('render ItemDetail fetch', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'MLA1139229143' });
  axiosMock.get.mockResolvedValue(mockData)
  const { getByText, getByTestId} = await act( async () => render(<ItemDetail/>));
  const item_title = await waitFor(() => getByTestId("item_title"));
  expect((item_title).textContent).toBe("Siameses Seal")

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:4200/items/MLA1139229143");
 })