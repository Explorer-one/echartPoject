<template>
  <div class="border_page">
    <el-card class="box-card">
        <!-- <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div> -->
        <slot name="header"></slot>
        <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.border_page {
    margin: 10px;
}
</style>
