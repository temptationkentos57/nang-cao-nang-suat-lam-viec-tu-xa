import express from 'express';
import timeManagementRoutes from './routes/timeManagement.js';
import progressTrackingRoutes from './routes/progressTracking.js';
import teamCommunicationRoutes from './routes/teamCommunication.js';
import documentSharingRoutes from './routes/documentSharing.js';
import performanceReportRoutes from './routes/performanceReport.js';

const app = express();

app.use('/time-management', timeManagementRoutes);
app.use('/progress-tracking', progressTrackingRoutes);
app.use('/team-communication', teamCommunicationRoutes);
app.use('/document-sharing', documentSharingRoutes);
app.use('/performance-report', performanceReportRoutes);

export default app;