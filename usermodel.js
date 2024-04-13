const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String

    },
    age:{
        type: Number,
        min: 0,
        max: 150
    },

    email: {
        type: String
    },
    password: {
        type: String
    } 
},
{
    timestamps: true, 
    versionKey: false
});


const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;
