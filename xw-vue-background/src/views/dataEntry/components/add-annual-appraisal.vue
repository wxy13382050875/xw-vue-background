<template>
  <div class="annual-appraisal-container">
    <div class="annual-appraisal-content">
      <div class="title">领导干部年度考核情况登记表</div>
      <div class="assessment-edit">
        <el-form ref="inServForm" label-width="130px" size="small">
          <el-form-item label="年度考核情况" label-width="120px">
            <template>
              <el-table border :data="assSource" style="margin-right: 1.875rem;">
                <!-- <el-table-column prop="unit" label="单位" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.unit" size="mini" placeholder="请输入单位" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.position" size="mini" placeholder="请输入职务" />
                  </template>
                </el-table-column> -->
                <el-table-column prop="Year" label="年度">
                  <template scope="scope">
                    <el-date-picker v-model="scope.row.Year" value-format="yyyy" type="year" placeholder="选择年" />
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
                    <div><el-button type="success" size="small" @click.native.prevent="addRow(scope.row)">添加</el-button></div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="annual-appraisal-list">
      <el-table border :data="dataSource" style="margin-right: 1.875rem;">
        <el-table-column prop="DeptName" label="单位" style="width:6vw;" align="center" />
        <el-table-column prop="Job" label="职务" align="center" />
        <el-table-column prop="Year" label="年度" />
        <el-table-column prop="AssessmentTitle" label="考核等次" />
        <el-table-column prop="Remark" label="备注" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { createAssessment, getAssessmentList } from '@/api/dataEntry.js';
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      assSource: [
        {
          PersonId: '',
          Year: '',
          AssessmentLevel: '',
          Remark: ''
        }
      ],
      dataSource: []
    };
  },
  created() {
    if (typeof this.$route.query.PersonId !== 'undefined') {
      this.getMyAssessmentList();
    }
  },
  methods: {
    getMyAssessmentList() {
      const params = {};
      params.PersonId = parseInt(this.$route.query.PersonId);
      console.log(params);
      this.listLoading = true;
      getAssessmentList(params).then(response => {
        this.dataSource = response.data;
        this.dataSource.forEach((item, index) => {
          item.AssessmentTitle = this.$w.GetEnumTitleByKey('AssessmentLevel', item.AssessmentLevel)
        })
        this.listLoading = false;
      });
    },

    addRow(item) {
      item.PersonId = parseInt(this.$route.query.PersonId);
     
      createAssessment(item).then(response => {
        console.log(response);
        // this.list = response.data.items
        this.assSource = [
          {
            PersonId: '',
            Year: '',
            AssessmentLevel: '',
            Remark: ''
          }
        ];
        this.listLoading = false;
        this.getMyAssessmentList();
      });
    }
  }
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
  .dt-bottom {
    width: 100%;
    text-align: center;
    margin-bottom: 0.625rem;
  }
}
.annual-appraisal-list {
  margin: 1.25rem;
}
.rh-bottom {
}
</style>
