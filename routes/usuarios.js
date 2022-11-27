const { Router } = require("express");

const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/usuariosController");

const router = Router();

router.get("/", getUser);

router.put("/:id", putUser);

router.post("/", postUser);

router.delete("/", deleteUser);

module.exports = router;
