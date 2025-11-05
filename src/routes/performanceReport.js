import express from 'express';
const router = express.Router();

// Đường dẫn báo cáo hiệu suất
router.get('/', (req, res) => {
    res.send('Báo cáo hiệu suất');
});

export default router;