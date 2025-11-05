import express from 'express';
const router = express.Router();

// Đường dẫn chia sẻ tài liệu
router.get('/', (req, res) => {
    res.send('Chia sẻ tài liệu');
});

export default router;