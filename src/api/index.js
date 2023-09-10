// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const res = await axios.get('/api/vehicles.json/');
  const { data } = res;

  const url = Object.values(data).map((value) => (
    value.apiUrl
  ));

  let price;
  const arr = new Array();
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
        // console.error(e.message);
      })

  ));
  request(arr);
  await axios.get(arr);
  console.log(arr);
  return arr;
}
