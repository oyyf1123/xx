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
            <span> 早: {{ props.row.shop_start_time }}</span> <span> 晚: {{ props.row.shop_end_time }} </span>
          </el-form-item>
          <el-form-item label="店铺电话">
            <span>{{ props.row.shop_tel }}</span>
          </el-form-item>
          <el-form-item label="店铺标语">
            <span>{{ props.row.shop_slogan }}</span>
          </el-form-item>
          <el-form-item label="店铺logo">
            <img :src=" imgUrl + props.row.shop_logo" alt="">
          </el-form-item>
          <el-form-item label="店铺营业许可证">
            <img :src=" imgUrl + props.row.shop_business_license" alt="">
          </el-form-item>
          <el-form-item label="店铺餐饮许可证">
            <img :src=" imgUrl + props.row.shop_license" alt="">
          </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="shop_name"></el-table-column>
      <el-table-column label="店铺地址" prop="shop_site"></el-table-column>
      <el-table-column label="店铺介绍" prop="shop_intro"></el-table-column>
      <el-table-column label="操作" align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit( scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete( scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>



<script>
import {mapState,mapActions} from 'vuex'
import ENV from 'api/config.js'
export default {
  data() {
    return {
      imgUrl:'',
    }
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
    ...mapActions(['getTableData','handleDelete'])
  },
  mounted() {
    this.imgUrl = ENV.DEV.BACK_END_URL + '/upload/'
    this.getTableData();
  },
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
img{
  width: 150px;
  height: 150px;
}
</style>