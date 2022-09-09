<template>
  <el-form class="mt10 p10" :model="form" label-width="100px" size="small">
    <el-row>
      <el-col :span="12">
        <el-form-item label="姓名：">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="出生地：">
          <el-select placeholder="请选择" v-model="form.region" style="width: 100%">
            <el-option :label="item.name" :value="item.code" v-for="item in regionEnum" :key="item.code"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="出生日期：">
          <el-input placeholder="出生日期" v-model="form.date"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性别：">
          <el-radio-group v-model="form.gender">
            <el-radio :label="item.code" v-for="item in genderEnum" :key="item.value">{{item.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="描述：">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item class="tc">
      <el-button type="primary" @click="onSubmit" size="small">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import '../style/main.m.scss';
import { regionEnum, genderEnum } from '../enums/enums.m';
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date: '',
        desc: '',
        gender: '',
      },
      regionEnum,
      genderEnum
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.form)
    }
  },

}
</script>