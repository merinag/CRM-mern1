import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    appointmentDate:{
        type:Date,
        required:true,
    },
    userId: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
