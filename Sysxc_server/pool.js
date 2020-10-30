const mysql=require('mysql')
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:"",
  database:'sysxc',//后期需要变化
  connectionLimit:10
})

// const pool=mysql.createPool({
//   host:'w.rdc.sae.sina.com.cn',
//   port:3306,
//   user:'3k042nljoo',
//   password:"2myxwjk300h3mjh02x0i3j502wll4hkiii1jylm0",
//   database:'app_xlysyc',//后期需要变化
//   connectionLimit:10
// })

module.exports=pool