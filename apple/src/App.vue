<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <el-row class="row" v-if="!showTab" key="home">
        <el-col :sm="0" :xs="8">
          <a class="link" @click.prevent="show">
            <div class="minus">
              <span class="el-icon-minus"></span>
              <span class="el-icon-minus"></span>
            </div>
          </a>
        </el-col>
        <el-col :sm="3" :xs="8">
          <div>
            <a class="link" href>
              <i class="el-icon-info"></i>
            </a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="0">
          <div>
            <a class="link" href>Mac</a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="0">
          <div>
            <a class="link" href>iPad</a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="0">
          <div>
            <a class="link" href>iPhone</a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="0">
          <div>
            <a class="link" href>Watch</a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="0" class="hidden-sm-and-down">
          <div>
            <a class="link" href>Music</a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="0">
          <div>
            <a class="link" href>
              <i class="el-icon-search"></i>
            </a>
          </div>
        </el-col>
        <el-col :sm="3" :xs="8">
          <div>
            <a class="link right">
              <i class="el-icon-goods"></i>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-row v-else ref="tab" class="tabRow" key="search">
        <el-col :sm="0" :xs="24" v-if="showNav" key="nav">
          <el-row class="tabTob">
            <el-col :sm="0" :xs="8" class="left">
              <i class="el-icon-error" @click="show"></i>
            </el-col>
            <el-col :sm="0" :xs="8" class="center">
              <i class="el-icon-info"></i>
            </el-col>
            <el-col :sm="0" :xs="8" >
              
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="0" class="search">
            <div class="searchBox">
              <i class="el-icon-search"></i>
              <input 
              class="searchInput" 
              type="text" 
              placeholder="搜索 apple.com"
              @click.prevent="focus"
              >
              
            </div>
            <a v-if="!showNav" @click.prevent="focus" class="cancel">取消</a>
        </el-col>
      </el-row>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showTab: false,
      showNav: true,
      windowWidth: "",
    };
  },
  methods: {
    show() {
      this.showTab = !this.showTab;
      console.log(this.windowWidth);
      
    },
    focus(){
      this.showNav = !this.showNav;
    }
  },
mounted(){
  this.windowWidth = `${document.documentElement.clientWidth}`;
  window.onresize = function(){
     ``
  }
},
  watch:{
    windowWidth:()=>{
      console.log(this.windowWidth);
      
    }
  }
};
</script>

<style>
#app {
  background-color: #fafafa;
}
.row {
  background-color: #313131;
  height: 44px;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #ececec;
  line-height: 44px;
  font-size: 14px;
  text-align: center;
}
.link:hover {
  color: #959595;
}
.tabRow {
  background-color: #000 !important;
  height: 100%;
  width: 100%;
}
.tabRow .search {
  width: 100%;
}
.tabTob{
  height: 48px;
  width: 100%;
  color: #ececec;
  line-height: 48px;
}
.tabTob .el-col:hover {
  color: #959595;
}
.minus{
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: 44px;
  padding-left: 20px;
}
.minus span{
  line-height: 8px;
  font-size: 18px;
}
.left{
  padding-left: 20px;
  text-align: left;
}
.right{
  text-align: right;
}
.right .el-icon-goods{
  padding-right: 20px;
}
.center{
  text-align: center;
}

.searchBox{
  width: 100%;
  background-color:#000;
  border-radius: 5px;
  font-size: 14px;
  padding: 0 5% 0 5%;
  color: #fafafa;
}
.search{
  width: 100%;
  margin: 15px 0;
}
.searchInput{
  color: #ececec;
  padding-left: 10px;
  background-color: #313131;
  border: none;
  outline: none;
  
  height: 36px;
  font-size: 14px;
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  padding-right: 15px;
}
.cancel{
  background-color: #000;
  color: #fff;
  width: 10%;
  height: 36px;
  line-height: 36px;

}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
