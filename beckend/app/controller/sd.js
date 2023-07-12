const connection = require('../config/database.js')
module.exports = {

    // fungsi mendapatkan data mahasiswa
    getsd : (req, res) => {
        const qstring = "SELECT * FROM sd"
        connection.query(qstring, (err, data)=>{
            if (err){
                console.log("error", err)
                res.status(500).send({
                    message: err.message || "terjadi kesalahan saat mengambil data"
                })
            } else {
                res.send(data)
            }
        })

    },
    //  fungsi mendapatkan data mahasiswa berdasarkan id
    getSdById : (req, res) => {
        const qstring =`SELECT * FROM sd WHERE id = '${req.params.id}'`
        connection.query(qstring, (err, data)=>{
            if (err) {
                console.log("error", err)
                res.status(500).send({
                    message: err.message || "terjadi kesalahan saat mengambil data"
                })
            } else {
                res.send(data)
            }
        })
    },
    
    // fungsi menambahkan data
    postSd : (req, res) => {
        const data = req.body;
        console.log(req.body)
        connection.query("INSERT INTO sd SET ?", data, (err)=>{
            if (err){
                console.log("erorr", err)
                res.status(500).send({
                    message : err.message || "terjadi kesalahan saat insert data"
                })
            } else{
                res.send(data)
            }
        })
        
    },

    //  fungsi mengubah data
    updateSd : (req, res) => {
        const id = req.params.id;
        const data = req.body
        const qstring = `UPDATE sd SET ? WHERE id = ${id}`;
        connection.query(qstring, data, (err, data)=>{
            if (err) {
                res.status(500).send({
                    message: "Update Error Data" + id,
                })
            } else if (data.affectedRows == 0) {
                res.status(404).send({
                    message: `tidak ditemukan data dengan id ${id}`
                })
            } else {
                console.log("update Data :", {data: id, ...id})
                res.status(200).json({mgs : "Berhasil di update"})            }
        })

    },

    //  fungsi menghapus data
    deleteSd : (req, res) => {
        const id = req.params.id;
        const qstring = `DELETE FROM sd WHERE id = ${id}`
        connection.query(qstring, (err, data)=>{
            if (err) {
                res.status(500).send({
                    message : "erorr pada saat menghapus data dengan id" + id,
                })
            } else if(data.affectedRows == 0){
                res.status(404).send({
                    message: `tidak ditemukan data dengan id ${id}`
                })
            } else {
                res.send(`Data dengan id = ${id} telah dihapus`)
            }
        })
    },



}