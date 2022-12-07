const express = require('express');
const connection = require('./config/database');
const bodyParser = require('body-parser'); // middleware
const selectWhere = require('./Repository/selectWhere')
require("dotenv").config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const select = require('./Repository/select');
express().use(bodyParser.urlencoded({ extended: false }));

exports.login = async(req, res) => {
    try {
        const { username, password } = req.body

        connection.query(selectWhere('utilisateur', '*', `username = '${username}' and password = '${password}'`), (err, results) => {
            if (err) throw err
            if (!results[0]) {
                res.json({ message: "Account not found" })
            } else {
                userID = results[0].userID
                clientName = results[0].username
                pass = results[0].password
                role = results[0].role
                    // encryptedPassword = results[0].password

                const token = jwt.sign({ userID, clientName, pass, role }, "jababababaja");
                var payload = jwt.decode(token)

                res.status(202).json({ message: "Account LoggedIn Successfully", token: token })
            }
        })
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
}