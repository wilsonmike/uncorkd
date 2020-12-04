"use strict";
const express = require("express");
const bourbon = express.Router();
const pool = require("./connection");

questions.get("/bourbon", (req, res) => {
  let query = `SELECT * FROM bourbon ORDER BY RANDOM() LIMIT 10`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

module.exports = bourbon;
