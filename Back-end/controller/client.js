const selectWhere = require('./Repository/selectWhere')
const select = require('./Repository/select')
const connection = require('./config/database');
const insert = require('./Repository/insert');
const deleteWhere = require('./Repository/deleteWhere')
const updateWhere = require('./Repository/updateWhere')


exports.addClient = async(req, res) => {
    try {
        const { nom_client, date_naissance, email, phone_number, regions_regionid } = req.body
            // Creating queries
        connection.query(insert(`client`, `(nom_client, phone_number, email, date_creation, date_naissance, regions_regionid)`, `(?, ?, ?, ?, ?, ?)`), [nom_client, phone_number, email, (new Date()).toISOString().split('T')[0], date_naissance, regions_regionid], (err) => {
            if (err) throw err;
            res.json({ Result: "Success" })
        })
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getClients = async(req, res) => {
    try {
        connection.query(select('client, region where client.regions_regionid = region.regionid', '*'), (err, results) => {
            if (err) throw err

            if (!results[0]) {
                console.error(results, " client list is empty")
                res.json({ results })
            } else {
                res.json({ results })
            }
        })
    } catch (err) {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.deleteClient = async(req, res) => {
    try {
        const { clientID } = req.params
        connection.query(`delete from client where clientID=${clientID}`), (err, results) => {
            if (err) throw err
            res.json({ Output: `Client with id ${clientID} is deleted successfully` })
        };
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
}

exports.updateClient = async(req, res) => {
    try {
        const { nom_client, date_naissance, email, phone_number, regions_regionid, clientID } = req.body

        connection.query(updateWhere('client', `nom_client = '${nom_client}',date_naissance = '${date_naissance}', email = '${email}', phone_number= ${phone_number}, regions_regionid=${regions_regionid} `, `clientID = ${clientID}`), (err) => {
            if (err) throw err
            res.json(`Client with ID: ${clientID} updated successfully`)
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getClient = async(req, res) => {
    try {
        const { clientID } = req.params

        connection.query(selectWhere('client', `*`, `clientID = ${clientID}`), (err, results) => {
            if (err) throw err

            res.json(results[0])
        })
    } catch (err) {
        res.status(400)
    }
}