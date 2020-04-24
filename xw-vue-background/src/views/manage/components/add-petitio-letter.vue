<template>
  <div class="petitio-letter-container">
    <div class="petitio-letter-content">
      <div class="title">领导干部信访举报核查处理情况登记表</div>
      <div style="display: flex;justify-content: space-between;">
        <div class="petitio-letter-edit">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="单位">
                  <el-input v-model="form.unit" maxlength="10" />
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="职务">
                  <el-input v-model="form.position" maxlength="10" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="受理时间">
                  <el-date-picker
                    v-model="form.PetitionDate"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期"
                    style="width: 100%;"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="核查是否属实">
                  <el-radio-group v-model="form.IsReal" size="mini" @change="changeSubjectType">
                    <el-radio label="true">是</el-radio>
                    <el-radio label="false">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理时间及处理结果">
                  <el-input v-model="form.DealResult" maxlength="20" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注">
                  <el-input v-model="form.Remark" maxlength="20" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="dt-bottom">
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </div>
    </div>
    <div v-for="(item,index) in dataSource" :key="index" class="weddings-funerals-list">
      <div style="padding: 0.625rem;">
        <el-collapse @change="handleChange">
          <el-collapse-item :title="item.CreatedAt | formatDate" name="1">
            <el-form ref="form" :model="dataSource" label-width="130px">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="单位">
                    <el-input v-model="dataSource.unit" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="职务">
                    <el-input v-model="dataSource.position" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="受理时间">
                    <el-input v-model="dataSource.PetitionDate" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="核查是否属实">
                    <el-input v-model="dataSource.IsReal" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="办理时间及处理结果">
                    <el-input v-model="dataSource.DealResult" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="备注">
                    <el-input v-model="dataSource.Remark" disabled />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>

        </el-collapse>
      </div>

    </div>
  </div>
</template>

<script>
// import employment from "@/components/dataEntry/employment.vue";
import {
  createPetition,
  getPetitionList
} from '@/api/dataEntry.js'
export default {
  name: 'Manage',
  components: {},
  data() {
    return {
      form: {
        unit: '',
        position: '',
        PersonId: '',
        PetitionDate: '',
        IsReal: '',
        DealDate: '',
        DealResult: '',
        Remark: ''
      },
      dataSource: []
    }
  },
  created() {
    if (typeof (this.$route.query.PersonId) !== 'undefined') {
      this.getMyPetitionList()
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      this.form.PersonId = parseInt(this.$route.query.PersonId)
      this.listLoading = true
      
      createPetition(this.form).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false
        this.getMyPetitionList()
      })
    },
    changeSubjectType(nv) {
      this.form.IsReal = nv
    },
    getMyPetitionList() {
      const params = {}
      params.PersonId = parseInt(this.$route.query.PersonId)
      console.log(params)
      this.listLoading = true
      getPetitionList(params).then(response => {
        this.dataSource = response.data
        console.log(this.dataSource)
        this.listLoading = false
      })
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
