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
  let sql='select user_id,username from  sp_user where username=?'
  pool.query(sql,[username],(err,results)=>{
    if(err) throw err;
    if(results.length>0){
      res.send({message:'用户名已存在',code:1,results:results})
    }else{
      sql='insert into sp_user (username,password,tellphone) values(?,md5(?),?)'
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
  let sql='select user_id,username from sp_user where username=? and password=?';
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
app.get('/categoray',(req,res)=>{
  let sql='select cat_id,cat_name,cat_icon from sp_category'
  pool.query(sql,(err,results)=>{
    if(err) throw err;
    res.send({message:'获取成功',code:200,results:results})
  })
})
//获取商品详情的接口（包括分页查询）
app.get('/lists',(req,res)=>{
  let lid=req.query.lid
  let page=req.query.page;//客户端传递的当前页码
  let pageCount=15;//每页显示的记录数
  let start=(page-1)*pageCount;
  let _count=0;
  let _pageCount=0;
  // let sql='select id,subject,description,image from xzqa_article where category_id=?limit '+start+','+pageCount
  let sql=`select goods_id,goods_name,goods_price,goods_introduce,goods_small_logo from sp_goods where cat_id= ? limit ${start},${pageCount}`
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    ////////
    //1.获取总记录数
    sql='select count(goods_id) as count from sp_goods where cat_id=?';
    pool.query(sql,[lid],(err,results)=>{
      // console.log(result[0].count)
      _count=results[0].count
      //2.计算总页数
      _pageCount=Math.ceil(_count/pageCount)
      res.send({message:'查询成功',code:1,result:result,_pageCount:_pageCount})
    })
  })  
})
// 插入订单接口
app.post('/add',(req,res)=>{
  let obj=req.body
  let sql='insert into sp_consignee set ? '
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
  pool.query("select * from sp_order where order_id=?",[pid],(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})

 //添加用户地址接口
 app.post('/address',(req,res)=>{
  let obj=req.body
  let sql='insert into sp_consignee set ? '
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
  var did=req.query.did;
  pool.query("select cgn_name,cgn_address,cgn_tel from sp_consignee where user_id=?",[did],(err,result)=>{
    if(err) throw err;
    res.send(result)
    console.log(result)
  })
})