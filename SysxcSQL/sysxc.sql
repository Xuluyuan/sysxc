#客户端连接服务器端使用的编码是utf8
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS sysxc;
#创建数据库使用的编码是utf8
CREATE DATABASE sysxc CHARSET=UTF8;
#进入数据库
USE sysxc;
#创建用户表suser
CREATE TABLE suser(
    uid int primary key auto_increment comment '用户编号',
    user_avatar varchar(128) comment '用户头像',
    user_name varchar(16) not null comment '用户名',
    user_password varchar(32) not null comment '用户密码',
    user_sex tinyint(2) not null comment '用户性别',
    user_tellphone char(11) not null UNIQUE comment '手机号码',  
    user_birthday date not null comment '用户生日',
    user_wechat varchar(32) not null UNIQUE comment '用户微信er_id'
);

#创建用户地址表suser_address
CREATE TABLE suser_address(
    aid int primary key auto_increment comment '地址编号',
    address varchar(128) not null comment '地址',
    address_id int  not null comment '所属用户id', 
    FOREIGN KEY(address_id) REFERENCES suser(uid) 
);

#创建商品类别表sproduct_class
CREATE TABLE sproduct_class(
    cid int primary key auto_increment comment '商品类别编号',
    class_pic varchar(128) not null comment '商品分类图片',
    class_name varchar(32) UNIQUE not null comment '商品类别名'
);

#创建商品详请表sproduct_details
CREATE TABLE sproduct_details(
    pid int primary key auto_increment comment '商品编号',
    product_name varchar(32) not null comment '商品名称',
    product_price decimal(9,2) not null comment '商品价格',
    product_describe varchar(128) comment '商品描述',
    product_pic varchar(128) comment '商品图片',
    product_id int not null comment '商品所属类',
    FOREIGN KEY(product_id) REFERENCES sproduct_class(cid)
);

#创建订单主表sorder
CREATE TABLE sorder(
    oid int primary key auto_increment comment '订单编号',
    order_money decimal(9,2) not null comment '订单金额',
    order_createtime date not null comment '订单创建时间',
    order_completiontime date not null comment '订单完成时间',
    order_status enum('0','1','2','3') not null comment '订单状态',
    order_pay enum('1','2') not null comment '支付状态',
    order_uid int not null comment '订单所属用户id',
    FOREIGN KEY(order_uid) REFERENCES suser(uid)
);

#创建订单详情表sorder_details
CREATE TABLE sorder_details(
    order_id int not null comment '订单编号',
    order_product_id int not null comment '商品编号',
    order_product_name varchar(128) not null comment '商品名称',
    order_product_total decimal(9,2) not null comment '商品总金额',
    order_product_count int not null comment '商品数量',
    order_product_pic varchar(128) comment '商品图片',
    order_user_address varchar(128) not null comment '用户地址',
    FOREIGN KEY(order_id) REFERENCES sorder(oid),
    FOREIGN KEY(order_product_id) REFERENCES sproduct_details(pid)
);