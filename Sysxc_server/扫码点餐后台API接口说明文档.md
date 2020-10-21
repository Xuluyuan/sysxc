# 1.书亦烧仙草后台`API`接口文档

## 1.1. API  接口说明

- 接口基准地址：`http://127.0.0.1:8888`
- 服务端已开启 CORS 跨域支持
- 使用 HTTP Status Code 标识状态
- 数据返回格式统一使用 JSON

### 1.1.1. 支持的请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。

### 1.1.2. 通用返回状态说明

| *状态码* | *含义*                | *说明*           |
| -------- | --------------------- | ---------------- |
| 200      | OK                    | 请求成功         |
| 201      | CREATED               | 创建成功         |
| 404      | NOT FOUND             | 请求的资源不存在 |
| 500      | INTERNAL SERVER ERROR | 服务器端发生错误 |

------

## 1.2.注册

### 1.2.1. 注册验证接口

- 请求路径：reg
- 请求方法：post
- 请求参数

| 参数名    | 参数说明 | 备注     |
| --------- | -------- | -------- |
| username  | 用户名   | 不能为空 |
| password  | 密码     | 不能为空 |
| tellphone | 手机号   |          |

- 响应数据

```json
{
    "message": "注册成功",
    "code": 201
}
```

## 1.2. 登录

### 1.2.1. 登录验证接口

- 请求路径：login
- 请求方法：post
- 请求参数

| 参数名   | 参数说明 | 备注     |
| -------- | -------- | -------- |
| username | 用户名   | 不能为空 |
| password | 密码     | 不能为空 |

- 响应参数

| 参数名   | 参数说明 |
| -------- | -------- |
| id       | 用户 ID  |
| username | 用户名   |

- 响应数据

```json

{
    "message": "登录成功",
    "code": 200,
    "info": {
        "user_id": 15,
        "username": "admin2"
    }
}
```

## 1.3. 商品分类管理

### 1.3.1. 商品分类数据列表

- 请求路径：categoray
- 请求方法：get

- 响应参数

| 参数名   | 参数说明 | 备注 |
| -------- | -------- | ---- |
| cat_id   | 分类 ID  |      |
| cat_name | 分类名称 |      |
| cat_icon | 分类图片 |      |

- 响应数据

```json
{
    "message": "获取成功",
    "code": 200,
    "results": [
        {
            "cat_id": 1,
            "cat_name": "大家电",
            "cat_icon": ""
        },
        {
            "cat_id": 3,
            "cat_name": "电视",
            "cat_icon": ""
        },
        {
            "cat_id": 4,
            "cat_name": "空调",
            "cat_icon": ""
        },
        {
            "cat_id": 5,
            "cat_name": "4K超高清",
            "cat_icon": "full/fd99414907afb2e0382456b55ae051e51f9816f5.jpg"
        },
      ]
}
```

### 1.3.2. 商品详情验证接口

- 请求路径：lists
- 请求方法：get
- 请求参数

| 参数名 | 参数说明           | 备注     |
| ------ | ------------------ | -------- |
| lid    | 商品分类ID         | 不能为空 |
| page   | 当前用户提交的页码 | 不能为空 |

- 响应参数

| 参数名           | 参数说明 |
| ---------------- | -------- |
| goods_id         | 商品ID   |
| goods_name       | 商品名称 |
| goods_price      | 商品价格 |
| goods_introduce  | 商品介绍 |
| goods_small_logo | 商品图片 |

- 响应数据

```json
{
    "message": "查询成功",
    "code": 1,
    "result": [
        {
            "goods_id": 701,
            "goods_name": "TCL 55A950C 55英寸 前置音响 人工智能 金属超薄 64位32核 4K+HDR 超高清智能 曲面电视（枪色）",
            "goods_price": 3999,
            "goods_introduce": "<div class=\"lazyimg\"><p><a href=\"https://cuxiao.suning.com/hd20161212.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/132054885810478629024824_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></a></p><p> </p></div></div>",
            "goods_small_logo": ""
        }
    ],
    "_pageCount": 1
}
```

## 1.4. 订单管理

### 1.4.1. 查看订单数据列表

- 请求路径：getOrder
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注     |
| ------ | -------- | -------- |
| pid    | 订单ID   | 不能为空 |

- 响应数据

```javascript
[
    {
        "order_id": 42,
        "user_id": 133,
        "order_number": "itcast-59e411eaaccc9",
        "order_price": 222,
        "order_pay": "2",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "公司",
        "order_fapiao_company": "高大上公司",
        "order_fapiao_content": "体育休闲",
        "consignee_addr": "2",
        "pay_status": "0",
        "create_time": 1508119018,
        "update_time": 1508119018
    }
]
```

### 1.4.2. 插入订单表接口验证

- 请求路径：add
- 请求方法：post
- 请求参数

| 参数名             | 参数说明 | 备注     |
| ------------------ | -------- | -------- |
| order_price        | 订单总价 | 不能为空 |
| order_fapiao_title | 发票抬头 |          |

- 响应数据

```javascript
{
    "message": "插入成功",
    "code": 200
}
```

## 1.4. 地址管理

### 1.4.1. 查看用户地址列表

- 请求路径：getAddress
- 请求方法：get
- 请求参数

| 参数名 | 参数说明 | 备注     |
| ------ | -------- | -------- |
| did    | 用户ID   | 不能为空 |

- 响应数据

```javascript
[
    {
        "cgn_name": "鸭蛋",
        "cgn_address": "北京市海淀区西三旗建材城西路中腾大厦15室",
        "cgn_tel": "18902564321"
    }
]
```

### 1.4.2. 插入订单表接口验证

- 请求路径：address
- 请求方法：post
- 请求参数

| 参数名      | 参数说明   | 备注     |
| ----------- | ---------- | -------- |
| cgn_name    | 收货人姓名 | 不能为空 |
| cgn_address | 收货人地址 | 不能为空 |
| cgn_tel     | 收货人电话 | 不能为空 |

- 响应数据

```javascript
{
    "message": "插入成功",
    "code": 200
}
```

