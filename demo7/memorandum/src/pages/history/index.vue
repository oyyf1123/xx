<template>
  <div>
    <div class="content-block">
      <div class="card" v-for="(item,index) in history" :key="item.id">
        <div class="card-header">{{item.task}}</div>
        <div class="card-content">
          <div class="card-content-inner">{{item.content}}</div>
        </div>
        <div class="card-footer">
          <span class="icon icon-check" :class="{'heihei':item.flag}" @click="changeFlag(index)"></span>
          <span class="timer">{{item.time}}</span>
          <span class="icon icon-remove" @click="removeHistory(index)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        {
          id: 1,
          task: "空空如也",
          content: "您还没有删除的备忘录",
          flag: true
        }
      ]
    };
  },
  methods: {
    changeFlag(i) {
      this.history[i].flag = !this.history[i].flag; // 勾选的颜色变化
    },
    removeHistory(i) {
      this.history.splice(i, 1);
    }
  },
  created() {
    var _this = this;
    bus.$on('delMemo',val => {  
      _this.history.push({
        id:++_this.id,
        task:val.task,
        content:val.content,
        time:val.time,
      })
    })
  },
};
</script>