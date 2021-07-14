let config = require("../config.json");

let getProductList = (obj) => {
    return new Promise((resolve, reject) => {
        fetch(config.production.api + "/products/getProductsByCategory", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify({
                website: obj.website,
                category: obj.category,
                subCategory: obj.subCategory,
                page: obj.pageNo,
                sort: obj.sort,
            }),
        })
            .then((results) => results.json())
            .then((data) => {
                resolve(data.Product);
            })
            .catch((e) => {
                reject(e);
            });
    });
};

module.exports = {
    getProductList
}