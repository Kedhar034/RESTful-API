const express = require("express");
const {
    handlegetAllUsers,
    handlegetUserbyId,
    handleUpdateUserbyId,
    handledeleteUserbyId,
    handleCreateUserbyId } = require("../controllers/user");

const router = express.Router();


router.route('/api/users')
.get(handlegetAllUsers)
.post(handleCreateUserbyId);

router
    .route('/api/users/:id')
    .get(handlegetUserbyId)
    .patch(handleUpdateUserbyId)
    .delete(handledeleteUserbyId);

module.exports =router;
