
<template>
  <div>
    <div class="content-block">
      <div class="card" v-for="(item,index) in todos" :key="item.id">
        <div class="card-header">{{item.task}}</div>
        <div class="card-content">
          <div class="card-content-inner">{{item.content}}</div>
        </div>
        <div class="card-footer">
          <span class="icon icon-check" :class="{'heihei':item.flag}" @click="changeFlag(index)"></span>
          <span class="timer">{{item.time}}</span>
          <span class="icon icon-remove" @click="del(index)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

// <style lang="stylus" scoped>

//   .heihei 

//     color white 

//     background green

// </style>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          task: "欢迎使用",
          content: "请添加您的备忘录",
          flag: true
        }
      ]
      // maskFlag: false, //遮罩层标记
      // addVal: '', //  内容
      // addTask: '', //  标题
      // inputFlag: false, // 添加矿遮罩层标记
      // temp: 0
    };
  },
  methods: {
    changeFlag(i) {
      this.todos[i].flag = !this.todos[i].flag; // 勾选的颜色变化
    },

    changeInput() {
      this.inputFlag = true;
    },

    del(i) {
      if (this.todos[i].flag) {
        bus.$emit("delMemo", {
          task: this.todos[i].task,
          content: this.todos[i].content,
          time: this.todos[i].time
        });
        this.todos.splice(i, 1);
      } else {
        this.temp = i;
        this.maskFlag = true;
      }
    }
  }
};
</script>