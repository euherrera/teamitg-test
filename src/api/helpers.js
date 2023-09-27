/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
import axios from 'axios';
export async function request() {
  const res = await axios.get('/api/vehicles.json');
  const { data } = res;

  const url = Object.values(data).map((value) => (
    value.apiUrl
  ));

  let price;
  const arr = [];
  Object.entries(url).map(([key, value]) => (

    axios.get(value)
      .then((resp) => {
        price = (resp.data.price && resp.data.price !== undefined) ? resp.data.price : '';
        if (price) {
          const { meta, id, description } = resp.data;
          data[key].price = price;
          data[key].meta = meta;
          data[key].id = id;
          data[key].description = description;
          arr.push(data[key]);
        }
        return price;
      })
      .catch(() => {
      })

  ));
  await axios.get(arr);
  return arr;
}
