import Sign from './Sign';
import Cookie from './Cookie';

function getCommonHeader() {
  const signRes = Sign.signMd5();

  // 通用参数
  const commonParams = {
    cClientType: 1, // 浏览器
    cToken: Cookie.get('_tk', { path: '/' }) || '',
    cAddress: '',
    cLongitude: -1,
    cLatitude: -1,
    cSoftVersion: '',
    cSystemVersion: '',
    cDeviceId: '',
    cSignVersion: 1,
    cTime: signRes.time,
    cSign: signRes.sign,
  };
  return commonParams;
}

export default {
  getCommonHeader: getCommonHeader
}
