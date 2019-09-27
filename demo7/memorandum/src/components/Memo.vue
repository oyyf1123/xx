<template>
  <div>
      <!-- 单个page ,第一个.page默认被展示-->
      <div class="page">
        <!-- 标题栏 -->
        <header class="bar bar-nav">
          <a class="icon icon-edit pull-right open-panel" @click.self="changeInput"></a>
          <a class="icon icon-star pull-left open-panel"></a>
          <h1 class="title">备忘录</h1>
        </header>

        <div class="content">
          <div class="buttons-tab">
            <router-link k tag="div" keepAlive active-class = 'active' class="tab-link button" to = '/nowMemo'>备忘录</router-link>
            <router-link  tag="div" keepAlive active-class = 'active' class="tab-link button" to = '/history'>历史记录</router-link>
          </div>
          <div class="content-block">
            <div class="tabs">

            <router-view></router-view>
           
            </div>
          </div>
        </div>
      </div>
      <!-- 添加任务 -->
      <!-- <div class="maskBox" v-if="inputFlag" @click.self="closeInput1">
        <div class="confirm">
          <input type="text" v-model="addTask" @keyup.13="add" />
          <hr />
          <input type="text" v-model="addVal" @keyup.13="add" />
          <button style="float: right" @click.stop="closeInput">确定</button>
        </div>
      </div> -->

      <!-- 遮罩层 -->
      <!-- <div class="maskBox" v-if="maskFlag" @click.self="closeMsak1">
        <div class="confirm">
          <p>您确定删除这条备忘录吗？</p>
          <button style="float: right" @click.stop="closeMsak">确定</button>
        </div>
      </div> -->
   
  </div>
</template>

