const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.Schema({
    nama: { type: String, require: true },
    tujuan: { type: String, require: true },
    harga: [{ type: String, require: true }]
});

module.exports = mongoose.model("Pariwisata", pariwisataSchema);