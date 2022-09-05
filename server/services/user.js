const db = require('./db');
const bcrypt = require('bcrypt');
// const config = require('../config');


async function getAll() {
    const rows = await db.query(
        `SELECT * FROM user`
    );

    return { rows }
}

async function getOne(id) {
    const row = await db.query(
        `SELECT * FROM user WHERE id=${id}`
    );

    return { row }
}

async function create(userInfos) {
    let message = 'done';

    const hasing = await bcrypt.hash(userInfos.password, 10, (err, hash) => {
        return(hash)
    });

    // const result = await db.query(
    //     `INSERT INTO user
    //     (username, password, role)
    //     VALUES 
    //     ('${userInfos.username}','${userInfos.password}','${userInfos.role}')`
    // );

    // let message = 'Error in creation of user';

    // if(result.affectedRows) {
    //     message = 'User created successfully';
    // }

    return { hasing }
}

async function update(id, userInfos){
    const result = await db.query(
        `UPDATE user
        SET username='${userInfos.username}',password=${userInfos.password},role=${userInfos.role}
        WHERE id=${id}`
    );

    let message = 'Error in updating user';

    if(result.affectedRows) {
        message = 'User updated successfully';
    }

    return { message };
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM user WHERE id=${id}`
    );

    let message = 'Error in deleting user';

    if(result.affectedRows) {
        message = 'User deleted successfully';
    }

    return { message }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}