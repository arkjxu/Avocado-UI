export function encodeValue(val) {
  if (typeof val !== "string") {
    return base64Encode(JSON.stringify(val));
  }
  return base64Encode(val);
}

export function decodeValue(val) {
  if (typeof val !== "string") {
    return JSON.stringify(base64Decode(val));
  }
  return base64Decode(val);
}

export function base64Encode(val) {
  return btoa(encodeURIComponent(val))
}

export function base64Decode(val) {
  return decodeURIComponent(atob(val))
}

export function formatDateToStr(date) {
  if (!date) return "Unknown";
  const mt = date.split(/[- :]/);
  const t = new Date(mt[0], mt[1] - 1, mt[2], mt[3], mt[4], mt[5]);
  let formatString = [
    t.getDate(),
    t.toLocaleString('default', {month: "short"}),
    ",",
    t.getFullYear(),
    t.getHours() + ":" + t.getMinutes(),
  ].join(" ");
  return formatString;
}

export function getDecimalPoint(val) {
  if (Math.floor(val) === val) return 2;
  return val.toString().split(".")[1].length || 2;
}

export function CurrentDateString() {
  const now = new Date();
  return [
    now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
    now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
  ].join(" ")
}

export function sortByDate(a, b) {
  const tmpA = a.created.split(/[- :]/);
  const tmpB = b.created.split(/[- :]/);
  const aDate = new Date(tmpA[0], tmpA[1] - 1, tmpA[2], tmpA[3], tmpA[4], tmpA[5]);
  const bDate = new Date(tmpB[0], tmpB[1] - 1, tmpB[2], tmpB[3], tmpB[4], tmpB[5]);
  return bDate - aDate;
}


export function getNetWorth(assets) {
  const networth = {
    assets: 0.0,
    liabilities: 0.0,
    total: 0.0,
  };
  for (let i = 0; i < assets.length; ++i) {
    switch (assets[i].type) {
      case "Asset":
        networth.assets += assets[i].balance;
        break;
      case "Liability":
        networth.liabilities += assets[i].balance;
        break;
    }
  }
  networth.total = networth.assets - networth.liabilities;
  return networth;
}

export function sortByBalance(a, b) {
  return b.balance - a.balance;
}