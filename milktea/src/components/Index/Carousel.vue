<template>
  <div id="demo" class="carousel" :style="{width:innerWidth+'px'}"
  @mouseenter="stop" @mouseleave="start">
    <!-- 轮播图 -->
    <div class="carousel-inner" :style="ulStyle" :class="ulClass">
      <div v-for="(img,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link to="/about">
          <img :src="img.src" :style="{width:innerWidth+'px'}"/>
        </router-link>
        <router-link to="/about"></router-link>
      </div>
       <div class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link to="/about">
          <img :src="imgs[0].src" :style="{width:innerWidth+'px'}"/>
        </router-link>
        <router-link to="/about"></router-link>
      </div>
    </div>
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <!-- 轮播指示符 -->
    <ul class="carousel-indicators">
        <li v-for="(img,idx) of imgs" :key="idx" :class="idx==i?'active':''" @click="moveTo(idx)"></li>
    </ul>
    <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      innerWidth:window.innerWidth,
      ulClass:{//定义所有图片的容器div上是否有transition
        hasTrans:true //在css中提前定义好的样式类，其中包含transition属性
          //如果值为true，则当前图片容器的div上就有过渡属性
          //如果不想让图片容器的div上有过渡属性，则设置该值为false
      },
      i:1,//当前正在播放的第几张图片
      imgs:[
        {
          src:require('../../assets/images/carousel_item/carousel-1.jpg')
        },
        {
         src:require('../../assets/images/carousel_item/carousel-2.jpg')
        },
        {
         src:require('../../assets/images/carousel_item/carousel-3.jpg')
        },
        {
          src:require('../../assets/images/carousel_item/carousel-4.jpg')
        },
      ],
       canClick:true,
       timer:null
    }
  },
  created(){
    window.addEventListener('resize',()=>{
      this.innerWidth=window.innerWidth;
    })
    this.start();
  },
  computed:{
    ulStyle(){//修饰所有图片的父元素
        var width=this.innerWidth*(this.imgs.length+1)+"px";
        var marginLeft=-this.i*this.innerWidth+"px";
        return{ width,marginLeft }
    }
  },
  methods:{
    stop(){
      clearInterval(this.timer)
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },3000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){//如果向右移动，且正在显示第1张图片，就要骗
          this.ulClass.hasTrans=false;//去掉父级div上的transition样式类
          setTimeout(()=>{//等50ms后，再进行后续操作
            this.i=this.imgs.length; //悄悄的将父级div移动到最左边
            setTimeout(()=>{//等50ms后，再进行后续操作
              this.ulClass.hasTrans=true;//打开父级div上的transition效果
              this.i+=i;//正式向右移动一次
              setTimeout(()=>{//200s后，才允许单击
                this.canClick=true;
              },200)
            },50)
          },50)
        }else if(i==1&&this.i==this.imgs.length-1){
          //如果向左移动，且现在已经显示最后一张了
          this.i+=i;//可以先带transition效果，左移一次
          setTimeout(()=>{//等左移完，再去掉transition效果，骗用户
            this.ulClass.hasTrans=false;
            setTimeout(()=>{//等50ms后，瞬间将父级div移动到显示第一张图片
              this.i=0;
              setTimeout(()=>{//等50ms后，再次启用transition，为下次提供动画
                this.ulClass.hasTrans=true;
                setTimeout(()=>{//稍等片刻之后允许单击
                  this.canClick=true;
                })
              },50)
            },50)
          },200)
        }else{//如果不是两端的情况，则保持原来的逻辑
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },300)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },600)
      }
    }
  }
}
</script>

<style scoped>
  .carousel{
    position: relative;
    overflow:hidden;
  }
  .carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  .carousel>.carousel-inner.hasTrans{
    transition:all .5s linear;
  }

/*重写指示符的样式*/
  .carousel-indicators{
    position: absolute;
    top: 210px;
    left: 101px;
  }
  .carousel-indicators li{
    list-style-type: none;
    width:10px;height:10px;
    background-color:#fff;
    margin-left:6px;
    margin-right:6px;
    border-radius: 50%;
    top:60px;
    float: left;
  }
   .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.3)
  }
</style>