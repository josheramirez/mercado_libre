const axios = require('axios');
const { getItem, getDescription, getItems, getCategory } = require ('../services/service')

const controller = {}

let baseUrlSearch = "https://api.mercadolibre.com/sites/MLA/"
let baseUrlItem = "https://api.mercadolibre.com/items/"


controller.detail = async (req, res)=>{

    console.log("req.params.id : ", req.params);
    // call service to get item
    console.log(baseUrlItem+"/"+req.params.id);
    const item = await getItem(baseUrlItem+"/"+req.params.id)
    
    // call service to get description
    var description = await getDescription(baseUrlItem+"/"+req.params.id+"/description")
    
    // create response json object
    let tempItem={
        "id": item.id,
        "title": item.title,
        "price": {
            "currency": item.currency_id,
            "amount": item.available_quantity,
            "decimals": item.price
        },
        "picture": item.thumbnail,
        "condition": item.condition,
        "free_shipping": item.shipping.free_shipping,
        "sold_quantity": item.sold_quantity,
        "description": description.plain_text
    }

    // server final response
    res.json({
        author:req.author,
        // categories:Array.from(new Set(tempCategoryArray)),
        item: tempItem
    })
}

controller.items = async (req, res) => {

    console.log("req.query : ", req.query);
    // call service to get item
    const items = await getItems(baseUrlSearch+"/search?q="+req.query.search+"&limit=4")

    // call service to get category
    var category = await getCategory(items)

    // create response json object
    let tempResult = []
    items.forEach((item)=>{
        tempResult.push({
            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.currency_id,
                "amount": item.available_quantity,
                "decimals": item.price
            },
            "picture": item.thumbnail,
            "condition": item.condition,
            "free_shipping": item.shipping.free_shipping
        })
    })

    // server final response
    res.json({
        author:req.author,
        categories:Array.from(new Set(category)),
        items: tempResult
    })
}


module.exports = controller