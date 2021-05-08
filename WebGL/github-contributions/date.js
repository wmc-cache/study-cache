let cache = null;
async function getData(toDate = new Date()) {
  if (!cache) {
    const data = await (await fetch('../assets/github_contributions_akira-cn.json')).json();
    cache = data.contributions.map((o) => {
      o.date = new Date(o.date.replace(/-/g, '/'));
      return o;
    });
  }
  // 要拿到 toData 日期之前大约一年的数据（52周）
  let start = 0,
    end = cache.length;

  // 用二分法查找
  while (start < end - 1) {
    const mid = Math.floor(0.5 * (start + end));
    const { date } = cache[mid];
    if (date <= toDate) end = mid;
    else start = mid;
  }

  // 获得对应的一年左右的数据
  let day;
  if (end >= cache.length) {
    day = toDate.getDay();
  } else {
    const lastItem = cache[end];
    day = lastItem.date.getDay();
  }
  // 根据当前星期几，再往前拿52周的数据
  const len = 7 * 52 + day + 1;
  const ret = cache.slice(end, end + len);
  if (ret.length < len) {
    // 日期超过了数据范围，补齐数据
    const pad = new Array(len - ret.length).fill({ count: 0, color: '#ebedf0' });
    ret.push(...pad);
  }

  return ret;
}