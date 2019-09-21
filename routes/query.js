import * as query from '../controllers/query';
import express from 'express';
const router = express.Router();

router.get('/', query.search);

export default router;
