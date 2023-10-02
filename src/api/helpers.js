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

async function cleanData(allData) {
  console.log(allData)
  Object.entries(allData).map(async([key, value])  => (
    res = await axios.get(value.apiUrl),
    allData[key].price = res.data.price,
    allData[key].meta = res.data.meta,
    allData[key].id = res.data.id,
    allData[key].description = res.data.description,
    (res.data.price  && res.data.price !== undefined) ? arr.push(allData[key]) : ''
    
  ))
  
  return arr;
  

}
async function returnMod(allData) {
 
    await axios.get(allData);
    console.log(allData.length)
    return  allData;
   
}

async function cleanAndSaveData() {
  const allData = await getData();
  const cleanedData = await cleanData(allData);
  console.log('cleaned data',cleanedData)
  return await returnMod(cleanedData);
}
return cleanAndSaveData(); 
  
}
