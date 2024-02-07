const mongoose = require("mongoose")
// const cors = require("cors")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    batchId: {
        type: mongoose.Types.ObjectId,
        ref: "btach",              //foreign key
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("student", studentSchema)