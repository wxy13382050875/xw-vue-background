<template>
  <div class="annual-appraisal-container">
    <div class="annual-appraisal-content">
      <div class="title">领导干部年度考核及获奖情况登记表</div>
      <div class="assessment-edit">
        <el-form ref="inServForm" label-width="130px" size="small">
          <el-form-item label="年度考核情况" label-width="120px">
            <template>
              <el-table border :data="assSource" style="margin-right: 1.875rem;">
                <el-table-column prop="unit" label="单位" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.unit" size="mini" placeholder="请输入单位" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.position" size="mini" placeholder="请输入职务" />
                  </template>
                </el-table-column>
                <el-table-column prop="Year" label="年度">
                  <template scope="scope">
                    <el-date-picker v-model="scope.row.Year" type="year" placeholder="选择年" />
                  </template>
                </el-table-column>
                <el-table-column prop="AssessmentLevel" label="考核等次">
                  <template scope="scope">
                    <el-select v-model="scope.row.AssessmentLevel" placeholder="请选择考核等次">
                      <el-option v-for="(o, i) in $w.GetEnumArr('AssessmentLevel')" :key="i" :value="o.value" :label="o.label" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="Remark" label="备注">
                  <template scope="scope">
                    <el-input v-model="scope.row.Remark" size="mini" placeholder="请输入备注" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button size="small" @click.native.prevent="addAssRow()">添加</el-button>
                    <el-button size="small" @click.native.prevent="deleteAssRow(scope.$index, assSource)">移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <div class="awards-edit">
        <el-form ref="inServForm" label-width="130px" size="small">
          <el-form-item label="获将情况" label-width="120px">
            <template>
              <el-table border :data="awardsSource" style="margin-right: 1.875rem;">
                <el-table-column prop="unit" label="单位" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.unit" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入单位" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.position" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入职务" />
                  </template>
                </el-table-column>
                <el-table-column prop="PrizeDate" label="获奖时间">
                  <template scope="scope">
                    <el-date-picker v-model="scope.row.PrizeDate" type="date" placeholder="请选择获奖时间" />
                  </template>
                </el-table-column>
                <el-table-column prop="PrizeName" label="获奖名称">
                  <template scope="scope">
                    <el-input v-model="scope.row.PrizeName" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入获奖名称" />
                  </template>
                </el-table-column>
                <el-table-column prop="PrizeReason" label="获奖原因">
                  <template scope="scope">
                    <el-input v-model="scope.row.PrizeReason" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入获奖原因" />
                  </template>
                </el-table-column>
                <el-table-column prop="PrizeDept" label="获奖机关">
                  <template scope="scope">
                    <el-input v-model="scope.row.PrizeDept" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入获奖机关" />
                  </template>
                </el-table-column>
                <el-table-column prop="Remark" label="备注">
                  <template scope="scope">
                    <el-input v-model="scope.row.Remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入备注" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <div><el-button type="success" size="small" @click.native.prevent="addAwardsRow()">添加</el-button></div>
                    <div style="margin-top: 0.3125rem;"><el-button size="small" @click.native.prevent="deleteAwardsRow(scope.$index, awardsSource)">移除</el-button></div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <div class="dt-bottom"><el-button type="primary" @click="onSubmit">添加</el-button></div>
    </div>
  </div>
</template>

<script>
import { createPrize, createAssessment } from '@/api/dataEntry.js'
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      awardsSource: [
        {
          unit: '',
          position: '',
          PersonId: '',
          PrizeDate: '',
          PrizeName: '',
          PrizeReason: '',
          PrizeDept: '',
          Remark: ''
        }
      ],
      assSource: [
        {
          PersonId: '',
          unit: '政府',
          position: '中心',
          Year: '',
          AssessmentLevel: '',
          Remark: ''
        }
      ]
    }
  },

  methods: {
    onSubmit() {
      this.listLoading = true
      createPrize(this.awardsSource).then(response => {
        console.log(response)
        this.listLoading = false
      })
      // this.listLoading = true;
      createAssessment(this.assSource).then(response => {
        console.log(response)
        this.listLoading = false
      })
    },
    addAssRow() {
      this.assSource.push({
        PersonId: '',
        unit: '',
        position: '',
        Year: '',
        AssessmentLevel: '',
        Remark: ''
      })
    },
    deleteAssRow(index, rows) {
      // 删除改行
      rows.splice(index, 1)
    },
    addAwardsRow() {
      this.awardsSource.push({
        unit: '',
        position: '',
        PersonId: '',
        PrizeDate: '',
        PrizeName: '',
        PrizeReason: '',
        PrizeDept: '',
        Remark: ''
      })
    },
    deleteAwardsRow(index, rows) {
      // 删除改行
      rows.splice(index, 1)
    }
  }
}
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
  .dt-bottom {
    width: 100%;
    text-align: center;
    margin-bottom: 0.625rem;
  }
}

.rh-bottom {
}
</style>
