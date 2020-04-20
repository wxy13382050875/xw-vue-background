<template>
  <div class="weddings-funerals-container">
    <div class="weddings-funerals-content">
      <div class="title">领导干部操办婚丧喜庆事宜情况登记表</div>
      <div class="weddings-funerals-edit">
        <div class="edit-wf-item">
          <el-form ref="form" :model="form" label-width="120px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="工作单位及职务">
                  <el-input v-model="form.PersonId" />
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="办理事项">
                  <el-input v-model="form.BanquetTitle" />
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="办理时间">
                  <el-date-picker
                    v-model="form.BanquetTime"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="选择办理日期"
                    style="width: 100%;"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理地点">
                  <el-input v-model="form.BanquetPlace" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车辆使用量">
                  <el-input v-model="form.CarNum" type="number" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车辆来源">
                  <el-input v-model="form.CarFrom" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否合办">
                  <el-radio-group v-model="form.IsTogether" size="mini" @change="changeSubjectType">
                    <el-radio label="true">是</el-radio>
                    <el-radio label="false">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="实际桌数">
                  <el-input v-model="form.DeskNum" type="number" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="宴席标准">
                  <el-col :span="12">
                    <el-input v-model="form.DeskMoney" />
                  </el-col>
                  元桌（含酒水）

                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="亲属人数">
                  <el-input v-model="form.RelativesNum" type="number" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="非亲属人数">
                  <el-input v-model="form.NonRelativesNum" type="number" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="其他需要报告内容">
                  <el-input v-model="form.OtherReport" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="wf-bottom" style="width: 100%; text-align:center ;margin-bottom: 0.625rem;">
        <el-button type="primary" style="" @click="onSubmit">添加</el-button>
      </div>
    </div>
    <div v-for="(item,index) in dataSource" :key="index" class="weddings-funerals-list">
      <div style="padding: 0.625rem;">
        <el-collapse @change="handleChange" >
          <el-collapse-item :title="item.CreatedAt | formatDate" name="1">
            <el-form ref="form" label-width="130px" >
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="工作单位及职务">
                    <el-input v-model="item.PersonId" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="办理事项">
                    <el-input v-model="item.BanquetTitle" disabled />
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="办理时间">
                    <el-input v-model="item.BanquetTime" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="办理地点">
                    <el-input v-model="item.BanquetPlace" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车辆使用量">
                    <el-input v-model="item.CarNum" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车辆来源">
                    <el-input v-model="item.CarFrom" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否合办">
                    <el-input v-model="item.IsTogether" disabled />

                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="实际桌数">
                    <el-input v-model="item.DeskNum" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="宴席标准">
                    <el-col :span="6">
                      <el-input v-model="item.DeskMoney" disabled />
                    </el-col>
                    <el-col :span="18">元桌（含酒水）</el-col>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="亲属人数">
                    <el-input v-model="item.RelativesNum" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="非亲属人数">
                    <el-input v-model="item.NonRelativesNum" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="其他需要报告内容">
                    <el-input v-model="item.OtherReport" disabled />
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
import {
  createBanquet,
  getBanquetList
} from '@/api/dataEntry.js'
import {
  formatDate
} from '@/utils/formatDate.js'
export default {
  name: 'WeddingsFunerals',

  components: {},
  filters: {
    formatDate(time) {
      time = time * 1000
      const date = new Date(time)
      console.log(new Date(time))
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  data() {
    return {
      form: {
        PersonId: '',
        BanquetTitle: '',
        BanquetTime: '',
        BanquetPlace: '',
        IsTogether: false,
        CarNum: 0,
        CarFrom: '',
        DeskNum: 0,
        DeskMoney: 0.0,
        RelativesNum: 0,
        NonRelativesNum: 0,
        OtherReport: ''
      },
      dataSource: [],
      radio: '1'
    }
  },
  created() {
    if (typeof (this.$route.query.PersonId) !== 'undefined') {
      this.getMyBanquetList()
    }
  },
  methods: {
    changeSubjectType(nv) {
      this.form.IsTogether = nv
    },
    onSubmit() {
      this.form.PersonId = parseInt(this.$route.query.PersonId)
      this.form.IsTogether = parseInt(this.form.IsTogether)
      this.form.CarNum = parseInt(this.form.CarNum)
      this.form.DeskNum = parseInt(this.form.DeskNum)
      this.form.RelativesNum = parseInt(this.form.RelativesNum)
      this.form.NonRelativesNum = parseInt(this.form.NonRelativesNum)
      this.form.DeskMoney = parseFloat(this.form.DeskMoney)
      createBanquet(this.form).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false
        this.getMyBanquetList()
      })
    },
    getMyBanquetList() {
      const params = {}
      params.PersonId = parseInt(this.$route.query.PersonId)
      console.log(params)
      this.listLoading = true
      getBanquetList(params).then(response => {
        this.dataSource = response.data
        console.log(this.dataSource)
        this.listLoading = false
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  .weddings-funerals-content {
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

    .weddings-funerals-edit {
      background-color: #e0e8ee;
      margin-top: 0.625rem;

      .edit-wf-item {
        padding: 0.625rem;
      }
    }
  }

  .wf-bottom {}

  .weddings-funerals-list {
    margin: 1.25rem;
    border-radius: 5px;
    // border: 1px solid #1f5193;
    // background-color: #e0e8ee;
  }

  .el-collapse-item__header {
    color: #FFFFFF !important
  }
</style>
