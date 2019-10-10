<template>
  <div>
    <div id="main" style="width: 100%;height:600px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import ajax from 'utils/ajax';

export default {
  data() {
    return {};
  },
  async mounted() {
    var myChart = echarts.init(document.getElementById("main"));

    const result = await ajax({
        url:'/mock/demo1.json'
    })
    // console.log(result);
    const option = {
      title: {
        text: "某站点用户访问来源",
        // subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ''
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

