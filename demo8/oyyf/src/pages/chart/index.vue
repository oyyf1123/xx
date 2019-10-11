<template>
  <div>
    <div id="main" style="width: 100%;height:600px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import ajax from 'utils/ajax';
import { TYPE, DATA_TYPE } from './mock'
export default {
  data() {
    return {};
  },
  async mounted() {
    var myChart = echarts.init(document.getElementById("main"));

    // const result = await ajax({
    //     url:'mock/demo1.json'
    // })
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
        data: TYPE,
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: DATA_TYPE,
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

