const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");
const logger = require('../logger/logger');

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor data fetch success",
      data: doctor,
    });

    // Logging
    logger.info("Doctor data fetched successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Doctor Details",
    });

    // Logging
    logger.info(`Error in getDoctorInfoController: ${error.message}`);
  }
};

const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Doctor Profile Updated",
      data: doctor,
    });

    // Logging
    logger.info("Doctor profile updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Doctor Profile Update issue",
      error,
    });

    // Logging
    logger.info(`Error in updateProfileController: ${error.message}`);
  }
};

const getDoctorByIdController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    res.status(200).send({
      success: true,
      message: "Single Doc Info Fetched",
      data: doctor,
    });

    // Logging
    logger.info("Single doctor info fetched successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single doctor info",
    });

    // Logging
    logger.info(`Error in getDoctorByIdController: ${error.message}`);
  }
};

const doctorAppointmentsController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      doctorId: doctor._id,
    });
    res.status(200).send({
      success: true,
      message: "Doctor Appointments fetch Successfully",
      data: appointments,
    });

    // Logging
    logger.info("Doctor appointments fetched successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Doc Appointments",
    });

    // Logging
    logger.info(`Error in doctorAppointmentsController: ${error.message}`);
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "status-updated",
      message: `Your appointment request has been updated ${status}`,
      onClickPath: "/doctor-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });

    // Logging
    logger.info("Appointment status updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });

    // Logging
    logger.info(`Error in updateStatusController: ${error.message}`);
  }
};

module.exports = {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
};
