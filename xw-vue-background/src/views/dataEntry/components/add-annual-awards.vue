<template>
  <div class="awards-container">
    <div class="awards-content">
      <div class="title">领导干部年度获奖情况登记表</div>

      <div class="awards-edit">
        <el-form ref="inServForm" label-width="130px" size="small">
          <el-form-item label="获将情况" label-width="120px">
            <template>
              <el-table border :data="awardsSource" style="margin-right: 1.875rem;">
                <!-- <el-table-column prop="unit" label="单位" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.unit" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入单位" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.position" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入职务" />
                  </template>
                </el-table-column> -->
                <el-table-column prop="PrizeDate" label="获奖时间">
                  <template scope="scope">
                    <el-date-picker v-model="scope.row.PrizeDate" value-format="yyyy-MM-dd" type="date" style="width: 100%;" placeholder="请选择获奖时间" />
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
                    <div><el-button type="success" size="small" @click.native.prevent="addRow(scope.row)">添加</el-button></div>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="awards-list">
      <el-table border :data="dataSource" style="margin-right: 1.875rem;">
        <el-table-column prop="PrizeDate" label="获奖时间" />
        <el-table-column prop="PrizeName" label="获奖名称" />
        <el-table-column prop="PrizeReason" label="获奖原因" />
        <el-table-column prop="PrizeDept" label="获奖机关" />
        <el-table-column prop="Remark" label="备注" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { createPrize, getPrizeList } from '@/api/dataEntry.js';
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      awardsSource: [
        {
          PersonId: '',
          PrizeDate: '',
          PrizeName: '',
          PrizeReason: '',
          PrizeDept: '',
          Remark: ''
        }
      ],
      dataSource: []
    };
  },
  created() {
    if (typeof this.$route.query.PersonId !== 'undefined') {
      this.getMyPrizeList();
    }
  },
  methods: {
    getMyPrizeList() {
      const params = {};
      params.PersonId = parseInt(this.$route.query.PersonId);
      console.log(params);
      this.listLoading = true;
      getPrizeList(params).then(response => {
        this.dataSource = response.data;

        this.listLoading = false;
      });
    },
    addRow(item) {
      item.PersonId = parseInt(this.$route.query.PersonId)
      createPrize(item).then(response => {
        this.awardsSource = [
          {
            PersonId: '',
            PrizeDate: '',
            PrizeName: '',
            PrizeReason: '',
            PrizeDept: '',
            Remark: ''
          }
        ]
        this.listLoading = false
        this.getMyPrizeList()
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.awards-content {
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
.awards-list {
  margin: 1.25rem;
}
.rh-bottom {
}
</style>
