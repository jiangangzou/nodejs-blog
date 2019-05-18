const { getList,getDetail,newBlog,updateBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModule')

const handleBlogRouter = (req,res) => {
    const method = req.method  //GET POST
    const id = req.query.id
// console.log|(url)

    // 获取博客列表
    // if(method === 'GET' && req.path === '/api/blog/list') {
    //     return {
    //         msg: '这是获取博客列表的接口'
    //     }
    // }
    if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author,keyword)
        return new SuccessModel(listData)
    }

    // 获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail') {
       
        const data = getDetail(id)
        return new SuccessModel(data)
    }

    // 新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 这是更新博客
    if(method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id,req.body)
        if(result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客成功')
        }
    }
}

module.exports = handleBlogRouter