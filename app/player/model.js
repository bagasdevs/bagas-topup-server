const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const HASH_ROUND = 10

let playerSchema = mongoose.Schema({
    email : {
        type : String,
        require: [true, 'Email Harus Diisi']
    },
    name : {
        type : String,
        require: [true, 'Nama Harus Diisi'],
        maxlength :[255,"Panjang Nama Harus 3 - 225 Karakter"],
        minlength :[3,"Panjang Nama Harus 3 - 225 Karakter"]
    },
    username : {
        type : String,
        require: [true, 'Nama Harus Diisi'],
        maxlength :[255,"Panjang Username Harus 3 - 225 Karakter"],
        minlength :[3,"Panjang Username Harus 3 - 225 Karakter"]
    },
    password : {
        type : String,
        require: [true, 'Kata Sandi Harus Diisi'],
        maxlength :[255,"Panjang Password Harus 3 - 225 Karakter"],
    },
    role : {
        type: String,
        enum : ['admin', 'user'],
        default : 'user'
    },
    status : {
        type: String,
        enum : ['Y', 'N'],
        default : 'Y'
    },
    avatar : {type : String},
    fileName : {type : String},
    phoneNumber : {
        type : String,
        require: [true, 'Nomor Telepon Harus Diisi'],
        maxlength :[13,"Panjang Nomor Harus 9 - 13 Karakter"],
        minlength :[9,"Panjang Nomor Harus 9 - 13 Karakter"]
    },
    favorite : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

}, { timestamps: true })

playerSchema.path('email').validate(async function (value){
    try {
        const count = await this.model('Player').countDocuments({email : value})
        return !count;
    } catch (err) {
        throw err
    }
}), attr => `${attr.value} Sudah Terdaftar`

playerSchema.pre('save', function (next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next()
})

module.exports = mongoose.model('Player', playerSchema)