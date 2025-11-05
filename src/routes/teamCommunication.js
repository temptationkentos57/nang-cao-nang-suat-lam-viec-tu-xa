import express from 'express';
const router = express.Router();

// Đường dẫn giao tiếp nhóm
router.get('/', (req, res) => {
    res.send('Giao tiếp nhóm');
});

export default router;