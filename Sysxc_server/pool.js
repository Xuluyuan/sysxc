const mysql=require('mysql')
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:"",
  database:'sysxc',//后期需要变化
  connectionLimit:10
})

module.exports=pool