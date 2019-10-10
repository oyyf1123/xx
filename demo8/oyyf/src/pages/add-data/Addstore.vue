<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="详细地址" prop="site">
        <el-input v-model="ruleForm.site"></el-input>
      </el-form-item>

      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>

      <el-form-item label="店铺简介" prop="intro">
        <el-input v-model="ruleForm.intro"></el-input>
      </el-form-item>

      <el-form-item label="店铺标语" prop="slogan">
        <el-input v-model="ruleForm.slogan"></el-input>
      </el-form-item>

      <el-form-item label="店铺分类">
        <el-cascader :options="options" v-model="selectedOptions"></el-cascader>
      </el-form-item>

      <el-form-item label="店铺特点" prop="flag" style="width:450px;">
        <div class="trait-box" v-for="item in trait" :key="item.id">
          <span>{{ item.text }}</span>
          <el-switch v-model="item.flag"></el-switch>
        </div>
      </el-form-item>

      <el-form-item label="配送费">
        <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>

      <el-form-item label="起送价">
        <el-input-number v-model="num2" :min="1" :max="50" label="描述文字"></el-input-number>
      </el-form-item>

      <el-form-item label="营业时间">
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00'
          }"
        ></el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '24:00',
            minTime: startTime
          }"
        ></el-time-select>
      </el-form-item>

      <el-form-item label="上传店铺头像">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传营业执照">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传餐饮服务许可证">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        site: "",
        tel: "",
        intro: "",
        slogan: "",
        delivery: false,
        type: []
      },
      trait: [
        {
          id: 1,
          text: "品牌保证",
          flag: false
        },
        {
          id: 2,
          text: "蜂鸟专送",
          flag: false
        },
        {
          id: 3,
          text: "新开店铺",
          flag: false
        },
        {
          id: 4,
          text: "外卖保",
          flag: false
        },
        {
          id: 5,
          text: "准时达",
          flag: false
        },
        {
          id: 6,
          text: "开发票",
          flag: false
        }
      ],
      options: [
        {
          value: "yiguo",
          label: "异国料理",
          children: [
            {
              value: "rihan",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisa",
              label: "披萨意面"
            },
            {
              value: "dongnan",
              label: "东南亚菜"
            }
          ]
        },
        {
          value: "kuaican",
          label: "快餐便当",
          children: [
            {
              value: "jiancan",
              label: "简餐"
            },
            {
              value: "gaijiao",
              label: "盖浇饭"
            },
            {
              value: "mifen",
              label: "米粉面馆"
            },
            {
              value: "baozi",
              label: "包子粥店"
            }
          ]
        },
        {
          value: "xiaochi",
          label: "小吃夜宵",
          children: [
            {
              value: "xiaolong",
              label: "小龙虾"
            },
            {
              value: "difang",
              label: "地方小吃"
            },
            {
              value: "yabo",
              label: "鸭脖"
            }
          ]
        },
        {
          value: "guoshu",
          label: "果蔬生鲜",
          children: [
            {
              value: "shuiguo",
              label: "水果"
            },
            {
              value: "shengxian",
              label: "生鲜"
            },
            {
              value: "shucai",
              label: "蔬菜"
            },
            {
              value: "haixian",
              label: "海鲜水产"
            }
          ]
        },
        {
          value: "tianpin",
          label: "甜品饮品",
          children: [
            {
              value: "naicha",
              label: "奶茶果汁"
            },
            {
              value: "tianpin",
              label: "甜品"
            },
            {
              value: "kafei",
              label: "咖啡"
            }
          ]
        }
      ],
      num1: "1",
      num2: "1",
      selectedOptions: [],
      startTime: "",
      endTime: "",
      fileList2: [],
      // selectedOptions2: [],

      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        site: [
          { required: true, message: "请输入地址", trigger: "blur" },
          { min: 3, max: 35, message: "长度在 3 到 35 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            min: 11,
            max: 12,
            message: "长度在 11 到 12 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="stylus" scoped>
.trait-box {
  display: inline-block;

  span {
    margin-right: 5px;
  }

  .el-switch {
    margin-right: 10px;
  }
}
</style>