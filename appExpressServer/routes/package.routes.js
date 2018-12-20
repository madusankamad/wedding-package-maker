import {Router} from 'express';
import {allPackages,calculatePackagePrice} from '../controller/package.controller';

Router.get('/all',allPackages);
Router.post('/price',calculatePackagePrice);



export default Router


