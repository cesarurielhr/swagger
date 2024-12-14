'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.productsGET = function productsGET (req, res, next) {
  Default.productsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsIdDELETE = function productsIdDELETE (req, res, next, id) {
  Default.productsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsIdGET = function productsIdGET (req, res, next, id) {
  Default.productsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsIdPUT = function productsIdPUT (req, res, next, body, id) {
  Default.productsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsPOST = function productsPOST (req, res, next, body) {
  Default.productsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartAddItemCartIdPOST = function shoppingCartAddItemCartIdPOST (req, res, next, body, cartId) {
  Default.shoppingCartAddItemCartIdPOST(body, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartByIdCartIdGET = function shoppingCartByIdCartIdGET (req, res, next, cartId) {
  Default.shoppingCartByIdCartIdGET(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartByUserUserIdGET = function shoppingCartByUserUserIdGET (req, res, next, userId) {
  Default.shoppingCartByUserUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartCloseCartIdPOST = function shoppingCartCloseCartIdPOST (req, res, next, cartId) {
  Default.shoppingCartCloseCartIdPOST(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartCreatePOST = function shoppingCartCreatePOST (req, res, next) {
  Default.shoppingCartCreatePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartRemoveItemCartIdPOST = function shoppingCartRemoveItemCartIdPOST (req, res, next, body, cartId) {
  Default.shoppingCartRemoveItemCartIdPOST(body, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shoppingCartUpdateItemCartIdPOST = function shoppingCartUpdateItemCartIdPOST (req, res, next, body, cartId) {
  Default.shoppingCartUpdateItemCartIdPOST(body, cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersFacturapiFacturapiIdDELETE = function usersFacturapiFacturapiIdDELETE (req, res, next, facturapiId) {
  Default.usersFacturapiFacturapiIdDELETE(facturapiId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  Default.usersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdGET = function usersIdGET (req, res, next, id) {
  Default.usersIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next, body) {
  Default.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
