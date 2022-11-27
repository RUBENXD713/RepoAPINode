const { response, request } = require("express");

const getUser = (req = request, res = response) => {
  //utilizar parametros por query params   ?hola=nombre&edad=19

  const { hola, hello = "null", tql } = req.query;

  res.json({
    msg: "get API - controller",
    query: {
      hola: hola,
      hello: hello,
      tql: tql,
    },
  });
};

const postUser = (req = request, res = response) => {
  //utilizamos los parametros solicitados en formato JSON
  const { nombre, edad } = req.body;

  res.json({
    body: {
      nombre: nombre,
      edad: edad,
    },
    msg: "post API - controller",
  });
};

const putUser = (req = request, res = response) => {
  //desestructurando un parametro de la URL en formato STRING
  const id = req.params.id;

  res.json({
    msg: "put API - controller",
    id: id,
  });
};

const deleteUser = (req = request, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
