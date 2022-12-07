const selectWhere = require('./Repository/selectWhere')
const select = require('./Repository/select')
const connection = require('./config/database');
const insert = require('./Repository/insert');
const deleteWhere = require('./Repository/deleteWhere')
const updateWhere = require('./Repository/updateWhere')


exports.addRegion = async(req, res) => {
    try {
        const { region_name } = req.body
            // Creating queries
        connection.query(insert(`region`, `(region_name)`, `(?)`), [region_name], (err) => {
            if (err) throw err;
            res.json({ Result: "Success" })
        })
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getRegions = async(req, res) => {
    try {
        connection.query(select('region', '*'), (err, results) => {
            if (err) throw err
            if (!results[0]) {
                res.json({ message: " Categories list is empty" })
            } else {
                res.json({ results })
            }
        })
    } catch (err) {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.deleteRegion = async(req, res) => {
    try {
        const { regionID } = req.params
        connection.query((`delete from region where regionid=${regionID}`), (err, results) => {
            if (err) throw err
            res.json({ Output: results })
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
}

exports.updateRegion = async(req, res) => {
    try {
        const { region_name, regionid } = req.body
        connection.query(updateWhere('region', `region_name = '${region_name}'`, `regionid = ${regionid}`), (err) => {
            if (err) throw err
            res.json(`Region with ID: ${regionid} updated successfully`)
        });
    } catch {
        res.status(400).json({ message: "Error Occured" })
    }
};

exports.getRegion = async(req, res) => {
    try {
        const { regionID } = req.params

        connection.query(selectWhere('region', '*', `regionid = ${regionID}`), (err, results) => {
            if (err) throw err

            res.json(results[0])
        })
    } catch (err) {
        res.status(400)
    }
}