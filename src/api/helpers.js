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
  try{
    let resp = await axios.get('/api/vehicles.json');
    const {data}  = resp;
    return data
  }catch(error){
    console.log(error.message)
  }
  
}

async function cleanData(allData) {
  // console.log(allData)
  try{
    Object.entries(allData).map(async([key, value])  => (
    
      res = await axios.get(value.apiUrl),
     
      allData[key].price = res.data.price,
      allData[key].meta = res.data.meta,
      allData[key].id = res.data.id,
      allData[key].description = res.data.description,
      (res.data.price && res.data.price !== undefined) ?  arr.push(allData[key]) : ''
      
    ))
    
    
    return  arr;
  }catch(error){
    console.log(error.message)
  }
  
  

}
async function returnMod(allData) {
    try {
      await axios.get(allData);
      console.log(allData.length)
      return allData;
    }catch(error){
      console.log(error.message)
     
    }
    
   
}

async function cleanAndSaveData() {
  try {
    const allData = await getData();
    const cleanedData = await cleanData(allData);
    console.log('cleaned data',cleanedData)
    return await returnMod(cleanedData);
  }catch(error){
    console.log(error.message)
  }
  
}
return cleanAndSaveData(); 
  
}
