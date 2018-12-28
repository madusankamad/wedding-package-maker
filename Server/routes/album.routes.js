import express from 'express';
import {getAlbumPricingInfo,magazineSizes,magazinePriceById,magazinePaperTypes,magazinePaperPrice} from '../controller/album.controller';

const albumRoutes = express.Router();

albumRoutes.get('/',(req, res)=>{res.json({message: 'Magazine..OK'})});
albumRoutes.get('/:id/priceInfo',getAlbumPricingInfo);
albumRoutes.get('/sizes',magazineSizes);
albumRoutes.get('/:magazineId/price',magazinePriceById);
albumRoutes.get('/papers',magazinePaperTypes);
albumRoutes.get('/paper/:paperId/:paperSize/price',magazinePaperPrice);

export default albumRoutes;


