import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ============ handle availiblity
  const handleAvailability = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  // =============== booking func
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <div style={styles.container}>
        <h3 style={styles.heading}>Booking Page</h3>
        <div className="container m-2" style={styles.contentContainer}>
          {doctors && (
            <div style={styles.doctorInfoContainer}>
              <h4 style={styles.doctorName}>
                Dr.{doctors.firstName} {doctors.lastName}
              </h4>
              <h4 style={styles.fees}>Fees : {doctors.consaltationfees}</h4>
              <h4 style={styles.timings}>
                Timings : {doctors.timings && doctors.timings[0]} -{" "}
                {doctors.timings && doctors.timings[1]}{" "}
              </h4>
              <div className="d-flex flex-column w-50">
                <DatePicker
                  aria-required={"true"}
                  className="m-2"
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                  }}
                  style={styles.datePicker}
                />
                <TimePicker
                  aria-required={"true"}
                  format="HH:mm"
                  className="mt-3"
                  onChange={(value) => {
                    setTime(moment(value).format("HH:mm"));
                  }}
                  style={styles.timePicker}
                />

                <button
                  className="btn btn-primary mt-2"
                  onClick={handleAvailability}
                  style={styles.checkAvailabilityButton}
                >
                  Check Availability
                </button>

                <button
                  className="btn btn-dark mt-2"
                  onClick={handleBooking}
                  style={styles.bookNowButton}
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  contentContainer: {
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  doctorInfoContainer: {
    padding: "20px",
  },
  doctorName: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "10px",
  },
  fees: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "10px",
  },
  timings: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "20px",
  },
  datePicker: {
    width: "100%",
    marginBottom: "10px",
  },
  timePicker: {
    width: "100%",
    marginBottom: "10px",
  },
  checkAvailabilityButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  bookNowButton: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default BookingPage;
