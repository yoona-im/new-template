<template>
  <div class="p20 h0100">
    <el-form :model="searchForm" ref="searchForm" label-width="60px" size="small" inline>
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="searchForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="formSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" tooltip-effect="dark" size="small" :header-cell-style="{ background:'#F0F3F6', color: '#262626',fontWeight: 'bold',height: '40px', padding: 0, fontSize: '14px'}" :cell-style="{color: '#262626', fontSize: '14px', height: '40px', padding: 0}" height="calc(100% - 95px)">
      <el-table-column type="index" width="50" label="序号">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="region" label="出生地">
      </el-table-column>
      <el-table-column prop="gender" label="性别">
      </el-table-column>
      <el-table-column prop="date" label="出生日期">
      </el-table-column>
      <el-table-column prop="desc" label="描述" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" class-name="action">
        <template slot-scope="scope">
          <span class="co_blue">详情</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="pageNo" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" class="flex_end pt16 pb16">
    </el-pagination>
  </div>
</template>
<script>
import '../../style/main.m.scss';
import { queryTableData } from '../../api/service.m';
export default {
  data() {
    return {
      searchForm: {
        name: '',
        region: '',
        date: '',
        desc: '',
        gender: '',
      },
      pageNo: 1,
      pageSize: 10,
      currentPage: 1,
      total: 10,
      tableData: [],
    }
  },
  methods: {
    // mock接口
    ajax(type, url, success, jsonData) {
      if (window.XMLHttpRequest) {
        var oajax = new XMLHttpRequest();
      } else {
        var oajax = new ActiveXObject("Microsoft.XMLHTTP")
      }
      switch (type.toLowerCase()) {
        case 'get':
          oajax.open(type, url, true);
          oajax.send($encode(jsonData))
          break;
        case 'post':
          oajax.open(type, url, true);
          oajax.setRequestHeader("content-Type", "application/json")
          oajax.setRequestHeader("X-Service-Id", "worldService")
          oajax.setRequestHeader("X-Service-Method", "queryTableData")
          oajax.send($encode(jsonData))
          break;
      }
      oajax.onreadystatechange = function () {
        if (oajax.readyState == 4) {
          if (oajax.status == 200 || oajax.status == 304) {
            success && success(JSON.parse(oajax.responseText))
          }
        }
      }
    },
    // axios请求接口
    queryTableData() {
      queryTableData().then(res => {
        if (res && res.code == 200) {
        }
      })
    }
  },
  mounted() {
    // this.queryTableData();
    this.ajax("post", "http://127.0.0.1:8080/*.jsonRequest", (res) => {
      this.tableData = JSON.parse(res.body.body)
      console.log(this.tableData)
    }, [])
  }
}
</script>
<style scoped lang="scss">
</style>