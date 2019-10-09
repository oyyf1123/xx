<template>
  <div>
    <div class="banner">
      <p>最近最受期待</p>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- 渲染的轮播 -->
          <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
            <div class="pic">
              <img :src="item.img | Pfilter('85.115')" alt />
              <span class="mask"></span>
              <span class="span1">{{ item.wish }}人想看</span>
            </div>
            <h5 class="line-ellipsis">{{item.nm}}</h5>
            <p class="p1">{{ item.comingTitle.split(' ')[0] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="movieList">
      <div class="movie-time" v-for=" (itemWeek,index) in tempObj " :key="index">
        <p class="p2">{{ itemWeek[0].comingTitle }}</p>
        <!-- 轮播下方的电影列表 -->
        <div class="movie" v-for="list in itemWeek" :key="list.id">
          <div class="movie-left left">
            <img :src="list.img | Pfilter('64.90')" alt />
          </div>

          <div class="movie-right left">
            <div class="right-info left">
              <h3>{{ list.nm }}</h3>
              <div>
                <span class="spanNum">{{ list.wish }}</span>
                <span class="spanXX">人想看</span>
              </div>
              <span class="star line-ellipsis">主演: {{ list.star }}</span>
              <span class="time">{{ list.rt }}上映</span>
            </div>

            <button class="button button-fill right" style="margin-top: 35px">预售</button>
          </div>



          <div class="movie" v-for="moreComingList in moreComingLists" :key="moreComingList.id">
          <div class="movie-left left">
            <img :src="moreComingList.img | Pfilter('64.90')" alt />
          </div>

          <div class="movie-right left">
            <div class="right-info left">
              <h3>{{ moreComingList.nm }}</h3>
              <div>
                <span class="spanNum">{{ moreComingList.wish }}</span>
                <span class="spanXX">人想看</span>
              </div>
              <span class="star line-ellipsis">主演: {{ moreComingList.star }}</span>
              <span class="time">{{ moreComingList.rt }}上映</span>
            </div>

            <button class="button button-fill right" style="margin-top: 35px">预售</button>
          </div>
        </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import api from "../../../api";

export default {
  data() {
    return {
      moreComingLists:null,
      bannerList: null,
      willshow: null,
      tempArr: [],
      tempObj: []
    };
  },
  filters: {
    Pfilter: (el, size) => {
      return el.replace("w.h", size);
    }
  },
  created() {
    this.$http({
      url: api.willhot,
      params: {
        ci: 50,
        limit: 10,
        offset: 0,
        token: ""
      }
    }).then(res => {
      this.bannerList = res.data.coming;
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        slidesPerView: "auto",
        freeMode: true,
        freeModeMomentum: false, //释放slide之后立即停止不会滑动。
        freeModeMomentumVelocityRatio: 3 //free模式惯性速度，设置越大，释放后滑得越快。
      });
    });

    this.$http({
      url: api.willshow,
      params: {
        ci: 50,
        token: "",
        limit: 10
      }
    }).then(res => {
      this.willshow = res.data.coming;
      this.willshow.forEach(item => {
        let tempTime = item.comingTitle.split(" ")[0];
        if (this.tempArr.indexOf(tempTime) == -1) {
          this.tempArr.push(tempTime);
        }
      });
      for (let i = 0; i < this.tempArr.length; i++) {
        this.tempObj.push([]);
      }
      this.willshow.forEach(item => {
        let tempTime = item.comingTitle.split(" ")[0];
        this.tempArr.forEach((temp, index) => {
          if (tempTime == temp) {
            this.tempObj[index].push(item);
          }
        });
      });
    });
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll());
    });
  },
  methods: {
       // 获取滚动条当前的位置
    getScrollTop () {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    // 获取当前可视范围的高度
    getClientHeight () {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },

    // 获取文档完整的高度1

    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },
    // 滚动事件触发下拉加载
    onScroll () {
      console.log(this.getScrollHeight() - this.getClientHeight() - this.getScrollTop());
      if (Math.floor(this.getScrollHeight() - this.getClientHeight() - this.getScrollTop()) <= 0) {
        this.moreDatatimer = setTimeout(() => {
          this.$http({
            url: api.willshow,
            params: {
              token: '',
              limit: 10,
              movieIds: '1296312,1251393,342146,1219701,503342,1227005,1219636,1256872,1284496,296020'
            }
          }).then((res) => {
            this.moreComingLists = res.data.coming
          }).catch((err) => {
            throw err
          })
        }, 300);
      }
    },
  },
  beforeDestory () {
    window.onScroll = null
    clearInterval(this.moreDatatimer)
  }
};
</script>
<style scoped>
.banner {
  height: 216px;

  padding: 12px 10px 12px 10px;
  margin-bottom: 10px;
  background: white;
}
.swiper-container {
  height: 161px;
  width: 95vw;
}
p {
  font-size: 14px;
  color: #333333;
  margin: 0 0 12px;
}
.swiper-slide {
  display: inline-block;
  width: 85px;
  overflow: hidden;
  margin-right: 10px;
}
.pic {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;

  overflow: hidden;
}
.mask {
  display: inline-block;
  width: 115px;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.span1 {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
h5 {
  margin: 0;
  font-size: 13px;
  color: #222;
  margin-bottom: 3px;
}
p.p1 {
  margin: 0;
  font-size: 12px;
  color: #999;
}

.movieList {
  height: calc(100vh - 368px);

  background: white;
  overflow-y: scroll;
}
.movie {
  padding-left: 15px;
  margin-bottom: 10px;
}
.p2 {
  padding: 12px 15px 0;
}
.movie {
  height: 114px;

  padding-left: 15px;
}
.movie-left {
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  overflow: hidden;
}
.movie-right {
  width: calc(100vw - 120px);

  margin-left: 10px;
  margin-top: 6px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.movie-right::after {
  content: "";
  clear: both;
  overflow: hidden;
}
.right-info {
  height: 88px;
  width: 70%;
}
h3 {
  display: inline-block;
  font-size: 17px;
  color: #333;
  font-weight: 700;
  padding-right: 5px;
}
.spanNum {
  color: #faaf00;
  font-size: 15px;
  font-weight: bold;
}
.spanXX {
  font-size: 13px;
  display: inline-block;
  color: #666;
}
.star {
  display: block;
  font-size: 13px;
  color: #666;

  margin-top: 6px;
}
.time {
  display: block;
  font-size: 13px;
  margin-top: 6px;
  color: #666;
}
img {
  width: 100%;
  height: 100%;
}
</style>