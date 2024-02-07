const mongoose = require("mongoose")
// const cors = require("cors")

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    studId: {
        type: mongoose.Types.ObjectId,
        ref: "student",              //foreign key
        required: true
    },
    isPresent: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        default: "offline",
        enum: ["offline", "online"]
    },
}, { timestamps: true })

module.exports = mongoose.model("attendance", attendanceSchema)