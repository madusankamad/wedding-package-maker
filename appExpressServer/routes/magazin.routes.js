import {Router} from 'express';
import {magazineSizes,magazinePriceById,magazinePaperTypes,magazinePaperPrice} from '../controller/magazine.controller';

Router.get('/sizes',magazineSizes);
Router.get('/:magazineId/price',magazinePriceById);
Router.get('/papers',magazinePaperTypes);
Router.get('/paper/:paperId/:paperSize/price',magazinePaperPrice);

export default Router


