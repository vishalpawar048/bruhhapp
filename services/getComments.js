
let config = require("../config.json");

let postWebsiteComments = (obj) => {
  return new Promise((resolve, reject) => {
    fetch(config.production.api + "/comments/addWebsiteComment", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        website: obj.website,
        userId: obj.userId,
        emailId: obj.emailId,
        comment: obj.comment,
        websiteRating: obj.websiteRating,
        productsQualityRating: obj.productsQualityRating,
        deliveryRating: obj.deliveryRating,
        returnPolicyRating: obj.returnPolicyRating,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data.website);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let postProductComments = (obj) => {
  return new Promise((resolve, reject) => {
    fetch(config.production.api + "/comments/addProductComment", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        productId: obj.productId,
        userId: obj.userId,
        emailId: obj.emailId,
        name: obj.name,
        website: obj.website,
        comment: obj.comment,
        productRating: obj.productRating,
      }),
    })
      .then((results) => results ? results.json() : {})
      .then((data) => {
        resolve(data.website);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let getProductComments = (productId) => {
  return new Promise((resolve, reject) => {
    fetch(config.production.api + "/comments/getProductComments", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let getWebsiteComments = (website) => {
  return new Promise((resolve, reject) => {
    fetch(config.production.api + "/comments/getWebsiteComments", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        website: website,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        if (e) {
        }
        // reject(e);
      });
  });
};

module.exports = {
  postWebsiteComments,
  postProductComments,
  getProductComments,
  getWebsiteComments,
};
