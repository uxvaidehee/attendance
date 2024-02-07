const asyncHandler = require("express-async-handler")
const Batch = require("../models/Batch")
const Student = require("../models/Student")
const Attendance = require("../models/Attendance")


exports.getBatch = asyncHandler(async (req, res) => {
    const result = await Batch.find()
    res.status(200).json({ message: "batch fetch success", result })

})
exports.addBatch = asyncHandler(async (req, res) => {
    await Batch.create(req.body)
    res.status(201).json({ message: "batch add success" })

})
exports.updateBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndUpdate(batchId, req.body, { runValidators: true })
    res.status(200).json({ message: "batch update success" })

})
exports.deleteBatch = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndDelete(batchId)
    res.status(200).json({ message: "batch delete success" })

})


//

exports.getStudent = asyncHandler(async (req, res) => {
    const { batchId } = req.params
    const result = await Student.find()
    res.status(200).json({ message: "student fetch success", result })

})
exports.getStudentByBatch = asyncHandler(async (req, res) => {
    const result = await Student.find()
    res.status(200).json({ message: "student fetch success", result })

})
exports.addStudent = asyncHandler(async (req, res) => {
    await Student.create(req.body)
    res.status(201).json({ message: "student add success" })

})
exports.updateStudent = asyncHandler(async (req, res) => {
    const { studnetId } = req.params
    await Student.findByIdAndUpdate(studnetId, req.body, { runValidators: true })
    res.status(200).json({ message: "student update success" })

})
exports.deleteStudent = asyncHandler(async (req, res) => {
    const { studnetId } = req.params
    await Student.findByIdAndDelete(studnetId)
    res.status(200).json({ message: "student delete success" })

})

//

exports.getAttendance = asyncHandler(async (req, res) => {
    const { studId } = req.params
    const result = await Attendance.find({ studId })
    res.status(200).json({ message: "attendance fetch success", result })

})
exports.addAttendance = asyncHandler(async (req, res) => {
    const x = req.body.map(item => {
        return { studId: item.studId, date: item.date, isPresent: item.isPresent }
    })
    const result = await Attendance.findOne({ studId: x[0].studId, data: x[0].date })
    if (result) {
        return res.status(400).json({ message: "Duplicate attendance " })
    }
    await Attendance.create(x)
    res.status(201).json({ message: "attendance add success" })

})
exports.updateAttendance = asyncHandler(async (req, res) => {
    const { attendanceId } = req.params
    await Attendance.findByIdAndUpdate(attendanceId, req.body, { runValidators: true })
    res.status(200).json({ message: "attendance update success" })

})
exports.deleteAttendance = asyncHandler(async (req, res) => {
    // const { attendanceId } = req.params

    await Attendance.deleteMany()
    res.status(200).json({ message: "attendance delete success" })

})