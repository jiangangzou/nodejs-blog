const getList = (author,keyword) => {
    // 先返回数据(格式是正确的)
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1558148862939,
            author: 'A'
        },{
            id: 1,
            title: '标题B',
            content: '内容B',
            createTime: 1558148938757,
            author: 'B'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1558148862939,
        author: 'A'
    }
}

const newBlog = (blogData = {}) => {
    return {
        id: 3 //表示新建id，插入到数据表里面的id
    }
}

const updateBlog = (id,blogData = {}) => {
    // id 就是更新博客的id
    // blogData 是一个博客对象，包含title content 属性
    console.log('update blog',id,blogData)

    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}