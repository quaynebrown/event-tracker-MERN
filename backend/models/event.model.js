const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    // duration: {
    //     type: Number,
    //     required: true
    // },
    date: {
        type: Date,
        required: true
    },
    flyerImage: {
        type: String,
        required: true
    }
    /*flyerImage: {
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String
        }
    }*/
},
    {
        timestamps: true
    });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;