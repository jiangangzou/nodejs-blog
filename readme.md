mac os 使用brew install nvm  网站；brew.sh

使用nodemon监测文件变化，自动重启node

使用cross-env 设置环境变量，兼容linux，mac windows

4-11

--use myblog;

-- select * from users;

-- select * from users where username like '%zhang%';
-- update users set realname='李四' where username='lisi';
-- SET SQL_SAFE_UPDATES = 0;
-- delete from users where username='lisi'
-- insert into blogs (title,content,createtime,author) values ('标题B','内容B','1579964325680','李四')

-- select * from blogs;

select * from blogs where title like '%标题%' order by createtime desc

---5-3
redis启动
redis-server.exe redis.windows.conf