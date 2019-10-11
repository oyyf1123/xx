<template>
  <div>
    <div id="main" style="width: 100%;height:600px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import ajax from 'utils/ajax';
<<<<<<< HEAD
import { TYPE, DATA_TYPE } from './mock'
=======
import {TYPE,TYPE_DATA} from 'pages/chart/chart.js'
>>>>>>> 1bc86703e7294091cd7f5e6e69fa2d3820e427ca
export default {
  data() {
    return {};
  },
  async mounted() {
    var myChart = echarts.init(document.getElementById("main"));
<<<<<<< HEAD

    // const result = await ajax({
    //     url:'mock/demo1.json'
=======
    // const result = await ajax({
    //     url:'/mock/demo1.json'
>>>>>>> 1bc86703e7294091cd7f5e6e69fa2d3820e427ca
    // })
    // console.log(result);
    const option = {
      title: {
        text: "商铺类型分布",
        // subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
<<<<<<< HEAD
        left: "left",
        data: TYPE,
=======
        left: "right",
        data: TYPE
>>>>>>> 1bc86703e7294091cd7f5e6e69fa2d3820e427ca
      },
      series: [
        {
          name: "店铺类型",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
<<<<<<< HEAD
          data: DATA_TYPE,
=======
          data: TYPE_DATA,
>>>>>>> 1bc86703e7294091cd7f5e6e69fa2d3820e427ca
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

