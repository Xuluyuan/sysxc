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
    user_birthday date not null comment '用户生日'
);

#插入数据用户表suser
INSERT INTO suser (`uid`, `user_name`, `user_password`, `user_sex`, `user_avatar`, `user_tellphone`,`user_birthday`) VALUES
(null, 'Richard', 'qweasdzxc123',1, '00183a5ab206aea80120be1472a6f5.jpg', '13729394959','1982-10-19'),
(null, 'Johnny', '852741963zxc',2, '001f075ad3feeda8012138670b58f0.jpg', '15818283848', '1982-10-19'),
(null, 'Martin', '852753zxcasd',1, '008c8f59e96a55a801216a4bbcbcb0.jpg', '14727374757', '1982-10-19'),
(null, 'Christina', 'qscesz753951',2, '00adca5a0d93daa80121985c9ef05f.jpg','13616263646', '1982-10-19'),
(null, 'Margaret', 'qwecxz789321',1, '00b2e259575a7da8012193a331099a.jpg', '19858494736', '1982-10-19'),
(null, 'Barbara', '852963741wsx',1 , '00b3755b2b6eb6a8012034f78d8b5b.jpg','15311223344', '1982-10-19'),
(null, 'Diana', '12345678edc', 1, '00c1d55af1178ca801206abad941b6.jpg','15645675395', '1982-10-19'),
(null, 'Melody', '987654321qaz', 2, '00d1345abc83d5a801218207516561.jpg','13525875698','1982-10-19'),
(null, 'Debbie', '951753654asd', 2, '00d4325a72b3b6a8012134661d177d.jpg','15845896324', '1982-10-19'),
(null, 'Scott', '852123qwe', 1, '00da335a266f21a80120ba3858f56a.jpg','15863475395','1982-10-19');



#创建用户地址表suser_address
CREATE TABLE suser_address(
    aid int primary key auto_increment comment '地址编号',
    a_name varchar(20) not null comment '联系人',
    a_sex tinyint(2) not null comment '性别',
    a_tellphone char(11) not null comment '手机号',
    address varchar(128) not null comment '地址',
    address_doorid varchar(32) not null comment '门牌号',
    address_id int  not null comment '所属用户id', 
    FOREIGN KEY(address_id) REFERENCES suser(uid) 
);

#创建商品类别表sproduct_class
CREATE TABLE sproduct_class(
    cid int primary key auto_increment comment '商品类别编号',
    class_name varchar(32) UNIQUE not null comment '商品类别名',
    class_pic varchar(128) DEFAULT NULL comment '商品分类图片'
);

#创建商品详请表sproduct_details
CREATE TABLE sproduct_details(
    pid int primary key auto_increment comment '商品编号',
    product_name varchar(32) not null comment '商品名称',
    product_price decimal(9,2) not null comment '商品价格',
    product_describe varchar(128) comment '商品描述',
    product_pic varchar(128) DEFAULT NULL comment '商品图片',
    product_id int not null comment '商品所属类',
    product_labelname varchar(20) comment '新品徽章',
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


#插入数据商品类别表sproduct_class
INSERT INTO sproduct_class VALUES(null,'新品上线',null);
INSERT INTO sproduct_class VALUES(null,'烧仙草系列',null);
INSERT INTO sproduct_class VALUES(null,'酸奶&益菌多系列',null);
INSERT INTO sproduct_class VALUES(null,'鲜果茶系列',null);
INSERT INTO sproduct_class VALUES(null,'特调奶茶系列',null);
INSERT INTO sproduct_class VALUES(null,'推荐小料',null);
INSERT INTO sproduct_class VALUES(null,'温馨提示',null);


#插入数据商品详情表sproduct_details
INSERT INTO sproduct_details VALUES(null,'桃桃',15.00,'元气森林气泡水搭配饱满蜜桃,清凉爽口,元气无限','1598146024898.jpg',1,'元気新品');
INSERT INTO sproduct_details VALUES(null,'草莓啵啵酸奶',18.00,'清新的草莓搭配香醇的茉莉酸奶,嚼得到得新鲜过果肉,更有爽滑冻冻和Q弹啵啵,口感满满,滋味酸甜','1597608591974.jpg',1,'夏季新品');
INSERT INTO sproduct_details VALUES(null,'葡萄酸奶冰',18.00,'沁凉鲜爽得葡萄冰沙拌上香醇得茉莉酸奶,搭配爽滑冻冻和Q弹啵啵,一口入夏','1597608857946.jpg',1,'夏季新品');
INSERT INTO sproduct_details VALUES(null,'杨枝甘露酸奶',17.00,'香甜的芒果遇上香醇的茉莉酸奶,清新绵密,一试难忘,更有爽滑冻冻和Q弹啵啵,口口都有料','1597608875477.jpg',1,'夏季新品');
INSERT INTO sproduct_details VALUES(null,'椰椰烧仙草(大杯)',15.00,'天然椰椰搭配嫩滑仙草,满口阳光暖暖的味道','1600681272899.jpg',1,'椰椰新品');
INSERT INTO sproduct_details VALUES(null,'椰椰烧仙草(中杯)',13.00,'天然椰椰搭配嫩滑仙草,满口阳光暖暖的味道','1601002385345.jpg',1,'椰椰新品');
INSERT INTO sproduct_details VALUES(null,'书亦烧仙草(中杯)',10.00,'珍珠、红豆、椰果、葡萄干、花生、仙草+奶茶','1597612364637.jpg',2,'');
INSERT INTO sproduct_details VALUES(null,'书亦烧仙草(大杯)',12.00,'珍珠、红豆、椰果、葡萄干、花生、仙草+奶茶','1597608730298.jpg',2,'');
INSERT INTO sproduct_details VALUES(null,'杨枝甘露烧仙草',14.00,'甘甜芒果青涩西柚,经典杨枝甘露','1597608570482.jpg',2,'');
INSERT INTO sproduct_details VALUES(null,'酸奶烧仙草',14.00,'酸奶搭配滑嫩仙草冻,尝鲜体验','1597612339183.jpg',2,'');
INSERT INTO sproduct_details VALUES(null,'小芋圆烧仙草',12.00,'天然健康燕麦、小芋圆搭配烧仙草','1590742988700.jpg',2,'');
INSERT INTO sproduct_details VALUES(null,'杨枝甘露酸奶',17.00,'香甜的芒果遇上香醇的茉莉酸奶,清新绵密,一试难忘,更有爽滑冻冻和Q弹啵啵,口口都有料','1597608875477.jpg',3,'夏季新品');
INSERT INTO sproduct_details VALUES(null,'草莓啵啵酸奶',18.00,'清新的草莓搭配香醇的茉莉酸奶,嚼得到得新鲜过果肉,更有爽滑冻冻和Q弹啵啵,口感满满,滋味酸甜','1597608591974.jpg',3,'夏季新品');
INSERT INTO sproduct_details VALUES(null,'葡萄酸奶冰',18.00,'沁凉鲜爽得葡萄冰沙拌上香醇得茉莉酸奶,搭配爽滑冻冻和Q弹啵啵,一口入夏','1597608857946.jpg',3,'夏季新品');
INSERT INTO sproduct_details VALUES(null,'草莓啵啵益菌多',15.00,'酸酸甜甜、软糯Q弹','1591336770062.jpg',3,'');
INSERT INTO sproduct_details VALUES(null,'草莓啵啵橙橙',15.00,'草莓+橙子 维C每一天',n'1591336621818.jpg',3,'');
INSERT INTO sproduct_details VALUES(null,'葡萄柚益菌多',15.00,'新鲜葡萄柚优菌多相遇,酸甜滋味','1591337639355.jpg',3,'');
INSERT INTO sproduct_details VALUES(null,'百香益菌多',15.00,'酸甜入口,凤梨水晶百香果粒饱满','1590743505030.jpg',3,'');
INSERT INTO sproduct_details VALUES(null,'柠檬益菌多',13.00,'柠檬、椰果、绿茶,特选益菌多','1590743540908.jpg',3,'');
INSERT INTO sproduct_details VALUES(null,'葡萄芋圆冻冻',14.00,'葡萄柚、芋圆，搭配新鲜特制冻冻','1591778024054.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'柠檬芋圆冻冻',12.00,'新鲜柠檬搭配特制冻冻,吮吸更棒','1590743263689.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'超级水果茶',15.00,'优选葡萄柚、青柠、鲜橙6种好果','1591337037128.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'百香凤梨',14.00,'上等绿茶伴以百果粒、凤梨水晶','1590743424721.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'金桔柠檬',10.00,'新鲜柠檬、鲜绿金桔,浓浓柠香','1591778611434.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'鲜橙葡萄柚',12.00,'汁多粒大葡萄柚,酸甜阳光鲜橙','1591337708933.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'蜂蜜柚子茶',10.00,'甜蜜蜂蜜,酸甜柚子,融入绿茶','1590743408862.jpg',4,'');
INSERT INTO sproduct_details VALUES(null,'黑糖芋圆奶茶',14.00,'浓郁黑糖,丝滑奶茶,经典小芋圆','1590743573762.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'焦糖珍珠奶茶',10.00,'鲜香珍奶,醇厚焦糖,红茶作底','1591779200947.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'红豆布丁奶茶',10.00,'嫩滑布丁,绵实红豆,浓郁奶香','1591779846462.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'乌龙烤奶',9.00,'醇厚乌龙奶茶,焦香四溢奶茶','1591780083194.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'牛魔王黑砖奶茶',10.00,'手工现萃特制茶香,Q弹黑转冻','1591780660071.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'四季春燕麦奶茶',10.00,'拿铁搭配四季春,健康谷物燕麦','1592448583162.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'黄金珍珠奶茶',9.00,'Q弹黄金珍珠,优选淳萃红茶作底','1591781131216.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'椰果奶茶',9.00,'热带清爽椰果,优选上等红茶','1591781303085.jpg',5,'');
INSERT INTO sproduct_details VALUES(null,'温馨提示',0.00,'单独拍下小料，请自行联系门店取消订单哦','1603092156477.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'啵啵',2.00,'','1590741562927.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'冻冻',1.00,'润滑清凉口感','1590741643034.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'仙草',1.00,'传统甘甜烧仙草','1590742888497.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'椰果',1.00,'Q弹嚼劲十足','1590742820495.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'花生',1.00,'香脆的花生碎,只能加在书亦烧仙草中杯/大杯、小芋圆','1590741705417.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'珍珠',1.00,'爽滑黄金波霸','1590742700640.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'葡萄干',1.00,'粒粒饱满干甜,只能加在书亦烧仙草中杯/大杯、小芋圆','1590744512044.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'凤梨水晶',2.00,'黄金色泽水晶','1590741663838.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'芋圆',2.00,'定制爽滑芋圆','1590742792655.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'燕麦',2.00,'自然谷物小料','1590742809490.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'焦糖布丁',2.00,'焦糖嫩滑布丁','1590741606365.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'红豆',2.00,'口感绵实丰富','1590742907752.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'黑砖冻',2.00,'黑砖冻爽滑入口','1590742871768.jpg',6,'');
INSERT INTO sproduct_details VALUES(null,'调温度/甜度',0.01,'为保证每杯饮品口感,我们严格把控甜度与温度/冰量,如因个人喜好、天气等原因,部分饮品您可以和店员沟通需求,但定制饮品定量出杯,暂时无法更改用量,还请您谅解','1582967061018.jpg',7,'');
INSERT INTO sproduct_details VALUES(null,'点单须知',999.00,'商家接单后立即制作,如需退款,及时电话联系商家取消订单','1582967034224.jpg',7,'');







