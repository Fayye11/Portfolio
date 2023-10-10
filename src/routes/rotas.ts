import { Router, Request, Response} from 'express'
import * as PageControllers from '../controllers/homeController'
const router = Router()

router.get('/', PageControllers.home)


export default router;