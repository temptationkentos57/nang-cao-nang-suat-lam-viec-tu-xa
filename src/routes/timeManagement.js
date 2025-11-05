import express from 'express';
const router = express.Router();

// Đường dẫn quản lý thời gian
router.get('/', (req, res) => {
    res.send('Quản lý thời gian');
});

export default router;