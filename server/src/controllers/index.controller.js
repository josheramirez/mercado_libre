const axios = require('axios');

const controller = {}

let baseUrlSearch = "https://api.mercadolibre.com/sites/MLA/"
let baseUrlItem = "https://api.mercadolibre.com/items/"


controller.item = (req, res)=>{
    console.log("recive : ",req.params.id);

    axios.get(baseUrlItem+"/"+req.params.id)
    .then((response)=>{
        console.log(response);
        var description = null
        promises = [];

        // response.data.results.forEach( 
        //     (function (item) {
        //         const myUrl = 'https://api.mercadolibre.com/categories/'+item.category_id;
        //         promises.push(axios.get(myUrl));
        //     })
        // );

            promises.push(axios.get(baseUrlItem+"/"+req.params.id+"/description"));

            Promise.all(promises).then(function (results) {
            results.forEach(function (res) {
                description = res.data
            });
            console.log("description : ",description);

            }).then(()=>{

                let tempResult = []

                console.log("description : ",response.data);
                // create structure for each item result
                // response.data.results.forEach((item)=>{
                //     tempResult.push({
                    let tempItem=
                {        "id": response.data.id,
                        "title": response.data.title,
                        "price": {
                            "currency": response.data.currency_id,
                            "amount": response.data.available_quantity,
                            "decimals": response.data.price
                        },
                        "picture": response.data.thumbnail,
                        "condition": response.data.condition,
                        "free_shipping": response.data.shipping.free_shipping,
                        "sold_quantity": response.data.sold_quantity,
                        "description": description}
                //     })
                // })
                res.json({
                    author:req.author,
                    // categories:Array.from(new Set(tempCategoryArray)),
                    item: tempItem
                })
            })
        
        ;

    })
    .catch((error)=>{res.send(error)})
}
controller.index = (req, res)=>{
        console.log("search : ",req.query.search);
        axios.get(baseUrlSearch+"/search?q="+req.query.search+"&limit=4")
        .then((response)=>{
            var tempCategoryArray = []
            promises = [];

            response.data.results.forEach( 
                (function (item) {
                    const myUrl = 'https://api.mercadolibre.com/categories/'+item.category_id;
                    promises.push(axios.get(myUrl));
                })
            );

            Promise.all(promises).then(function (results) {
                results.forEach(function (response) {
                    tempCategoryArray.push(response.data.name)
                });

            }).then(()=>{

                let tempResult = []
                // create structure for each item result
                response.data.results.forEach((item)=>{
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
                res.json({
                    author:req.author,
                    categories:Array.from(new Set(tempCategoryArray)),
                    items: tempResult
                })
            })
            
            ;

        })
        .catch((error)=>{res.send(error)})
}


module.exports = controller