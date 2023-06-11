const request = require('supertest');
const app = require('./app');
const axios = require('axios');

// const app = express();


const mosckResponse_404 = {
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
      "url": "https://api.mercadolibre.com/items//123"
  },
  "code": "ERR_BAD_REQUEST",
  "status": 404
}

const mockResponse_item = {
    "author": {
        "name": "joshe",
        "lastname": "ramirez"
    },
    "item": {
        "id": "MLA1365439293",
        "title": "Siameses Seal ",
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
}

const mockResponse_item_not_found = {
  "error": "resource not found",
  "message": "Si quieres conocer los recursos de la API que se encuentran disponibles visita el Sitio de Desarrolladores de MercadoLibre (http://developers.mercadolibre.com)"
}

const mockResonse_search = {
  "site_id": "MLA",
  "country_default_time_zone": "GMT-03:00",
  "query": "ps4",
  "paging": {
      "total": 3418,
      "primary_results": 1000,
      "offset": 0,
      "limit": 4
  },
  "results": [
      {
          "id": "MLA1349060703",
          "title": "Sony Playstation 4 Slim 1tb Standard  Color Negro Azabache",
          "condition": "new",
          "thumbnail_id": "817486-MLA32731749427_112019",
          "catalog_product_id": "MLA10813733",
          "listing_type_id": "gold_special",
          "permalink": "https://www.mercadolibre.com.ar/sony-playstation-4-slim-1tb-standard-color-negro-azabache/p/MLA10813733",
          "buying_mode": "buy_it_now",
          "site_id": "MLA",
          "category_id": "MLA438566",
          "domain_id": "MLA-GAME_CONSOLES",
          "thumbnail": "http://http2.mlstatic.com/D_817486-MLA32731749427_112019-I.jpg",
          "currency_id": "ARS",
          "order_backend": 1,
          "price": 212871,
          "original_price": null,
          "sale_price": null,
          "sold_quantity": 50,
          "available_quantity": 1,
          "official_store_id": null,
          "use_thumbnail_id": true,
          "accepts_mercadopago": true,
          "tags": [
              "extended_warranty_eligible",
              "good_quality_thumbnail",
              "standard_price_by_channel",
              "immediate_payment",
              "cart_eligible",
              "best_seller_candidate",
              "shipping_guaranteed"
          ],
          "shipping": {
              "store_pick_up": false,
              "free_shipping": true,
              "logistic_type": "xd_drop_off",
              "mode": "me2",
              "tags": [
                  "self_service_out",
                  "mandatory_free_shipping"
              ],
              "promise": null
          },
          "stop_time": "2043-02-12T04:00:00.000Z",
          "seller": {
              "id": 441790337,
              "nickname": "NUCLEOGAMER.COM",
              "car_dealer": false,
              "real_estate_agency": false,
              "_": false,
              "registration_date": "2019-06-05T11:30:24.000-04:00",
              "tags": [
                  "normal",
                  "mshops",
                  "credits_profile",
                  "messages_as_seller"
              ],
              "car_dealer_logo": "",
              "permalink": "http://perfil.mercadolibre.com.ar/NUCLEOGAMER.COM",
              "seller_reputation": {
                  "level_id": "5_green",
                  "power_seller_status": "platinum",
                  "transactions": {
                      "canceled": 566,
                      "completed": 2797,
                      "period": "historic",
                      "ratings": {
                          "negative": 0.24,
                          "neutral": 0.05,
                          "positive": 0.71
                      },
                      "total": 3363
                  },
                  "metrics": {
                      "sales": {
                          "period": "60 days",
                          "completed": 601
                      },
                      "claims": {
                          "period": "60 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 9,
                              "real_rate": 0.0127
                          }
                      },
                      "delayed_handling_time": {
                          "period": "60 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 51,
                              "real_rate": 0.0864
                          }
                      },
                      "cancellations": {
                          "period": "60 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 2,
                              "real_rate": 0.0028
                          }
                      }
                  }
              }
          },
          "seller_address": {
              "comment": "",
              "address_line": "",
              "id": null,
              "latitude": null,
              "longitude": null,
              "country": {
                  "id": "AR",
                  "name": "Argentina"
              },
              "state": {
                  "id": "AR-C",
                  "name": "Capital Federal"
              },
              "city": {
                  "id": "TUxBQkFHUjk3NjJa",
                  "name": "Agronomía"
              }
          },
          "address": {
              "state_id": "AR-C",
              "state_name": "Capital Federal",
              "city_id": "TUxBQkFHUjk3NjJa",
              "city_name": "Agronomía"
          },
          "attributes": [
              {
                  "id": "BRAND",
                  "name": "Marca",
                  "value_id": "995",
                  "value_name": "Sony",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "995",
                          "name": "Sony",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "ITEM_CONDITION",
                  "name": "Condición del ítem",
                  "value_id": "2230284",
                  "value_name": "Nuevo",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "2230284",
                          "name": "Nuevo",
                          "struct": null,
                          "source": 3045741222775799
                      }
                  ],
                  "source": 3045741222775799,
                  "value_type": "list"
              },
              {
                  "id": "LINE",
                  "name": "Línea",
                  "value_id": "312177",
                  "value_name": "PlayStation",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "312177",
                          "name": "PlayStation",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "MODEL",
                  "name": "Modelo",
                  "value_id": "316312",
                  "value_name": "PlayStation 4",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "316312",
                          "name": "PlayStation 4",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "SUBMODEL",
                  "name": "Submodelo",
                  "value_id": "480797",
                  "value_name": "Slim",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "480797",
                          "name": "Slim",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              }
          ],
          "installments": {
              "quantity": 12,
              "amount": 38495.95,
              "rate": 117.01,
              "currency_id": "ARS"
          },
          "winner_item_id": null,
          "catalog_listing": true,
          "discounts": null,
          "promotions": [],
          "inventory_id": null
      },
      {
          "id": "MLA1369795711",
          "title": "Sony Playstation 4 Slim 1tb God Of War Ragnarok Bundle  Color Negro Azabache",
          "condition": "new",
          "thumbnail_id": "728865-MLA54949023053_042023",
          "catalog_product_id": "MLA20914562",
          "listing_type_id": "gold_pro",
          "permalink": "https://www.mercadolibre.com.ar/sony-playstation-4-slim-1tb-god-of-war-ragnarok-bundle-color-negro-azabache/p/MLA20914562",
          "buying_mode": "buy_it_now",
          "site_id": "MLA",
          "category_id": "MLA438566",
          "domain_id": "MLA-GAME_CONSOLES",
          "thumbnail": "http://http2.mlstatic.com/D_728865-MLA54949023053_042023-I.jpg",
          "currency_id": "ARS",
          "order_backend": 2,
          "price": 299999,
          "original_price": 389999,
          "sale_price": null,
          "sold_quantity": 50,
          "available_quantity": 1,
          "official_store_id": null,
          "use_thumbnail_id": true,
          "accepts_mercadopago": true,
          "tags": [
              "deal_of_the_day",
              "extended_warranty_eligible",
              "good_quality_thumbnail",
              "immediate_payment",
              "best_seller_candidate",
              "shipping_guaranteed"
          ],
          "shipping": {
              "store_pick_up": false,
              "free_shipping": true,
              "logistic_type": "fulfillment",
              "mode": "me2",
              "tags": [
                  "fulfillment",
                  "self_service_in",
                  "mandatory_free_shipping"
              ],
              "promise": null
          },
          "stop_time": "2043-05-10T04:00:00.000Z",
          "seller": {
              "id": 231153278,
              "nickname": "ATAJO_AR",
              "car_dealer": false,
              "real_estate_agency": false,
              "_": false,
              "registration_date": "2016-10-12T08:08:09.000-04:00",
              "tags": [
                  "normal",
                  "credits_profile",
                  "messages_as_seller"
              ],
              "car_dealer_logo": "",
              "permalink": "http://perfil.mercadolibre.com.ar/ATAJO_AR",
              "seller_reputation": {
                  "level_id": "5_green",
                  "power_seller_status": null,
                  "transactions": {
                      "canceled": 4665,
                      "completed": 73986,
                      "period": "historic",
                      "ratings": {
                          "negative": 0.21,
                          "neutral": 0.03,
                          "positive": 0.76
                      },
                      "total": 78651
                  },
                  "metrics": {
                      "sales": {
                          "period": "60 days",
                          "completed": 28109
                      },
                      "claims": {
                          "period": "60 days",
                          "rate": 0.0047,
                          "value": 143
                      },
                      "delayed_handling_time": {
                          "period": "60 days",
                          "rate": 0.0518,
                          "value": 1305
                      },
                      "cancellations": {
                          "period": "60 days",
                          "rate": 0.0086,
                          "value": 259
                      }
                  }
              }
          },
          "seller_address": {
              "comment": "",
              "address_line": "",
              "id": null,
              "latitude": null,
              "longitude": null,
              "country": {
                  "id": "AR",
                  "name": "Argentina"
              },
              "state": {
                  "id": "AR-C",
                  "name": "Capital Federal"
              },
              "city": {
                  "id": "TUxBQkJBUjM0MDha",
                  "name": "Barracas"
              }
          },
          "address": {
              "state_id": "AR-C",
              "state_name": "Capital Federal",
              "city_id": "TUxBQkJBUjM0MDha",
              "city_name": "Barracas"
          },
          "attributes": [
              {
                  "id": "BRAND",
                  "name": "Marca",
                  "value_id": "995",
                  "value_name": "Sony",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "995",
                          "name": "Sony",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "ITEM_CONDITION",
                  "name": "Condición del ítem",
                  "value_id": "2230284",
                  "value_name": "Nuevo",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "2230284",
                          "name": "Nuevo",
                          "struct": null,
                          "source": 3045741222775799
                      }
                  ],
                  "source": 3045741222775799,
                  "value_type": "list"
              },
              {
                  "id": "LINE",
                  "name": "Línea",
                  "value_id": "312177",
                  "value_name": "PlayStation",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "312177",
                          "name": "PlayStation",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "MODEL",
                  "name": "Modelo",
                  "value_id": "316312",
                  "value_name": "PlayStation 4",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "316312",
                          "name": "PlayStation 4",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "PACKAGE_LENGTH",
                  "name": "Largo del paquete",
                  "value_id": null,
                  "value_name": "42.4 cm",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": {
                      "number": 42.4,
                      "unit": "cm"
                  },
                  "values": [
                      {
                          "id": null,
                          "name": "42.4 cm",
                          "struct": {
                              "unit": "cm",
                              "number": 42.4
                          },
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "number_unit"
              },
              {
                  "id": "PACKAGE_WEIGHT",
                  "name": "Peso del paquete",
                  "value_id": null,
                  "value_name": "3340 g",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": {
                      "number": 3340,
                      "unit": "g"
                  },
                  "values": [
                      {
                          "id": null,
                          "name": "3340 g",
                          "struct": {
                              "number": 3340,
                              "unit": "g"
                          },
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "number_unit"
              },
              {
                  "id": "SUBMODEL",
                  "name": "Submodelo",
                  "value_id": "480797",
                  "value_name": "Slim",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "480797",
                          "name": "Slim",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "WEIGHT",
                  "name": "Peso",
                  "value_id": "999652",
                  "value_name": "2 kg",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": {
                      "number": 2,
                      "unit": "kg"
                  },
                  "values": [
                      {
                          "id": "999652",
                          "name": "2 kg",
                          "struct": {
                              "number": 2,
                              "unit": "kg"
                          },
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "number_unit"
              }
          ],
          "installments": {
              "quantity": 9,
              "amount": 33333.22,
              "rate": 0,
              "currency_id": "ARS"
          },
          "winner_item_id": null,
          "catalog_listing": true,
          "discounts": null,
          "promotions": [],
          "differential_pricing": {
              "id": 35713285
          },
          "inventory_id": "FQIO23476"
      },
      {
          "id": "MLA1192717387",
          "title": "Sony Playstation 4 Slim 500gb Standard  Color Negro Azabache",
          "condition": "new",
          "thumbnail_id": "817486-MLA32731749427_112019",
          "catalog_product_id": "MLA10813731",
          "listing_type_id": "gold_special",
          "permalink": "https://www.mercadolibre.com.ar/sony-playstation-4-slim-500gb-standard-color-negro-azabache/p/MLA10813731",
          "buying_mode": "buy_it_now",
          "site_id": "MLA",
          "category_id": "MLA438566",
          "domain_id": "MLA-GAME_CONSOLES",
          "thumbnail": "http://http2.mlstatic.com/D_817486-MLA32731749427_112019-I.jpg",
          "currency_id": "ARS",
          "order_backend": 3,
          "price": 199000,
          "original_price": null,
          "sale_price": null,
          "sold_quantity": 50,
          "available_quantity": 1,
          "official_store_id": null,
          "use_thumbnail_id": true,
          "accepts_mercadopago": true,
          "tags": [
              "extended_warranty_eligible",
              "good_quality_picture",
              "good_quality_thumbnail",
              "immediate_payment",
              "cart_eligible",
              "best_seller_candidate",
              "shipping_guaranteed"
          ],
          "shipping": {
              "store_pick_up": false,
              "free_shipping": true,
              "logistic_type": "xd_drop_off",
              "mode": "me2",
              "tags": [
                  "mandatory_free_shipping"
              ],
              "promise": null
          },
          "stop_time": "2042-10-08T04:00:00.000Z",
          "seller": {
              "id": 267299678,
              "nickname": "SETEC BROTHERS",
              "car_dealer": false,
              "real_estate_agency": false,
              "_": false,
              "registration_date": "2017-08-04T20:01:17.000-04:00",
              "tags": [
                  "normal",
                  "credits_profile",
                  "mshops",
                  "messages_as_seller"
              ],
              "car_dealer_logo": "",
              "permalink": "http://perfil.mercadolibre.com.ar/SETEC+BROTHERS",
              "seller_reputation": {
                  "level_id": "5_green",
                  "power_seller_status": "platinum",
                  "transactions": {
                      "canceled": 303,
                      "completed": 4244,
                      "period": "historic",
                      "ratings": {
                          "negative": 0.03,
                          "neutral": 0.01,
                          "positive": 0.96
                      },
                      "total": 4547
                  },
                  "metrics": {
                      "sales": {
                          "period": "60 days",
                          "completed": 716
                      },
                      "claims": {
                          "period": "60 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 9,
                              "real_rate": 0.0115
                          }
                      },
                      "delayed_handling_time": {
                          "period": "60 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 18,
                              "real_rate": 0.0265
                          }
                      },
                      "cancellations": {
                          "period": "60 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 0,
                              "real_rate": 0
                          }
                      }
                  }
              }
          },
          "seller_address": {
              "comment": "",
              "address_line": "",
              "id": null,
              "latitude": null,
              "longitude": null,
              "country": {
                  "id": "AR",
                  "name": "Argentina"
              },
              "state": {
                  "id": "AR-C",
                  "name": "Capital Federal"
              },
              "city": {
                  "id": "TUxBQlZJTDYzNzZa",
                  "name": "Villa Devoto"
              }
          },
          "address": {
              "state_id": "AR-C",
              "state_name": "Capital Federal",
              "city_id": "TUxBQlZJTDYzNzZa",
              "city_name": "Villa Devoto"
          },
          "attributes": [
              {
                  "id": "BRAND",
                  "name": "Marca",
                  "value_id": "995",
                  "value_name": "Sony",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "995",
                          "name": "Sony",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "ITEM_CONDITION",
                  "name": "Condición del ítem",
                  "value_id": "2230284",
                  "value_name": "Nuevo",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "2230284",
                          "name": "Nuevo",
                          "struct": null,
                          "source": 6808261514773724
                      }
                  ],
                  "source": 6808261514773724,
                  "value_type": "list"
              },
              {
                  "id": "LINE",
                  "name": "Línea",
                  "value_id": "312177",
                  "value_name": "PlayStation",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "312177",
                          "name": "PlayStation",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "MODEL",
                  "name": "Modelo",
                  "value_id": "316312",
                  "value_name": "PlayStation 4",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "316312",
                          "name": "PlayStation 4",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "SUBMODEL",
                  "name": "Submodelo",
                  "value_id": "480797",
                  "value_name": "Slim",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "480797",
                          "name": "Slim",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              }
          ],
          "installments": {
              "quantity": 12,
              "amount": 35987.49,
              "rate": 117.01,
              "currency_id": "ARS"
          },
          "winner_item_id": null,
          "catalog_listing": true,
          "discounts": null,
          "promotions": [],
          "inventory_id": null
      },
      {
          "id": "MLA1420481200",
          "title": "Sony Playstation 4 Slim 1tb Hits Bundle: God Of War/gran Turismo Sport/uncharted 4: A Thief's End  Color Negro Azabache",
          "condition": "new",
          "thumbnail_id": "710255-MLA40175707773_122019",
          "catalog_product_id": "MLA15163164",
          "listing_type_id": "gold_special",
          "permalink": "https://www.mercadolibre.com.ar/sony-playstation-4-slim-1tb-hits-bundle-god-of-wargran-turismo-sportuncharted-4-a-thiefs-end-color-negro-azabache/p/MLA15163164",
          "buying_mode": "buy_it_now",
          "site_id": "MLA",
          "category_id": "MLA438566",
          "domain_id": "MLA-GAME_CONSOLES",
          "thumbnail": "http://http2.mlstatic.com/D_710255-MLA40175707773_122019-I.jpg",
          "currency_id": "ARS",
          "order_backend": 4,
          "price": 290000,
          "original_price": null,
          "sale_price": null,
          "sold_quantity": 5,
          "available_quantity": 1,
          "official_store_id": null,
          "use_thumbnail_id": true,
          "accepts_mercadopago": true,
          "tags": [
              "extended_warranty_eligible",
              "good_quality_thumbnail",
              "immediate_payment",
              "cart_eligible",
              "best_seller_candidate"
          ],
          "shipping": {
              "store_pick_up": false,
              "free_shipping": true,
              "logistic_type": "xd_drop_off",
              "mode": "me2",
              "tags": [
                  "mandatory_free_shipping"
              ],
              "promise": null
          },
          "stop_time": "2043-05-14T04:00:00.000Z",
          "seller": {
              "id": 27391527,
              "nickname": "THIGRE2001",
              "car_dealer": false,
              "real_estate_agency": false,
              "_": false,
              "registration_date": "2003-08-28T16:56:03.000-04:00",
              "tags": [
                  "normal",
                  "credits_priority_4",
                  "credits_profile",
                  "messages_as_seller"
              ],
              "car_dealer_logo": "",
              "permalink": "http://perfil.mercadolibre.com.ar/THIGRE2001",
              "seller_reputation": {
                  "level_id": "4_light_green",
                  "power_seller_status": null,
                  "transactions": {
                      "canceled": 8,
                      "completed": 61,
                      "period": "historic",
                      "ratings": {
                          "negative": 0.07,
                          "neutral": 0.01,
                          "positive": 0.92
                      },
                      "total": 69
                  },
                  "metrics": {
                      "sales": {
                          "period": "365 days",
                          "completed": 61
                      },
                      "claims": {
                          "period": "365 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 2,
                              "real_rate": 0.0289
                          }
                      },
                      "delayed_handling_time": {
                          "period": "365 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 15,
                              "real_rate": 0.2586
                          }
                      },
                      "cancellations": {
                          "period": "365 days",
                          "rate": 0,
                          "value": 0,
                          "excluded": {
                              "real_value": 0,
                              "real_rate": 0
                          }
                      }
                  }
              }
          },
          "seller_address": {
              "comment": "",
              "address_line": "",
              "id": null,
              "latitude": null,
              "longitude": null,
              "country": {
                  "id": "AR",
                  "name": "Argentina"
              },
              "state": {
                  "id": "AR-B",
                  "name": "Buenos Aires"
              },
              "city": {
                  "id": "TUxBQ0xPTWMwNjk3",
                  "name": "Lomas de Zamora"
              }
          },
          "address": {
              "state_id": "AR-B",
              "state_name": "Buenos Aires",
              "city_id": "TUxBQ0xPTWMwNjk3",
              "city_name": "Lomas de Zamora"
          },
          "attributes": [
              {
                  "id": "BRAND",
                  "name": "Marca",
                  "value_id": "995",
                  "value_name": "Sony",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "995",
                          "name": "Sony",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "ITEM_CONDITION",
                  "name": "Condición del ítem",
                  "value_id": "2230284",
                  "value_name": "Nuevo",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "2230284",
                          "name": "Nuevo",
                          "struct": null,
                          "source": 6808261514773724
                      }
                  ],
                  "source": 6808261514773724,
                  "value_type": "list"
              },
              {
                  "id": "LINE",
                  "name": "Línea",
                  "value_id": "312177",
                  "value_name": "PlayStation",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "312177",
                          "name": "PlayStation",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "MODEL",
                  "name": "Modelo",
                  "value_id": "316312",
                  "value_name": "PlayStation 4",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "316312",
                          "name": "PlayStation 4",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              },
              {
                  "id": "SUBMODEL",
                  "name": "Submodelo",
                  "value_id": "480797",
                  "value_name": "Slim",
                  "attribute_group_id": "OTHERS",
                  "attribute_group_name": "Otros",
                  "value_struct": null,
                  "values": [
                      {
                          "id": "480797",
                          "name": "Slim",
                          "struct": null,
                          "source": 1
                      }
                  ],
                  "source": 1,
                  "value_type": "string"
              }
          ],
          "installments": {
              "quantity": 12,
              "amount": 52444.08,
              "rate": 117.01,
              "currency_id": "ARS"
          },
          "winner_item_id": null,
          "catalog_listing": true,
          "discounts": null,
          "promotions": [],
          "inventory_id": null
      }
  ],
  "sort": {
      "id": "relevance",
      "name": "Más relevantes"
  },
  "available_sorts": [
      {
          "id": "price_asc",
          "name": "Menor precio"
      },
      {
          "id": "price_desc",
          "name": "Mayor precio"
      }
  ],
  "filters": [
      {
          "id": "category",
          "name": "Categorías",
          "type": "text",
          "values": [
              {
                  "id": "MLA438566",
                  "name": "Consolas",
                  "path_from_root": [
                      {
                          "id": "MLA1144",
                          "name": "Consolas y Videojuegos"
                      },
                      {
                          "id": "MLA438566",
                          "name": "Consolas"
                      }
                  ]
              }
          ]
      }
  ],
  "available_filters": [
      {
          "id": "discount",
          "name": "Descuentos",
          "type": "number",
          "values": [
              {
                  "id": "5-100",
                  "name": "Desde 5% OFF",
                  "results": 1
              }
          ]
      },
      {
          "id": "price",
          "name": "Precio",
          "type": "range",
          "values": [
              {
                  "id": "*-100000.0",
                  "name": "Hasta $ 100.000",
                  "results": 151
              },
              {
                  "id": "100000.0-150000.0",
                  "name": "$100.000 a $150.000",
                  "results": 1117
              },
              {
                  "id": "150000.0-*",
                  "name": "Más de $150.000",
                  "results": 2150
              }
          ]
      },
      {
          "id": "accepts_mercadopago",
          "name": "Filtro por MercadoPago",
          "type": "boolean",
          "values": [
              {
                  "id": "yes",
                  "name": "Con MercadoPago",
                  "results": 3418
              }
          ]
      },
      {
          "id": "installments",
          "name": "Financiación",
          "type": "text",
          "values": [
              {
                  "id": "yes",
                  "name": "En cuotas",
                  "results": 3227
              },
              {
                  "id": "no_interest",
                  "name": "Sin interés",
                  "results": 181
              }
          ]
      },
      {
          "id": "shipping",
          "name": "Tipo de entrega",
          "type": "text",
          "values": [
              {
                  "id": "mercadoenvios",
                  "name": "Con envío",
                  "results": 3415
              },
              {
                  "id": "fulfillment",
                  "name": "Full",
                  "results": 1
              }
          ]
      },
      {
          "id": "power_seller",
          "name": "Filtro por calidad de vendedores",
          "type": "boolean",
          "values": [
              {
                  "id": "yes",
                  "name": "Mejores vendedores",
                  "results": 49
              }
          ]
      },
      {
          "id": "since",
          "name": "Filtro por fecha de comienzo",
          "type": "text",
          "values": [
              {
                  "id": "today",
                  "name": "Publicados hoy",
                  "results": 30
              }
          ]
      },
      {
          "id": "until",
          "name": "Filtro por fecha de finalización",
          "type": "text",
          "values": [
              {
                  "id": "today",
                  "name": "Finalizan hoy",
                  "results": 20
              }
          ]
      },
      {
          "id": "has_video",
          "name": "Filtro por publicaciones con video",
          "type": "boolean",
          "values": [
              {
                  "id": "yes",
                  "name": "Publicaciones con video",
                  "results": 35
              }
          ]
      },
      {
          "id": "has_pictures",
          "name": "Filtro por publicaciones con imágenes",
          "type": "boolean",
          "values": [
              {
                  "id": "yes",
                  "name": "Con fotos",
                  "results": 3418
              }
          ]
      },
      {
          "id": "all_payment_methods_discount",
          "name": "Descuentos para todos los medios de pago",
          "type": "number",
          "values": [
              {
                  "id": "1-100",
                  "name": "Desde 1% OFF",
                  "results": 2
              },
              {
                  "id": "5-100",
                  "name": "Desde 5% OFF",
                  "results": 1
              }
          ]
      },
      {
          "id": "price_campaign_id",
          "name": "Campaña",
          "type": "number",
          "values": [
              {
                  "id": "P-MLA11903006",
                  "name": "P-MLA11903006",
                  "results": 2
              },
              {
                  "id": "P-MLA11947256",
                  "name": "P-MLA11947256",
                  "results": 1
              }
          ]
      },
      {
          "id": "promotion_type",
          "name": "Tipo de promoción",
          "type": "text",
          "values": [
              {
                  "id": "deal_of_the_day",
                  "name": "Oferta del día",
                  "results": 1
              }
          ]
      },
      {
          "id": "shipping_cost",
          "name": "Costo de envío",
          "type": "text",
          "values": [
              {
                  "id": "free",
                  "name": "Gratis",
                  "results": 1610
              }
          ]
      },
      {
          "id": "BRAND",
          "name": "Marca",
          "type": "STRING",
          "values": [
              {
                  "id": "995",
                  "name": "Sony",
                  "results": 3019
              },
              {
                  "id": "9416513",
                  "name": "Game Player",
                  "results": 4
              },
              {
                  "id": "9551",
                  "name": "Sega",
                  "results": 3
              },
              {
                  "id": "12729045",
                  "name": "Play",
                  "results": 2
              },
              {
                  "id": "932890",
                  "name": "Alien",
                  "results": 1
              },
              {
                  "id": "5914574",
                  "name": "Sonny",
                  "results": 1
              },
              {
                  "id": "5754474",
                  "name": "Bethesda",
                  "results": 1
              },
              {
                  "id": "415859",
                  "name": "Bandai",
                  "results": 1
              },
              {
                  "id": "351181",
                  "name": "Slim",
                  "results": 1
              },
              {
                  "id": "2976157",
                  "name": "PVE",
                  "results": 1
              },
              {
                  "id": "276243",
                  "name": "Genérica",
                  "results": 1
              },
              {
                  "id": "2248889",
                  "name": "AtGames",
                  "results": 1
              },
              {
                  "id": "15770",
                  "name": "Microsoft",
                  "results": 1
              }
          ]
      },
      {
          "id": "CAPACITY",
          "name": "Capacidad",
          "type": "range",
          "values": [
              {
                  "id": "(*-512GB)",
                  "name": "Menos de 512 GB",
                  "results": 1589
              },
              {
                  "id": "[512GB-1024GB)",
                  "name": "512 a 1.023 GB",
                  "results": 1447
              },
              {
                  "id": "[1024GB-*)",
                  "name": "1.024 GB o más",
                  "results": 29
              }
          ]
      },
      {
          "id": "CONSOLE_TYPE",
          "name": "Tipo de consola",
          "type": "STRING",
          "values": [
              {
                  "id": "6827496",
                  "name": "De sobremesa",
                  "results": 2905
              },
              {
                  "id": "7751236",
                  "name": "Plug and play TV game",
                  "results": 73
              },
              {
                  "id": "6827497",
                  "name": "Portátil",
                  "results": 57
              },
              {
                  "id": "6827498",
                  "name": "Híbrida",
                  "results": 8
              },
              {
                  "id": "6827499",
                  "name": "Microconsola",
                  "results": 3
              }
          ]
      },
      {
          "id": "CONTROLLERS_NUMBER_INCLUDED",
          "name": "Cantidad de controles incluidos",
          "type": "range",
          "values": [
              {
                  "id": "[1-1]",
                  "name": "1 control",
                  "results": 2369
              },
              {
                  "id": "[2-2]",
                  "name": "2 controles",
                  "results": 384
              },
              {
                  "id": "[3-3]",
                  "name": "3 controles",
                  "results": 32
              },
              {
                  "id": "[4-*)",
                  "name": "4 controles o más",
                  "results": 12
              }
          ]
      },
      {
          "id": "INCLUDES_CONTROLLERS",
          "name": "Controles",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Incluye controles",
                  "results": 2871
              },
              {
                  "id": "242084",
                  "name": "No incluye controles",
                  "results": 40
              }
          ]
      },
      {
          "id": "INCLUDES_GAMES",
          "name": "Otras características",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Incluye juegos",
                  "results": 2279
              }
          ]
      },
      {
          "id": "ITEM_CONDITION",
          "name": "Condición",
          "type": "STRING",
          "values": [
              {
                  "id": "2230581",
                  "name": "Usado",
                  "results": 3287
              },
              {
                  "id": "2230284",
                  "name": "Nuevo",
                  "results": 77
              },
              {
                  "id": "2230582",
                  "name": "Reacondicionado",
                  "results": 53
              }
          ]
      },
      {
          "id": "MAIN_COLOR",
          "name": "Color principal",
          "type": "list",
          "values": [
              {
                  "id": "2450295",
                  "name": "Negro",
                  "results": 2053
              },
              {
                  "id": "2450308",
                  "name": "Blanco",
                  "results": 33
              },
              {
                  "id": "2450293",
                  "name": "Azul",
                  "results": 21
              },
              {
                  "id": "2450314",
                  "name": "Verde",
                  "results": 7
              },
              {
                  "id": "2450294",
                  "name": "Gris",
                  "results": 5
              },
              {
                  "id": "2450289",
                  "name": "Dorado",
                  "results": 4
              },
              {
                  "id": "2450307",
                  "name": "Rojo",
                  "results": 2
              }
          ]
      },
      {
          "id": "MODEL",
          "name": "Modelo",
          "type": "STRING",
          "values": [
              {
                  "id": "316312",
                  "name": "PlayStation 4",
                  "results": 2367
              },
              {
                  "id": "9533",
                  "name": "PlayStation",
                  "results": 239
              },
              {
                  "id": "34975",
                  "name": "Slim",
                  "results": 74
              },
              {
                  "id": "5038674",
                  "name": "PS4",
                  "results": 47
              },
              {
                  "id": "9536",
                  "name": "PlayStation 3",
                  "results": 9
              },
              {
                  "id": "9560",
                  "name": "Genesis",
                  "results": 3
              },
              {
                  "id": "9549",
                  "name": "PlayStation 2",
                  "results": 3
              },
              {
                  "id": "9520",
                  "name": "PS Vita",
                  "results": 2
              },
              {
                  "id": "9515",
                  "name": "Pro",
                  "results": 2
              },
              {
                  "id": "5068692",
                  "name": "SY-891",
                  "results": 1
              },
              {
                  "id": "401380",
                  "name": "Xbox One",
                  "results": 1
              },
              {
                  "id": "2976158",
                  "name": "Slim GETAR Station",
                  "results": 1
              },
              {
                  "id": "10252944",
                  "name": "Family Retro Portatil",
                  "results": 1
              }
          ]
      },
      {
          "id": "POWER_SUPPLY_TYPE",
          "name": "Tipo de alimentación",
          "type": "STRING",
          "values": [
              {
                  "id": "8152567",
                  "name": "Corriente eléctrica",
                  "results": 2630
              },
              {
                  "id": "4491927",
                  "name": "Batería",
                  "results": 5
              },
              {
                  "id": "1176674",
                  "name": "Pila",
                  "results": 2
              }
          ]
      },
      {
          "id": "SUBMODEL",
          "name": "Submodelo",
          "type": "STRING",
          "values": [
              {
                  "id": "480797",
                  "name": "Slim",
                  "results": 1303
              },
              {
                  "id": "480805",
                  "name": "Pro",
                  "results": 296
              },
              {
                  "id": "480800",
                  "name": "Fat",
                  "results": 122
              },
              {
                  "id": "480802",
                  "name": "Super Slim",
                  "results": 8
              },
              {
                  "id": "12916404",
                  "name": "Digital",
                  "results": 3
              },
              {
                  "id": "5171926",
                  "name": "S",
                  "results": 2
              }
          ]
      },
      {
          "id": "WITH_BLUETOOTH",
          "name": "Otras características",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Con Bluetooth",
                  "results": 2429
              }
          ]
      },
      {
          "id": "WITH_HDMI",
          "name": "Otras características",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Con HDMI",
                  "results": 2693
              }
          ]
      },
      {
          "id": "WITH_S_PDIF",
          "name": "Otras características",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Con S/PDIF",
                  "results": 1282
              }
          ]
      },
      {
          "id": "WITH_USB",
          "name": "Otras características",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Con USB",
                  "results": 2576
              }
          ]
      },
      {
          "id": "WITH_WI_FI",
          "name": "Wi-Fi",
          "type": "boolean",
          "values": [
              {
                  "id": "242085",
                  "name": "Con Wi-Fi",
                  "results": 2904
              }
          ]
      },
      {
          "id": "state",
          "name": "Ubicación",
          "type": "text",
          "values": [
              {
                  "id": "TUxBUENBUGw3M2E1",
                  "name": "Capital Federal",
                  "results": 1014
              },
              {
                  "id": "TUxBUEdSQXJlMDNm",
                  "name": "Bs.As. G.B.A. Sur",
                  "results": 510
              },
              {
                  "id": "TUxBUEdSQWU4ZDkz",
                  "name": "Bs.As. G.B.A. Norte",
                  "results": 424
              },
              {
                  "id": "TUxBUEdSQWVmNTVm",
                  "name": "Bs.As. G.B.A. Oeste",
                  "results": 395
              },
              {
                  "id": "TUxBUFpPTmFpbnRl",
                  "name": "Buenos Aires Interior",
                  "results": 183
              },
              {
                  "id": "TUxBUENPUmFkZGIw",
                  "name": "Córdoba",
                  "results": 148
              },
              {
                  "id": "TUxBUFNBTmU5Nzk2",
                  "name": "Santa Fe",
                  "results": 144
              },
              {
                  "id": "TUxBUENPU2ExMmFkMw",
                  "name": "Bs.As. Costa Atlántica",
                  "results": 57
              },
              {
                  "id": "TUxBUE1FTmE5OWQ4",
                  "name": "Mendoza",
                  "results": 48
              },
              {
                  "id": "TUxBUFRVQ244NmM3",
                  "name": "Tucumán",
                  "results": 35
              },
              {
                  "id": "TUxBUEVOVHMzNTdm",
                  "name": "Entre Ríos",
                  "results": 34
              },
              {
                  "id": "TUxBUENPUnM5MjI0",
                  "name": "Corrientes",
                  "results": 22
              },
              {
                  "id": "TUxBUENIQW8xMTNhOA",
                  "name": "Chaco",
                  "results": 19
              },
              {
                  "id": "TUxBUE5FVW4xMzMzNQ",
                  "name": "Neuquén",
                  "results": 18
              },
              {
                  "id": "TUxBUFNBTGFjMTJi",
                  "name": "Salta",
                  "results": 17
              },
              {
                  "id": "TUxBUENIVXQxNDM1MQ",
                  "name": "Chubut",
                  "results": 16
              },
              {
                  "id": "TUxBUFLNT29iZmZm",
                  "name": "Río Negro",
                  "results": 16
              },
              {
                  "id": "TUxBUE1JU3MzNjIx",
                  "name": "Misiones",
                  "results": 15
              },
              {
                  "id": "TUxBUFNBTm9lOTlk",
                  "name": "Santiago del Estero",
                  "results": 14
              },
              {
                  "id": "TUxBUFNBTnM0ZTcz",
                  "name": "San Luis",
                  "results": 14
              },
              {
                  "id": "TUxBUExBWmEyNzY0",
                  "name": "La Rioja",
                  "results": 9
              },
              {
                  "id": "TUxBUFNBTno3ZmY5",
                  "name": "Santa Cruz",
                  "results": 9
              },
              {
                  "id": "TUxBUExBWmE1OWMy",
                  "name": "La Pampa",
                  "results": 7
              },
              {
                  "id": "TUxBUFNBTm5lYjU4",
                  "name": "San Juan",
                  "results": 7
              },
              {
                  "id": "TUxBUEZPUmE1OTk5",
                  "name": "Formosa",
                  "results": 4
              },
              {
                  "id": "TUxBUENBVGFiY2Fm",
                  "name": "Catamarca",
                  "results": 3
              },
              {
                  "id": "TUxBUEpVSnk3YmUz",
                  "name": "Jujuy",
                  "results": 3
              },
              {
                  "id": "TUxBUFRJRVoxM2M5YQ",
                  "name": "Tierra del Fuego",
                  "results": 1
              }
          ]
      },
      {
          "id": "product",
          "name": "Producto",
          "type": "text",
          "values": [
              {
                  "id": "MLA6454403",
                  "name": "Sony PlayStation 4 Standard",
                  "results": 598
              },
              {
                  "id": "MLA6454377",
                  "name": "Sony PlayStation 4 Slim Standard",
                  "results": 584
              },
              {
                  "id": "MLA5325935",
                  "name": "Sony PlayStation",
                  "results": 258
              },
              {
                  "id": "MLA23328195",
                  "name": "SONY PLAYSTATION PlayStation CFI-1215A01X HW STANDARD + GOW RYSTATION",
                  "results": 233
              },
              {
                  "id": "MLA10695952",
                  "name": "Sony PlayStation 4 Pro Standard",
                  "results": 204
              },
              {
                  "id": "MLA20793653",
                  "name": "Sony PlayStation 4 Standard Standard",
                  "results": 177
              },
              {
                  "id": "MLA22606150",
                  "name": "Sony PlayStation 4 Slim Call of Duty Modern Warfare II Bundle",
                  "results": 149
              },
              {
                  "id": "MLA20546042",
                  "name": "Sony PlayStation 4 3003348 Standard",
                  "results": 114
              },
              {
                  "id": "MLA23690825",
                  "name": "Sony PlayStation 4",
                  "results": 54
              },
              {
                  "id": "MLA6454338",
                  "name": "Sony PlayStation 4 Call of Duty: Black Ops III",
                  "results": 51
              },
              {
                  "id": "MLA23017805",
                  "name": "Sony Playstation 4 1 TB",
                  "results": 41
              },
              {
                  "id": "MLA15533062",
                  "name": "Sony PlayStation 4 Slim FIFA 17",
                  "results": 30
              },
              {
                  "id": "MLA6454374",
                  "name": "Sony PlayStation 4 Uncharted: The Nathan Drake Collection Bundle",
                  "results": 23
              },
              {
                  "id": "MLA15189575",
                  "name": "Sony PlayStation 4 Slim Call of Duty: Infinite Warfare Bundle",
                  "results": 19
              },
              {
                  "id": "MLA15200270",
                  "name": "Sony PlayStation 4 Uncharted 4 Limited Edition Bundle",
                  "results": 19
              },
              {
                  "id": "MLA20034786",
                  "name": "Sony PlayStation 4 Slim cuh-2215b",
                  "results": 19
              },
              {
                  "id": "MLA15163163",
                  "name": "Sony PlayStation 4 Slim Hits Bundle: God of War/Gran Turismo Sport/Uncharted 4: A Thief's End",
                  "results": 17
              },
              {
                  "id": "MLA15163371",
                  "name": "Sony PlayStation 4 Slim FIFA 18 Bundle",
                  "results": 16
              },
              {
                  "id": "MLA20914561",
                  "name": "Sony PlayStation 4 Slim God of War Ragnarok Bundle",
                  "results": 12
              },
              {
                  "id": "MLA16261614",
                  "name": "Sony PlayStation 4 Slim Mega Pack: Marvel's Spider-Man/Horizon Zero Dawn Complete Edition/Ratchet & Clank",
                  "results": 9
              },
              {
                  "id": "MLA10695953",
                  "name": "Sony PlayStation 4 Pro 1TB Standard  color negro azabache",
                  "results": 7
              },
              {
                  "id": "MLA18084547",
                  "name": "Sony PlayStation 4 Slim Mega Pack: Ghost of Tsushima/God of War/Ratchet & Clank",
                  "results": 7
              },
              {
                  "id": "MLA10813731",
                  "name": "Sony PlayStation 4 Slim 500GB Standard  color negro azabache",
                  "results": 6
              },
              {
                  "id": "MLA16179814",
                  "name": "Sony PlayStation 4 Slim Star Wars: Battlefront ll Bundle",
                  "results": 6
              },
              {
                  "id": "MLA14757730",
                  "name": "Sony PlayStation 4 Slim Hits Bundle: God of War/Horizon Zero Dawn Complete Edition/Shadow of the Colossus",
                  "results": 5
              },
              {
                  "id": "MLA15189601",
                  "name": "Sony PlayStation 4 Slim Marvel's Spider-Man Bundle",
                  "results": 5
              },
              {
                  "id": "MLA15229597",
                  "name": "Sony PlayStation 4 Slim FIFA 20/Extra DualShock 4 Controller",
                  "results": 5
              },
              {
                  "id": "MLA23053782",
                  "name": "Sony PlayStation 4 Slim 1TB Fifa 2019",
                  "results": 5
              },
              {
                  "id": "MLA10813733",
                  "name": "Sony PlayStation 4 Slim 1TB Standard  color negro azabache",
                  "results": 4
              },
              {
                  "id": "MLA15163164",
                  "name": "Sony PlayStation 4 Slim 1TB Hits Bundle: God of War/Gran Turismo Sport/Uncharted 4: A Thief's End  color negro azabache",
                  "results": 4
              },
              {
                  "id": "MLA15163165",
                  "name": "Sony PlayStation 4 Slim Hits Bundle: God of War III: Remastered/Uncharted 4: A Thief's End/Horizon Zero Dawn",
                  "results": 4
              },
              {
                  "id": "MLA15163372",
                  "name": "Sony PlayStation 4 Slim 1TB FIFA 18 Bundle  color negro azabache",
                  "results": 4
              },
              {
                  "id": "MLA15163379",
                  "name": "Sony PlayStation 4 Pro 500 Million Limited Edition",
                  "results": 4
              },
              {
                  "id": "MLA6454372",
                  "name": "Sony PlayStation 4 Ultimate Player Edition",
                  "results": 3
              },
              {
                  "id": "MLA14757731",
                  "name": "Sony PlayStation 4 Slim 1TB Hits Bundle: God of War/Horizon Zero Dawn Complete Edition/Shadow of the Colossus  color negro azabache",
                  "results": 1
              },
              {
                  "id": "MLA15163380",
                  "name": "Sony PlayStation 4 Pro 2TB 500 Million Limited Edition  color azul translúcido",
                  "results": 1
              },
              {
                  "id": "MLA15189602",
                  "name": "Sony PlayStation 4 Slim 1TB Marvel's Spider-Man Bundle  color negro azabache",
                  "results": 1
              },
              {
                  "id": "MLA16261616",
                  "name": "Sony PlayStation 4 Slim 1TB Mega Pack: Marvel's Spider-Man/Horizon Zero Dawn Complete Edition/Ratchet & Clank  color negro azabache",
                  "results": 1
              },
              {
                  "id": "MLA20914562",
                  "name": "Sony PlayStation 4 Slim 1TB God of War Ragnarok Bundle  color negro azabache",
                  "results": 1
              },
              {
                  "id": "MLA23240325",
                  "name": "Sony PlayStation 4 Slim Hits Bundle: God of War",
                  "results": 1
              },
              {
                  "id": "MLA23240332",
                  "name": "Consola Sony Ps4 1tb + Juego God Of War Ragnarok",
                  "results": 1
              },
              {
                  "id": "MLA6304192",
                  "name": "Sony PlayStation 4 Call of Duty: Black Ops III CUH-12",
                  "results": 1
              },
              {
                  "id": "MLA6304193",
                  "name": "Sony PlayStation 4 CUH-12 500GB Call of Duty: Black Ops III  color negro azabache",
                  "results": 1
              },
              {
                  "id": "MLA19782707",
                  "name": "Sony PlayStation 4 Slim FIFA 18",
                  "results": 63
              },
              {
                  "id": "MLA6290734",
                  "name": "Sony PlayStation 4 Slim Uncharted 4: A Thief's End Bundle",
                  "results": 46
              },
              {
                  "id": "MLA6454400",
                  "name": "Sony PlayStation 4 20th Anniversary Edition",
                  "results": 29
              },
              {
                  "id": "MLA19782709",
                  "name": "Consola Sony Playstation 4 Slim Ps4 1tb + 1 Joystick Mexx",
                  "results": 28
              },
              {
                  "id": "MLA6454335",
                  "name": "Sony PlayStation 4 Grand Theft Auto V",
                  "results": 23
              },
              {
                  "id": "MLA13876218",
                  "name": "Sony PlayStation 4 Slim FIFA 19 Bundle",
                  "results": 22
              },
              {
                  "id": "MLA14548546",
                  "name": "Sony PlayStation 4 Slim Days of Play Limited Edition",
                  "results": 19
              }
          ]
      }
  ]
}

const mockResponse_search_empty = {
  "site_id": "MLA",
  "country_default_time_zone": "GMT-03:00",
  "query": "vvvvfve456fgbhdfgndfhm54sdfbsfbasd",
  "paging": {
      "total": 0,
      "primary_results": 0,
      "offset": 0,
      "limit": 4
  },
  "results": [],
  "sort": {
      "id": "relevance",
      "name": "Más relevantes"
  },
  "available_sorts": [
      {
          "id": "price_asc",
          "name": "Menor precio"
      },
      {
          "id": "price_desc",
          "name": "Mayor precio"
      }
  ],
  "filters": [],
  "available_filters": []
}

// describe("fist test ",() => {
//     test('test node', async () =>{    
//         const result = await request(app)
//         .get('/test')
//         // .expect(200)
        
//         // expect(result.status).toEqual(200)
//         // const resp = await request(app).get("/test").send()
//         // console.log(resp);
//         expect(result.status).toEqual(200)

//     })
// })

jest.mock('axios');

describe("secod test ",() => {
  test('seconf node', async () =>{    
      const res = mockResponse_item
      axios.get.mockResolvedValue(res)
      const resp = await request(app)
        .get("/test").send()
      console.log(resp)

  })
})

