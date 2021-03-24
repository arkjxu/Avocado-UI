
/*
* function: fetchJson.jsx
* Description:
*   -> fetch request and return json, or error if failed
*/
async function fetchJson(...args) {
  try {
    const res = await fetch(...args);
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    const e = new Error(res.statusText);
    e.response = res;
    e.data = data;
    throw e;
  } catch(e) {
    if (!e.data) {
      e.data = { message: e.message }
    }
    throw e;
  }
}

export default fetchJson;