const { login } = require('../controller/user')
const { SuccessModel, ErrorModel} = require('../model/resModule')
const { set } = require('../db/redis')


const handelUserRouter = (req,res) => {
    // console.log(req)
    const method = req.method  //GET POST

    // 登录
    if(method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                //设置 session
                req.session.username = data.username
                req.session.realname = data.realname

                set(req.sessionId, req.session)

                return new SuccessModel()
            }else {
                return new ErrorModel('登录失败')
            }
        })
        
    }
}

module.exports = handelUserRouter;