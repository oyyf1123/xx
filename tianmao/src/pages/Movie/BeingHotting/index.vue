<template>
  <div style="overflow:auto;height:600px">
    <!-- 正在热映 -->
    
    <!-- 需要渲染出来的列表   start -->
    <div class="movieLB" v-for="item in movieList" :key="item.id">
      <div class="movie-left">
        <img :src="item.img | Pfilter('128.130')" alt />
      </div>
      <div class="movie-right">
        <div class="neirong">
          <div class="neirong-1 line-ellipsis" style="font-weight: bold;font-size:17px">{{item.nm}}</div>
          <div class="neirong-2">
            <div class="neirong-2-1 line-ellipsis">
              <span class="score-suffix" style="font-size:13px;color: #666;" v-if="item.sc != 0">观众评</span>
              <span
                class="grade"
                style="font-size:15px;color: #faaf00;font-weight: bold"
                v-if="item.sc != 0"
              >{{item.sc}}</span>
              <span
                class="grade"
                style="font-size:15px;color: #faaf00;font-weight: bold"
                v-if="item.sc == 0"
              >{{item.wish}}</span>
              <span class="score-suffix" style="font-size:13px;color: #666;" v-if="item.sc == 0">人想看</span>
            </div>
            <div class="neirong-2-2 line-ellipsis" style="font-size:13px;color: #666;">{{item.star}}</div>
            <div
              class="neirong-2-3 line-ellipsis"
              style="font-size:13px;color: #666;"
            >{{item.showInfo}}</div>
          </div>
        </div>
        <div class="goumai">
          <button
            class="button button-danger button-fill"
            style="float: right;margin-top: 25px"
            v-if="item.sc != 0"
          >购票</button>
          <button
            class="button button-fill"
            style="float: right;margin-top: 25px"
            v-if="item.sc == 0"
          >预售</button>
        </div>
      </div>
    </div>
    <!-- end -->
    </div>
 
</template>

<style scoped>
.outClass{
  overflow-y: scroll;
}

img {
  width: 100%;
  height: 100%;
}

.movieLB {
  height: 114px;
  padding: 12px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.movie-left {
  width: 64px;
  height: 90px;
  float: left;
}

.neirong {
  width: 70%;
  overflow: hidden;
  float: left;
}

.movie-right {
  margin-left: 74px;
  height: 90px;
  max-height: 90px;
  box-sizing: content-box
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

<script>
// import axios from 'axios'
import api from "../../../api";

export default {
  data() {
    return {
      movieList: null
    };
  },

  filters: {
    Pfilter: function(el, size) {
      return el.replace("w.h", size);
    }
  },
  created() {
    this.$http({
      url: api.behotting
      // params:{  // 这是get请求的参数  携带的形式  携带的方法
      //   // token: ''
      // }
    })
      .then(res => {
        this.movieList = res.data.movieList;
        console.log(this.movieList);
      })
      .catch(err => console.log(err));
  }
};
</script>
