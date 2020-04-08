<template>
  <div class="petitio-letter-container">
    <div class="petitio-letter-content">
      <div class="title">领导干部信访举报核查处理情况登记表</div>
      <div style="display: flex;justify-content: space-between;">
        <div class="petitio-letter-edit">
          <el-form ref="form" :model="dataSource" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="单位"><el-input v-model="dataSource.Name" maxlength="10" /></el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="职务"><el-input v-model="dataSource.Name" maxlength="10" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="受理时间">
                  <el-date-picker v-model="dataSource.Birthday" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="核查是否属实">
                  <el-radio-group v-model="dataSource.IsReal" size="mini" @change="changeSubjectType">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理时间及处理结果"><el-input v-model="dataSource.NativePlace" maxlength="20" /></el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注"><el-input v-model="dataSource.BirthPlace" maxlength="20" /></el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="dt-bottom"><el-button type="primary" @click="onSubmit">添加</el-button></div>
    </div>
  </div>
</template>

<script>
// import employment from "@/components/dataEntry/employment.vue";
import { createPetition } from '@/api/dataEntry.js'
export default {
  name: 'Manage',
  components: {},
  data() {
    return {
      dataSource: {
        unit: '',
        position: '',
        PersonId: '',
        PetitionDate: '',
        IsReal: '',
        DealDate: '',
        DealResult: '',
        Remark: ''
      }
    }
  },
  created() {},
  methods: {
    onSubmit() {
      console.log(this.dataSource)
      this.listLoading = true
      createPetition(this.dataSource).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false
      })
    },
    changeSubjectType(nv) {
      this.dataSource.IsReal = nv
    }
  }
}
</script>

<style lang="scss" scoped>
.petitio-letter-content {
  margin: 1.25rem;
  border-radius: 5px;
  border: 1px solid #1f5193;
  background-color: #e0e8ee;
  margin-bottom: 3.75rem;

  .title {
    background-color: #1f5193;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #ffffff;
  }

  .petitio-letter-edit {
    background-color: #e0e8ee;
    margin-top: 0.625rem;
    padding: 0.625rem;
  }

  .dt-bottom {
    width: 100%;
    text-align: center;
    margin-bottom: 0.625rem;
  }
}
</style>
