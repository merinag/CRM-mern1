import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    expiredDate: {
      type: Date,
      required: true,

    },
  },
  { timestamps: true }
);

const Jobs = mongoose.model('Jobs', postSchema);

export default Jobs;
