/**
 * 验证手机号
 */
export function checkPhone(phoneNum) {
  let phoneReg = /^1\d{10}$/;
  if (phoneReg.test(phoneNum)) {
    //手机号码格式正确
    return true;
  } else {
    //手机号码格式不正确
    return false;
  }
}
