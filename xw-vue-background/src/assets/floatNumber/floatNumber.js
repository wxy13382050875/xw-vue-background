export default function(el) {
  const ele = el.tagName === 'INPUT' ? el : el.querySelector('input')
  ele.addEventListener("keyup", function(e) {
    let val = ele.value;
    if (typeof val === 'string') {
      val = val.replace(/[^\d.]/g, ""); // 清除"数字"和"."以外的字符
      val = val.replace(/^\./g, ""); // 验证第一个字符是数字
      val = val.replace(/\.{2,}/g, "."); // 只保留第一个, 清除多余的
      val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      val = val.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3'); // 只能输入三个小数
      ele.value = val;
    }
  })
}