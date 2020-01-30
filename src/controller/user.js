const { exec, excape } = require('../db/mysql')

const login = (username, password) => {
    username = excape(username)
    password = excape(password)
    const sql =    `
        select username, realname from users where username=${username} and password=${password}
    `
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    login
}