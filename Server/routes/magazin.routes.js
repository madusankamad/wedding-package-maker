import express from 'express';
import {magazineSizes,magazinePriceById,magazinePaperTypes,magazinePaperPrice} from '../controller/magazine.controller';

const magazineRoutes = express.Router();

magazineRoutes.get('/',(req,res)=>{res.json({message: 'Magazine..OK'})});
magazineRoutes.get('/sizes',magazineSizes);
magazineRoutes.get('/:magazineId/price',magazinePriceById);
magazineRoutes.get('/papers',magazinePaperTypes);
magazineRoutes.get('/paper/:paperId/:paperSize/price',magazinePaperPrice);

export default magazineRoutes;


