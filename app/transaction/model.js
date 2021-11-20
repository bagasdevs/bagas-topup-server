const mongoose = require('mongoose')

let transactionSchema = mongoose.Schema({
    historyVoucherTopup :{
        gameName : { type : String, require: [true, 'Nama Game Harus Diisi'] },
        category : { type : String, require: [true, 'Kategori Harus Diisi'] },
        thumbnail : { type : String },
        coinName : { type : String, require: [true, 'Nama Coin Harus Diisi'] },
        coinQuantity : { type : String, require: [true, 'Jumlah Coin Harus Diisi'] },
        price : { type : Number }
    },

    historyPayment : {
        name : { type : String, require: [true, 'Nama Harus Diisi'] },
        type : { type : String, require: [true, 'Tipe Pembayaran Harus Diisi'] },
        bankName : { type : String, require: [true, 'Nama Bank Harus Diisi'] },
        noRekening : { type : String, require: [true, 'Nomor Rekening Harus Diisi'] }
    },

    name : {
        type : String,
        require :[true, "Nama Harus Diisi"],
        maxlength :[255,"Panjang Nama Harus 3 - 225 Karakter"],
        minlength :[3,"Panjang Nama Harus 3 - 225 Karakter"]
    },

    accountUser : {
        type : String,
        require :[true, "Nama Akun Harus Diisi"],
        maxlength :[255,"Panjang Nama Harus 3 - 225 Karakter"],
        minlength :[3,"Panjang Nama Harus 3 - 225 Karakter"]
    },

    tax :{
        type : Number,
        default: 0
    },

    value :{
        type : Number,
        default: 0
    },

    status : {
        type: String,
        enum : ['Pending', 'Success', 'Failed'],
        default : 'Pending'
    },

    player : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },

    historyUser : {
        name : { type : String, require: [true, 'Nama Player Harus Diisi'] },
        phoneNumber : {
            type : Number, 
            require :[true, "Nama Akun Harus Diisi"],
            maxlength :[13,"Panjang Nama Harus 9 - 13 Karakter"],
            minlength :[9,"Panjang Nama Harus 9 - 13 Karakter"]
         }

    },

    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },


}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)