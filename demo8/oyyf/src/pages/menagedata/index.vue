<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <!-- 记得这个属性 -->
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺分类">
              <span>{{ props.row.shop_categorys }}</span>
            </el-form-item>
            <el-form-item label="配送费">
              <span>{{ props.row.shop_delivery_cost }} 元</span>
            </el-form-item>
            <el-form-item label="起送价">
              <span>{{ props.row.shop_mini_deli_amount }} 元</span>
            </el-form-item>
            <el-form-item label="营业时间">
              <span>早: {{ props.row.shop_start_time }}</span>
              <span>晚: {{ props.row.shop_end_time }}</span>
            </el-form-item>
            <el-form-item label="店铺电话">
              <span>{{ props.row.shop_tel }}</span>
            </el-form-item>
            <el-form-item label="店铺标语">
              <span>{{ props.row.shop_slogan }}</span>
            </el-form-item>
            <el-form-item label="店铺logo">
              <img :src=" imgUrl + props.row.shop_logo" alt />
            </el-form-item>
            <el-form-item label="店铺营业许可证">
              <img :src=" imgUrl + props.row.shop_business_license" alt />
            </el-form-item>
            <el-form-item label="店铺餐饮许可证">
              <img :src=" imgUrl + props.row.shop_license" alt />
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="shop_name"></el-table-column>
      <el-table-column label="店铺地址" prop="shop_site"></el-table-column>
      <el-table-column label="店铺介绍" prop="shop_intro"></el-table-column>
      <el-table-column label="操作" align="right">
        <template slot-scope="scope">

          <el-popover ref="popover4" placement="right" width="700" trigger="click">
            <el-table :data="gridData">
              <el-table-column width="150" property="date" label="日期"></el-table-column>
              <el-table-column width="100" property="name" label="姓名"></el-table-column>
              <el-table-column width="300" property="address" label="地址"></el-table-column>
            </el-table>
            
            <!-- <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              :action="url"
              method="post"
              enctype="multipart/form-data"
            >
              <el-form-item label="店铺名称" prop="name">
                <el-input v-model="ruleForm.name" name="shop_name"></el-input>
              </el-form-item>

              <el-form-item label="详细地址" prop="site">
                <el-input v-model="ruleForm.site" name="shop_site"></el-input>
              </el-form-item>

              <el-form-item label="联系电话" prop="tel">
                <el-input v-model="ruleForm.tel" name="shop_tel"></el-input>
              </el-form-item>

              <el-form-item label="店铺简介" prop="intro">
                <el-input v-model="ruleForm.intro" name="shop_intro"></el-input>
              </el-form-item>

              <el-form-item label="店铺标语" prop="slogan">
                <el-input v-model="ruleForm.slogan" name="shop_slogan"></el-input>
              </el-form-item>

              <el-form-item label="配送费" prop="deliveryCost">
                <el-input-number
                  name="shop_delivery_cost"
                  v-model="num1"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </el-form-item>

              <el-form-item label="起送价" prop="miniDeliAmount">
                <el-input-number
                  name="shop_mini_deli_amount"
                  v-model="num2"
                  :min="1"
                  :max="50"
                  label="描述文字"
                ></el-input-number>
              </el-form-item>

              <el-form-item label="营业时间">
                <el-time-select
                  placeholder="起始时间"
                  v-model="startTime"
                  name="shop_start_time"
                  :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00'
          }"
                ></el-time-select>
                <el-time-select
                  placeholder="结束时间"
                  v-model="endTime"
                  name="shop_end_time"
                  :picker-options="{  
            start: '00:00',
            step: '00:15',
            end: '24:00',
            minTime: startTime
          }"
                ></el-time-select>
              </el-form-item>
            </el-form> -->



          </el-popover>

          <!-- @click="handleEdit( scope.row)"  -->
          <el-button size="mini" v-popover:popover4>修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete( scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>



<script>
import { mapState, mapActions } from "vuex";
import ENV from "api/config.js";
export default {
  data() {
    return {
      imgUrl: "",
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.shopData.tableData
    })
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    ...mapActions(["getTableData", "handleDelete"])
  },
  mounted() {
    this.imgUrl = ENV.DEV.BACK_END_URL + "/upload/";
    this.getTableData();
  }
};
</script>




<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
img {
  width: 150px;
  height: 150px;
}
</style>