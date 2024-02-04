import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteJobs, getJobss, updateJobs } from '../controllers/jobs.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getJobss', getJobss)
router.delete('/deleteJobs/:JobsId/:userId', verifyToken, deleteJobs)
router.put('/updateJobs/:JobsId/:userId', verifyToken, updateJobs)


export default router;