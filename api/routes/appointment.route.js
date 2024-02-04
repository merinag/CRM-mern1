import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
    getAppointments,
    getUserAppointement,
    createAppointment

} from '../controllers/appointment.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createAppointment);
router.get('/getUserAppointement/:userId', getUserAppointement);
// router.put('/editComment/:commentId', verifyToken, editComment);
// router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getAppointments', verifyToken, getAppointments);

export default router;
