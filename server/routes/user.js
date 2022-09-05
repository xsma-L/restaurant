const express = require('express');
const router = express.Router();
const user = require ('../services/user');

/* GET all users */
router.get('/', async function(req, res) {
    try {
        res.json(await user.getAll(req.query))
    } catch(err) {
        console.error(`Error while getting users`, err.message);
    }
});

/* GET one user */
router.get('/:id', async function(req, res) {
    try {
        res.json(await user.getOne(req.query))
    } catch(err) {
        console.error(`Error while getting user`, err.message);
    }
});

/* POST user */
router.post('/', async function(req, res) {
    console.log('ouo')
    try {
        res.json(await user.create(req.body));
    } catch(err) {
        console.error(`Errow while creating user`, err.message);
    }
});

/* UPDATE user */
router.put('/:id', async function(req, res) {
    try {
        res.json(await user.update(req.params.id, req.body));
    } catch(err) {
        console.error(`Error while updating user`, err.message);
    }
});

/* DELETE user */
router.delete(('/:id', async function(res, res) {
    try {
        res.josn(await user.remove(req.params.id));
    } catch (err) {
        console.error('Error while deleting user', err.message);
    }
}));

module.exports = router;