import Jobs from '../models/jobs.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  console.log(req)
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a Jobs'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newJobs = new Jobs({
    ...req.body,
    userId: req.user.id,
  });
  try {
    const savedJobs = await newJobs.save();
    res.status(201).json(savedJobs);
  } catch (error) {
    next(error);
  }
};

export const getJobss = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const Jobss = await Jobs.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),

      ...(req.query.JobsId && { _id: req.query.JobsId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalJobss = await Jobs.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthJobss = await Jobs.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      Jobss,
      totalJobss,
      lastMonthJobss,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJobs = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this Jobs'));
  }
  try {
    await Jobs.findByIdAndDelete(req.params.JobsId);
    res.status(200).json('The Jobs has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updateJobs = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this Jobs'));
  }
  try {
    const updatedJob = await Jobs.findByIdAndUpdate(
      req.params.JobId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,

        },
      },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    next(error);
  }
};


