
const axios = require('axios')

const getItem = async (url) => {
    console.log('getItem : ',url);
    const res = await axios.get(url)
    return res.data;
}

const getDescription = async (url) => {
    console.log('getDescription : ',url);
    const res = await axios.get(url)
    return res.data;
}

const getItems = async (url) =>{
    const res = await axios.get(url)
    return res.data.results;
}

const getCategory = async (items) =>{

    var tempCategoryArray = []
    promises = [];

    items.forEach( 
        (function (item) {
            const myUrl = 'https://api.mercadolibre.com/categories/'+item.category_id;
            promises.push(axios.get(myUrl));
        })
    );

    await Promise.all(promises).then(function (results) {
        results.forEach(function (response) {
            tempCategoryArray.push(response.data.name)
        });
    })

    return tempCategoryArray
}

module.exports = {
    getItem,
    getDescription,
    getItems,
    getCategory
}