/*
* file: balances.jsx
* Description:
*   -> API calls for balance operations
*/


/*
* function: AddBalance.jsx
* Description:
*   -> API calls for add balance operation
*/
export async function AddBalance(newBalance) {
  const newBalRes = await fetch("https://fcavocado.herokuapp.com/balances", {
    method: "POST",
    body: JSON.stringify(newBalance)
  })
  if (newBalRes.status !== 200) {
    return null;
  }
  return (await newBalRes.json());
}

/*
* function: GetUserBalances.jsx
* Description:
*   -> API calls for get user balances operation
*/
export async function GetUserBalances() {
  const newBalRes = await fetch("https://fcavocado.herokuapp.com/balances", {
    method: "GET",
  })
  if (newBalRes.status !== 200) {
    return null;
  }
  return (await newBalRes.json());
}

/*
* function: RemoveBalance.jsx
* Description:
*   -> API calls for remove user balance operation
*/
export async function RemoveBalance(blanceToRemove) {
  const newBalRes = await fetch("https://fcavocado.herokuapp.com/balances", {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(blanceToRemove)
  })
  if (newBalRes.status !== 200) {
    return false;
  }
  return true;
}