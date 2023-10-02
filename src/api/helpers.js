/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
import axios from 'axios';
export async function request() {

 let arr = [];
 let res;
 async function getData() {
  let resp = await axios.get('/api/vehicles.json');
  const {data}  = resp;
  return data
}

async function cleanData(userData) {
  console.log(userData)
  Object.entries(userData).map(async([key, value])  => (
    res = await axios.get(value.apiUrl),
    userData[key].price = res.data.price,
    userData[key].meta = res.data.meta,
    userData[key].id = res.data.id,
    userData[key].description = res.data.description,
    (res.data.price  && res.data.price !== undefined) ? arr.push(userData[key]) : ''
    
  ))
  
  return arr;
  

}
async function returnMod(userData) {
 
    await axios.get(userData);
    console.log(userData.length)
    return  userData;
   
}

async function cleanAndSaveData() {
  const userData = await getData();
  const cleanedData = await cleanData(userData);
  console.log('cleaned data',cleanedData)
  return await returnMod(cleanedData);
}
return cleanAndSaveData(); 
  
}
