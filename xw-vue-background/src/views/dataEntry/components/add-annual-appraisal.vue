<template>
  <div class="annual-appraisal-container">
    <div class="annual-appraisal-content">
      <div class="title">领导干部年度考核及获奖情况登记表</div>
      <div class="assessment-edit">
        <el-form ref="inServForm" :model="inServForm" label-width="130px" size="small">
          <el-form-item label="年度考核情况" prop="servin" label-width="120px">
            <template>
              <el-table border :data="infiledList" style="margin-right: 1.875rem;">
                <el-table-column prop="startTime" label="单位" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" placeholder="请输入单位" />
                  </template>
                </el-table-column>
                <el-table-column prop="endTime" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" placeholder="请输入职务" />
                  </template>
                </el-table-column>
                <el-table-column prop="unit" label="年度">
                  <template scope="scope">
                    <el-date-picker v-model="value3" type="year" placeholder="选择年" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="考核等次">
                  <template scope="scope">
                    <el-select v-model="form.region" placeholder="请选择考核等次">
                      <el-option label="我" value="shanghai" />
                      <el-option label="你" value="beijing" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="备注">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" placeholder="请输入备注" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button size="small" @click.native.prevent="addRow(infiledList)">添加</el-button>
                    <el-button size="small" @click.native.prevent="deleteRow(scope.$index, infiledList)">移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <div class="awards-edit">
        <el-form ref="inServForm" :model="inServForm" label-width="130px" size="small">
          <el-form-item label="获将情况" prop="servin" label-width="120px">
            <template>
              <el-table border :data="infiledList" style="margin-right: 1.875rem;">
                <el-table-column prop="startTime" label="单位" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入单位" />
                  </template>
                </el-table-column>
                <el-table-column prop="endTime" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入职务" />
                  </template>
                </el-table-column>
                <el-table-column prop="unit" label="获奖时间">
                  <template scope="scope">
                    <el-date-picker v-model="value3" type="date" placeholder="请选择获奖时间" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="获奖名称">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入获奖名称" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="获奖原因">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入获奖原因" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="获奖机关">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入获奖机关" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="备注">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入备注" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <div><el-button type="success" size="small" @click.native.prevent="addRow(infiledList)">添加</el-button></div>
                    <div style="margin-top: 0.3125rem;"><el-button size="small" @click.native.prevent="deleteRow(scope.$index, infiledList)">移除</el-button></div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      radio: '1',
      value3: '',
      infiledList: [{ startTime: '', endTime: '', unit: '', position: '' }]
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.annual-appraisal-content {
  margin: 1.25rem;
  border-radius: 5px;
  border: 1px solid #1f5193;
  background-color: #e0e8ee;
  .title {
    background-color: #1f5193;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #ffffff;
  }
  .assessment-edit {
    background-color: #e0e8ee;
    margin: 0.625rem;
  }
  .awards-edit {
    background-color: #e0e8ee;
    margin: 0.625rem;
    margin-top: 3.125rem;
  }
}
.rh-bottom {
}
</style>
