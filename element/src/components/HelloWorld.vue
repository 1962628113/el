<template>
  <div class="content">
    <el-table
      :data="tableData"
      style="width: 100%"
      min-height="200"
      @selection-change="handleSelectionChange">
      ref='filterTable'
      :default-sort = "{prop: 'date'}"
      <!--ref="multipleTable"-->
      <!--ref="singleTable"-->
      <!--highlight-current-row-->
      <!--@current-change="handleCurrentChange"-->
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        type="index"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        sortable
        label="日期"
        width="180"
        :filters="text"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        label="姓名"
        width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column
          prop="tel"
          label="电话"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="360"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="assess"
        label="评价"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$idnex, scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click="deleteClick(scope.$index, scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<div style="margin-top: 20px">-->
      <!--<el-button @click="setCurrent(tableData[1])">选中第二行</el-button>-->
      <!--<el-button @click="setCurrent()">取消选择</el-button>-->
    <!--</div>-->
    <!--<div style="margin-top: 20px">-->
      <!--<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
      <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        date: '2017-7-25',
        name: '小王',
        tel: '888-888-888',
        status: 'stop',
        address: '四川省成都市天府新区A幢4楼',
        assess: '他是一个热爱学习和热爱运动的人，每天的学习时间超过八小时，所以人们对他非常友好'
      }, {
        date: '2017-7-11',
        name: '小王',
        tel: '888-888-888',
        status: 'stop',
        address: '四川省成都市天府新区A幢4楼',
        assess: '他是一个热爱学习和热爱运动的人，每天的学习时间超过八小时，所以人们对他非常友好'
      }, {
        date: '2017-7-30',
        name: '小王',
        tel: '888-888-888',
        status: 'start',
        address: '四川省成都市天府新区A幢4楼',
        assess: '他是一个热爱学习和热爱运动的人，每天的学习时间超过八小时，所以人们对他非常友好'
      }, {
        date: '2017-7-26',
        name: '小王',
        tel: '888-888-888',
        status: 'start',
        address: '四川省成都市天府新区A幢4楼',
        assess: '他是一个热爱学习和热爱运动的人，每天的学习时间超过八小时，所以人们对他非常友好'
      }, {
        date: '2017-7-28',
        name: '小王',
        tel: '888-888-888',
        status: 'start',
        address: '四川省成都市天府新区A幢4楼',
        assess: '他是一个热爱学习和热爱运动的人，每天的学习时间超过八小时，所以人们对他非常友好'
      }],
      text: [{text: '2017-7-30', value: '2017-7-30'},
        {text: '2017-7-25', value: '2017-7-25'},
        {text: '2017-7-11', value: '2017-7-11'},
        {text: '2017-7-26', value: '2017-7-26'},
        {text: '2017-7-28', value: '2017-7-28'}],
      currentRow: null,
      multipleSelection: []
    }
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (row && row.status === 'stop') {
        return 'aa'
      }
    },
    handleClick (index, row) {
      console.log(row)
    },
    deleteClick (index, row) {
      console.log(row)
    },
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style scoped>
@import "../../assets/common.css";
.content {
  width: 100%;
  margin: 0 auto;
}
</style>
