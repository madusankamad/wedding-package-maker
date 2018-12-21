import express from 'express';
const {magazineSizes,magazinePriceById,magazinePaperTypes,magazinePaperPrice} = require('../controller/magazine.controller');

const magazineRouter = express.Router();
magazineRouter.get('/sizes',magazineSizes);
magazineRouter.get('/:magazineId/price',magazinePriceById);
magazineRouter.get('/papers',magazinePaperTypes);
magazineRouter.get('/paper/:paperId/:paperSize/price',magazinePaperPrice);

export default magazineRouter


