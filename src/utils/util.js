/**
 * 加法
 * @param arg1
 * @param arg2
 * @returns
 */
export function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

/**
 * 减法
 * @param arg1
 * @param arg2
 * @returns
 */
export function accSubtr(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //动态控制精度长度
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/***
 * 乘法，获取精确乘法的结果值
 * @param arg1
 * @param arg2
 * @returns
 */
export function accMul(arg1, arg2) {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {
    console.log(e);
  }
  try {
    m += s2.split(".")[1].length;
  } catch (e) {
    console.log(e);
  }
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / Math.pow(10, m);
}

/***
 * 除法，获取精确乘法的结果值
 * @param arg1
 * @param arg2
 * @returns
 */
export function accDivCoupon(arg1, arg2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    console.log(e);
  }
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    console.log(e);
  }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

export function getNumber(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}
export const session = {
  get(key) {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return undefined;
  },
  set(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  }
};

export function debounce(fn, delay = 500) {
  var timer = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}
