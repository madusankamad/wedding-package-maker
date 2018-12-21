import express from 'express';
import {allPackages,calculatePackagePrice} from '../controller/package.controller';

const packageRoutes = express.Router();
packageRoutes.get('/all',allPackages);
packageRoutes.post('/price',calculatePackagePrice);



export default packageRoutes


