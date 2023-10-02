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
 async function getUserData() {
  let resp = await axios.get('/api/vehicles.json');
  const {data}  = resp;
  return data
}

async function cleanUserData(userData) {
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
async function saveToDataBase(userData) {
 
    await axios.get(userData);
    console.log(userData.length)
    return  userData;
   
}

async function cleanAndSaveUserData() {
  const userData = await getUserData();
  const cleanedData = await cleanUserData(userData);
  console.log('cleaned data',cleanedData)
  return await saveToDataBase(cleanedData);
}
return cleanAndSaveUserData(); // does all the work
  
}
