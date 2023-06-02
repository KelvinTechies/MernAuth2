import {Router } from 'express'

const router = Router()

router.post('/regiser', (req, res)=>{
    res.status(200).json(req.body)
})



export default router;