const env = process.env.NODE_ENV  //环境参数

// 配置
let MYSQL_CONF

if (env === 'dev') {
    // Mysql
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'myblog'
    }

    // redis
    REDIS_CONF = {
        port: 6379,
        host: '192.168.0.106'
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}