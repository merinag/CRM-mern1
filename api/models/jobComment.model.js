import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    }, 
   
 
  },
  { timestamps: true }
);

const JobComment = mongoose.model('JobComment', commentSchema);

export default JobComment;
