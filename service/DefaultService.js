'use strict';


/**
 * Obtener todos los productos
 * Devuelve una lista de todos los productos disponibles.
 *
 * returns List
 **/
exports.productsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 0.8008282,
  "name" : "name",
  "description" : "description",
  "id" : "id"
}, {
  "price" : 0.8008282,
  "name" : "name",
  "description" : "description",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar un producto
 * Elimina un producto de la base de datos según su ID.
 *
 * id String El ID del producto.
 * no response value expected for this operation
 **/
exports.productsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener un producto por ID
 * Devuelve un único producto basado en su ID.
 *
 * id String El ID del producto.
 * returns inline_response_200_1
 **/
exports.productsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 0.8008282,
  "name" : "name",
  "description" : "description",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un producto
 * Actualiza un producto en la base de datos según el ID proporcionado.
 *
 * body Products_id_body Datos actualizados del producto. (optional)
 * id String El ID del producto.
 * returns inline_response_200_1
 **/
exports.productsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 0.8008282,
  "name" : "name",
  "description" : "description",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear un nuevo producto
 * Crea un nuevo producto y lo almacena en la base de datos.
 *
 * body Products_body Datos del nuevo producto. (optional)
 * returns inline_response_200_1
 **/
exports.productsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 0.8008282,
  "name" : "name",
  "description" : "description",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Agregar un producto al carrito de compras
 * Añade un producto al carrito de compras especificado.
 *
 * body AddItem_cartId_body Detalles del producto a agregar. (optional)
 * cartId String El ID del carrito de compras.
 * no response value expected for this operation
 **/
exports.shoppingCartAddItemCartIdPOST = function(body,cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener un carrito de compras por ID
 * Devuelve el carrito de compras basado en su ID.
 *
 * cartId String El ID del carrito de compras.
 * returns inline_response_200_2
 **/
exports.shoppingCartByIdCartIdGET = function(cartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cartId" : "cartId",
  "items" : [ {
    "quantity" : 0,
    "productId" : "productId"
  }, {
    "quantity" : 0,
    "productId" : "productId"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener el carrito de compras de un usuario
 * Devuelve el carrito de compras asociado al ID de usuario proporcionado.
 *
 * userId String El ID del usuario.
 * returns inline_response_200_2
 **/
exports.shoppingCartByUserUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cartId" : "cartId",
  "items" : [ {
    "quantity" : 0,
    "productId" : "productId"
  }, {
    "quantity" : 0,
    "productId" : "productId"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cerrar el carrito de compras
 * Finaliza el carrito de compras y genera la factura.
 *
 * cartId String El ID del carrito de compras.
 * no response value expected for this operation
 **/
exports.shoppingCartCloseCartIdPOST = function(cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Crear un nuevo carrito de compras
 * Crea un nuevo carrito de compras para el usuario.
 *
 * returns inline_response_201
 **/
exports.shoppingCartCreatePOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cartId" : "cartId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar un producto del carrito de compras
 * Elimina un producto del carrito de compras especificado.
 *
 * body RemoveItem_cartId_body Detalles del producto a eliminar. (optional)
 * cartId String El ID del carrito de compras.
 * no response value expected for this operation
 **/
exports.shoppingCartRemoveItemCartIdPOST = function(body,cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar la cantidad de un producto en el carrito
 * Actualiza la cantidad de un producto en el carrito de compras especificado.
 *
 * body UpdateItem_cartId_body Nueva cantidad del producto en el carrito. (optional)
 * cartId String El ID del carrito de compras.
 * no response value expected for this operation
 **/
exports.shoppingCartUpdateItemCartIdPOST = function(body,cartId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Eliminar un usuario de MongoDB y Facturapi
 * Elimina un usuario de la base de datos MongoDB y de Facturapi.
 *
 * facturapiId String El ID del usuario en Facturapi.
 * no response value expected for this operation
 **/
exports.usersFacturapiFacturapiIdDELETE = function(facturapiId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener todos los usuarios
 * Devuelve una lista de todos los usuarios.
 *
 * returns List
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : "id",
  "email" : "email"
}, {
  "name" : "name",
  "id" : "id",
  "email" : "email"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener un usuario por ID
 * Devuelve un único usuario basado en su ID.
 *
 * id String El ID del usuario.
 * returns inline_response_200
 **/
exports.usersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear un nuevo usuario
 * Crea un usuario en la base de datos y también en Facturapi.
 *
 * body Users_body Datos del nuevo usuario. (optional)
 * returns inline_response_200
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

