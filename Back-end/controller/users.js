const express = require('express');
const connection = require('./config/database');
const insert = require('./Repository/insert');
const select = require('./Repository/select')
const selectWhere = require('./Repository/selectWhere')
const deleteWhere = require('./Repository/deleteWhere')
const updateWhere = require('./Repository/updateWhere')
require("dotenv").config();
const jwt = require('jsonwebtoken')


exports.getUser = async(req, res) => {
    try {
        const { username, password } = req.body
        connection.query(selectWhere('user', `*`, `username = '${username}' and password = '${password}'`), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
}


exports.checkUser = async(req, res) => {
    try {
        connection.query(selectWhere('utilisateur', `*`, `username = '${payload.clientName}' and password = '${payload.pass}'`), (err, results) => {
            if (err) throw err

            if (results[0]) res.json({ exist: true, role: results[0].role, username: results[0].username, imagePath: results[0].imagePath })
            else res.status(400).json({ exist: false, role: null })
        })
    } catch {
        res.status(200).json({ exist: false, role: null, username: null, imagePath: null })
    }
}