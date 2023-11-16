const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_eskul : {
        type : String,
        required: [true, 'Silakan isikan nama eskul'],
        unique: true
    },
    pembimbing_eskul : {
        type : String,
        required: [true, 'Silakan isikan nama pembimbing eskul'],
        unique: true
    },
    lokasi_eskul : {
        type : String,
        required: [true, 'Silakan isikan lokasi eskul'],
        unique: true
    },
    tanggal_pelaksanaan : {
        type : String,
        required: [true, 'Silakan isikan tanggal pelaksanaan eskul'],
        unique: true
    },
    total_murid : {
        type : String,
        required: [true, 'Silakan isikan jumlah total murid'],
        unique: true
    }
    /*email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan email valid!']
    }*/
})

module.exports = mongoose.model('User', UserSchema)