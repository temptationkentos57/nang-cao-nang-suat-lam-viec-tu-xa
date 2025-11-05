import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng Nâng Cao Năng Suất Làm Việc Từ Xa!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});