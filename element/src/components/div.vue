<template>
  <!--<div class="dd" v-loading="loading!==false">-->
  <div class="dd">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: 'upload',
  data () {
    return {
      fileList: [],
      loading: undefined
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    add () {
      alert('你按了enter键')
    }
  }
}
</script>
<style>
  /*.dd {*/
    /*width:200px;*/
    /*height: 200px;*/
    /*position: absolute;*/
    /*background-color: aqua;*/
    /*left: 50%;*/
    /*top:50%;*/
    /*margin-left: -100px;*/
    /*margin-top: -100px;*/
  /*}*/
</style>
