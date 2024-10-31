const Pariwisata = require("../model/pariwisata");

const createPariwisata = (req, res) => {
    const pariwisata = new Pariwisata({
        nama: req.body.nama,
        tujuan: req.body.tujuan,
        harga: req.body.harga
    });

    console.log(pariwisata);
    pariwisata.save().then((createdPariwisata) => {
        res.status(201).json({
            message: "Data Berhasil Disimpan",
            pariwisataId: createdPariwisata._id
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Internal Server Erorr",
            error: err
        });
    });
};

module.exports = { createPariwisata }