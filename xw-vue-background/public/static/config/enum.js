'use strict'

// 全局枚举对象
var Enum = {

  AssessType: {
    1: "优秀",
    2: "称职",
    3: "基本称职",
    4: "不称职",
  },
  KindredType: {
    1: "爷爷",
    2: "奶奶",
    3: "父亲",
    4: "母亲",
    5: "哥哥",
    6: "姐姐",
    7: "妹妹",
    8: "儿子",
    9: "女儿",
  },
  WorkingStateType: {
    1: "在职",
    2: "离职",
  },
  rankType: {
    1: "正厅级",
    2: "副厅级",
    3: "正处级",
    4: "副处级",
    5: "正科级",
    6: "副科级",
    7: "主任科员",
    8: "副主任科员",
    9: "科员",
    10: "其他",
  },
  CompanyType: {
    1: "政府",
  },
  CulturalType: {
    1: "博士",
    2: "硕士",
    3: "本科",
    4: "大专",
    5: "中专",
    6: "中技",
    7: "高中",
    8: "初中及以下",
  },
  MarriageType: {
    1: "未婚",
    2: "已婚",
  },


  NationType: {
    1: "汉族",
    2: "蒙古族",
    3: "回族",
    4: "藏族",
    5: "维吾尔族",
    6: "苗族",
    7: "彝族",
    8: "壮族",
    9: "布依族",
    10: "朝鲜族",
    11: "满族",
    12: "侗族",
    13: "瑶族",
    14: "白族",
    15: "土家族",
    16: "哈尼族",
    17: "哈萨克族",
    18: "傣族",
    19: "黎族",
    20: "傈僳族",
    21: "佤族",
    22: "畲族",
    23: "高山族",
    24: "拉祜族",
    25: "水族",
    26: "东乡族",
    27: "纳西族",
    28: "景颇族",
    29: "柯尔克孜族",
    30: "土族",
    31: "达斡尔族",
    32: "仫佬族",
    33: "羌族",
    34: "布朗族",
    35: "撒拉族",
    36: "毛南族",
    37: "仡佬族",
    38: "锡伯族",
    39: "阿昌族",
    40: "普米族",
    41: "塔吉克族",
    42: "怒族",
    43: "乌孜别克族",
    44: "俄罗斯族",
    45: "鄂温克族",
    46: "德昂族",
    47: "保安族",
    48: "裕固族",
    49: "京族",
    50: "塔塔尔族",
    51: "独龙族",
    52: "鄂伦春族",
    53: "赫哲族",
    54: "门巴族",
    55: "珞巴族",
    56: "基诺族"
  },
  DeptType: {
    1: "纪委",
    2: "分组",
    3: "责任单位",
  },

  SubjectType: {
    1: "个人",
    2: "单位",
  },

  PolitOutlook: {
    1: "中共党员",
    2: "共青团员",
    3: "民革党员",
    4: "民盟盟员",
    5: "民建会员",
    6: "民进会员",
    7: "农工党党员",
    8: "致公党党员",
    9: "九三学社社员",
    10: "台盟盟员",
    11: "无党派人士",
    12: "群众",
  },

  Gender: {
    1: "男",
    2: "女",
    3: "未知",
  },

  QuFrom: {
    1: "检举举报",
    2: "执纪监督和审查调查中发现",
    3: "巡视巡察中发现",
    4: "审计、司法、行政执法机关移送",
    5: "上级转办、交办、领导批办",
    6: "其他"
  },

  Violate: {
    1: "违反政治纪律",
    2: "违反组织纪律",
    3: "违反廉洁纪律",
    4: "违反群众纪律",
    5: "违反工作纪律",
    6: "违反生活纪律",
  },

  // 以下枚举值从Config接口动态取得
  JobLevel: {},
  EduLevel: {},
}
