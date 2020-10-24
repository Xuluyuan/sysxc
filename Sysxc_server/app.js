const express=require('express');
const pool=require('./pool.js')
const bodyParser=require('body-parser');
const cors=require('cors')
const md5=require('md5');
const app=express();
app.listen(8888,()=>{
  console.log('server is running')
});
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}))

//用户注册的接口
app.post('/reg',(req,res)=>{
  let username=req.body.username;
  let password=req.body.password;
  let tellphone=req.body.tellphone;
  //用用户名(username)做为唯一注册验证的判断条件
  //如果用户名不存在则可以注册，如果用户名存在则注册失败
  let sql='select uid,user_name from suser where user_name=?';
  pool.query(sql,[username],(err,results)=>{
    if(err) throw err;
    if(results.length>0){
      res.send({message:'用户名已存在',code:1,results:results})
    }else{
      sql='insert into suser (user_name,user_password,user_tellphone) values(?,md5(?),?)'
      pool.query(sql,[username,password,tellphone],(err,results)=>{
        if(err) throw err;
        res.send({message:'注册成功',code:201,})
      })
    }
  })
})
//用户登录的接口
app.post('/login',(req,res)=>{
  let username=req.body.username;
  let password=md5(req.body.password);
  let sql='select uid,user_name from suser where user_name=? and user_password=?';
  pool.query(sql,[username,password],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({message:'登录成功',code:200,info:result[0]})
    }else{
      res.send({message:'登录失败',code:404})
    }
  })
})
//获取商品分类的接口
app.get('/category',(req,res)=>{
  let sql='select cid,class_name,class_pic from sproduct_class'
  pool.query(sql,(err,results)=>{
    if(err) throw err;
    res.send({message:'获取成功',code:200,results:results})
  })
})
//获取商品详情的接口（包括分页查询）
// app.get('/lists',(req,res)=>{
//   // let cid=req.query.cid
//   let page=req.query.page;//客户端传递的当前页码
//   let pageCount=15;//每页显示的记录数
//   let start=(page-1)*pageCount;
//   let _count=0;
//   let _pageCount=0;
//   // let sql='select id,subject,description,image from xzqa_article where category_id=?limit '+start+','+pageCount
//   // let sql=`select pid,product_name,product_price,product_describe,product_pic from sproduct_details where product_id= ? limit ${start},${pageCount}`
//   let sql=`select pid,product_name,product_price,product_describe,product_pic from sproduct_details where product_id= ? limit ${start},${pageCount}`
//   pool.query(sql,[cid],(err,result)=>{
//     if(err) throw err;
//     ////////
//     //1.获取总记录数
//     sql='select count(pid) as count from sproduct_details where product_id=?';
//     pool.query(sql,[cid],(err,results)=>{
//       // console.log(result[0].count)
//       _count=results[0].count
//       //2.计算总页数
//       _pageCount=Math.ceil(_count/pageCount)
//       res.send({message:'查询成功',code:1,result:result,_pageCount:_pageCount})
//     })
//   })  
// })
app.get('/lists',(req,res)=>{
  let sql="select pid,product_name,product_price,product_describe,product_pic,product_id,product_labelname from sproduct_details"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
      res.send({message:'查询成功',code:1,result:result})
  })  
})
//用户搜索模糊查询
app.get('/like',(req,res)=>{
  let like=req.query.like
  let sql="select pid,product_name,product_price,product_describe,product_pic,product_id,product_labelname from sproduct_details where product_describe like ?"
  pool.query(sql,[like],(err,result)=>{
    if(err) throw err;
      res.send({message:'查询成功',code:1,result:result})
  })  
})
// 插入订单接口
app.post('/add',(req,res)=>{
  let obj=req.body
  let sql='insert into sorder_details set ? '
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({message:'插入成功',code:200})
    }else{
     res.send({code:400,msg:"插入失败"});
    }
   })
 })

// 查询订单接口
app.get('/getOrder',(req,res)=>{
  var pid=req.query.pid;
  pool.query("select * from sorder_details where order_product_id=?",[pid],(err,result)=>{
    if(err) throw err;
    console.log(result)
    res.send({result:result})
  })
})

 //添加用户地址接口
 app.post('/aaddress',(req,res)=>{
  let obj=req.body
  let sql='insert into suser_address set ? '
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({message:'插入成功',code:200})
    }else{
     res.send({code:400,msg:"插入失败"});
    }
   })
 })
 //查看用户地址接口
  app.get('/getAddress',(req,res)=>{
    var did=req.query.did;
      pool.query("select a_name,address,a_tellphone,address_doorid from suser_address",(err,result)=>{
      if(err) throw err;
      res.send(result)
      console.log(result)
    })
  })