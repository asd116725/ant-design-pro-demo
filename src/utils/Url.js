const Format = require('./Format')

function getQueryString(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  const r = window.location.search.substr(1).match(reg)
  if (r != null)
    return unescape(r[2])
  return null
}

//导出文档-数据流jsonp
function parseBlob(res) {
  const blob = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  const objectUrl = URL.createObjectURL(blob);
  const filename = Format.date(new Date().getTime(), 'yyyy_MM_dd_HH_mm_ss') + "_" + Math.floor(Math.random()*20) + ".xls";
  //window.open(objectUrl);
  const a = document.createElement("a");
  // safari doesn't support this yet
  if (typeof a.download === 'undefined') {
      window.location = objectUrl;
  } else {
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
  }
}

module.exports = {
  getQueryString,
  parseBlob
}
