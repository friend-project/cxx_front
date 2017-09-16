import Router from 'koa-router';
import Cxx from './../controllers/Cxx';

const router = new Router({
    prefix: '/api'
});

router.get('/muralList', Cxx.muralList);
router.get('/exhibitionList', Cxx.exhibitionList);
router.get('/exhibitionDetail/:id', Cxx.exhibitionDetail);
export default router;

