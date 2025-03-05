const mongoose = require("mongoose");

const MoneyDonationSchema = new mongoose.Schema({
    First_Name: {
        type: String,
        required: true,
    },
    Last_Name: {
        type: String,
        required: true,
    },

    Mobile_Number: {
        type: Number,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
})

const MoneyDonation = new mongoose.model("MoneyDonation", MoneyDonationSchema);

module.exports = MoneyDonation;