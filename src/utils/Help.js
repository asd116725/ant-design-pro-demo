//支付方式
function payWay(type) {
  switch (type * 1) {
    case 101:
      return '连连APP认证支付'
      break;
    case 102:
      return '连连APP快捷支付'
      break;
    case 201:
      return '支付宝APP支付'
      break;
    case 202:
      return '支付宝WAP支付'
      break;
    case 301:
      return '微信APP支付'
      break;
    case 302:
      return '微信公众号支付'
      break;
    case 303:
      return '微信小程序支付'
      break;
    case 304:
      return '微信WAP支付'
      break;
  }
}

//评论状态
function fetchComment(sexType, type) {
  if( sexType === 1 ) {
    switch (type * 1) {
      case 1:
        return '礼貌'
        break;
      case 2:
        return '有趣'
        break;
      case 3:
        return '大方'
        break;
      case 4:
        return '爽快'
        break;
      case 5:
        return '口嗨'
        break;
      case 6:
        return '不友好'
        break;
    }
  }
  if( sexType === 2 ) {
    switch (type * 1) {
      case 1:
        return '友好'
        break;
      case 2:
        return '有趣'
        break;
      case 3:
        return '爽快'
        break;
      case 4:
        return '耐心'
        break;
      case 5:
        return '高冷'
        break;
      case 6:
        return '暴脾气'
        break;
    }
  }
}

//感情状态
function makeUserEmoStatus(type) {
  switch (type * 1) {
    case 1:
      return '单身'
      break;
    case 2:
      return '有男朋友'
      break;
    case 3:
      return '已婚'
      break;
    case 4:
      return '离婚'
      break;
    case 5:
      return '小三'
      break;
    case 6:
      return '被包养'
      break;
    default:
      return '暂无信息'
  }
}

  //获取钱包支付类型
function fetchMoneyRecordType(billType) {
  switch (billType * 1) {
    case 101:
      return { title: '充值vip', earn: false }
      break;
    case 102:
      return { title: '购买联系方式', earn: false }
      break;
    case 103:
      return { title: '购买红包照片', earn: false }
      break;
    case 104:
      return { title: '发布广播', earn: false }
      break;
    case 105:
      return { title: '查看相册', earn: false }
      break;
    case 106:
      return { title: '提现', earn: false }
      break;
    case 202:
      return { title: '查看您的联系方式', earn: true }
      break;
    case 203:
      return { title: '查看您的红包照片', earn: true }
      break;
    case 204:
      return { title: '查看您的相册', earn: true }
      break;
    case 205:
      return { title: '提现被拒退回', earn: true }
      break;
    default:
      return '暂无信息'
  }
}

module.exports = {
  payWay,
  fetchComment,
  makeUserEmoStatus,
  fetchMoneyRecordType
}
