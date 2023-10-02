/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
import axios from 'axios';
export async function request() {
 let res;
 let arr = [];
 try {
  res = await axios.get('/api/vehicles.json');
  const { data } = res;
  console.log(data)
  try {
    Object.entries(data).map(async([key, value])  => (
       res = await axios.get(value.apiUrl),
  
       data[key].price = res.data.price,
       data[key].meta = res.data.meta,
       data[key].id = res.data.id,
       data[key].description = res.data.description,
       (res.data.price  && res.data.price !== undefined) ? arr.push(data[key]) : ''
      
     ))
    }catch(error){
      console.log(error)
    }
 } catch(error){
  console.log(error)
 }
 
   try {
    await axios.get(arr);
    console.log(arr.length)
    return  arr;
   } catch(error){
      console.log(error)
   }
  
}
