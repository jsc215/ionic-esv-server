import express from 'express';
import * as query from '../controllers/query';

const router = express.Router();

router.get('/', query.search);

export default router;
