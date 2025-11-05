import express from 'express';
const router = express.Router();

// Đường dẫn theo dõi tiến độ
router.get('/', (req, res) => {
    res.send('Theo dõi tiến độ công việc');
});

export default router;