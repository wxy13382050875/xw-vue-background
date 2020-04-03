<template>
  <div id="app">
    <el-row>
      <el-col :span="1" class="grid">
        <el-button
          type="success"
          icon="el-icon-circle-plus-outline"
          size="mini"
          round
          @click="
            addFlag = true;
            dialogVisible = true;
          "
        >
          新增
        </el-button>
      </el-col>
    </el-row>
    <br>
    <el-form>
      <el-form-item label="家庭成员情况" prop="servin" label-width="120px">
        <el-table :data="familyList" border style="width: 100%">
          <el-table-column fixed prop="FamilyRelation" align="center" label="与本人关系" />
          <el-table-column prop="Name" align="center" label="姓名" />
          <el-table-column prop="PolitOutlook" align="center" label="政治面貌" />
          <el-table-column prop="JobPlace" align="center" label="工作单位" />
          <el-table-column fixed="right" align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="delBook(scope.row)">删除</el-button>
              <el-button type="text" size="small" @click="editBook(scope.row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <el-dialog :title="addFlag ? '新增家庭成员' : '修改家庭成员'" style="text-align:left !important" :visible.sync="dialogVisible" :before-close="handleClose">
      <el-form ref="form" label-width="120px">
        <el-form-item label="与本人关系">
          <el-select v-model="family.FamilyRelation" placeholder="请选择亲属关系" style="width: 100%;">
            <el-option v-for="(o, i) in $w.GetEnumArr('KindredType')" :key="i" :value="o.value" :label="o.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="姓名"><el-input v-model="family.Name" maxlength="10" size="mini" /></el-form-item>
        <el-form-item label="政治面貌">
          <el-select v-model="family.PolitOutlook" placeholder="请选择政治面貌" style="width: 100%;">
            <el-option v-for="(o, i) in $w.GetEnumArr('PolitOutlook')" :key="i" :value="o.value" :label="o.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="工作单位"><el-input v-model="family.JobPlace" maxlength="20" size="mini" /></el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="saveBook(family)">提交</el-button>
        <el-button type="primary" @click="dialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提示" style="text-align:left !important" :visible.sync="dialog2Visible" :before-close="handleClose">
      <span>你确定要删除关系吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDel()">提交</el-button>
        <el-button type="primary" @click="dialog2Visible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialog2Visible: false,
      activeIndex2: '1',
      total: 0,
      size: 5,
      page: 1,
      familyList: [],
      family: {},
      addFlag: true,
      row: {}
    }
  },
  watch: {
    // 2.x版本的bug 以前用1.x发现没有 假如现在是第三页，只有一条数据了。将其删除，就没有第三页了。应该跳到第二页展示出5条数据。
    // 可是数据没有展示。原因是获取list的时候page参数没有改变。依然是3
  },
  mounted() {},
  methods: {
    handleClose(done) {
      done()
    },

    async saveBook(item) {
      this.familyList.push(item)
      this.dialogVisible = false
    },
    delBook(row) {
      this.dialog2Visible = true
      this.row = row
    },
    async handleDel() {
      this.familyList.splice(this.row, 1) // 删除第2个元素
      this.curId = {}
      this.dialog2Visible = false
    },
    editBook(row) {
      this.family = row
      this.dialogVisible = true
      this.addFlag = false
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
