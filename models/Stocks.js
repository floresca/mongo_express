const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StocksSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    management: {
        owner: String,
        ceo: String,
        cfo: String,
        board: [String]
    },
    price: {
        type: Number
    },
    dateChecked: {
        type: Date,
        default: Date.now
    },
    valuation: {
        type: Number,
        date: {
            type: Date,
            default: Date.now
        }
    },
    usersPreviousAddress: {
        type: String
    },
    priceChange: {
        lastFiveDays: {
            type: [Number]
        },
        lastFiveWeeks: {
            type: [Number]
        },
        lastFourQuarters: {
            type: [Number]
        },
        lastFiveYears: {
            type: [Number]
        }
    },
    largePriceFluctuation: {
        type: [{
            type: Date, 
            change: Number
        }]
    },
    mayorShareHolder: {
        type: String
    },
    dividendPayout: {
        dateOfNextPayment: Date,
        lastPayment: [{
            type: Date, 
            amountPerStockOwned: Number
        }]
    },
    headlines: {
        previousWeek: [{
            date: Date,
            sources: [{
                title: String, 
                url: String
            }]
        }],
        previousMonth: [{
            date: Date,
            sources: [{
                title: String, 
                url: String
            }]
        }]
    },
    otherCompanies: {
        subsidiaries: [String],
        parent: String
    }
})

module.exports = Stocks = mongoose.model("stocks", StocksSchema);