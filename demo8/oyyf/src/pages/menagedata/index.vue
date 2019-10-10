<template>
  <div>
    <el-table :data="tableData5" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="">
          <!-- 记得这个属性 -->
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{        }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{        }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{       }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{       }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{       }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{       }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{       }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="name"></el-table-column>
      <el-table-column label="店铺地址" prop="site"></el-table-column>
      <el-table-column label="店铺介绍" prop="introduce"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

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
</style>

<script>
export default {
  data() {
    return {
      tableData5: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>