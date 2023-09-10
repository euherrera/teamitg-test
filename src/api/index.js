// eslint-disable-next-line no-unused-vars
import axios, { AxiosError } from 'axios';
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
  const arr = [];
  Object.entries(url).map(([key, value]) => (
    axios.get(value)
      .then((resp) => {
        price = (resp.data.price !== '' && resp.data.price !== undefined) ? resp.data.price : '';
        if (price) {
          const { meta } = resp.data;
          data[key].price = price;
          data[key].meta = meta;
          arr.push(data[key]);
        }

        return price;
      })

  ));
  request(arr)
  await axios.get(arr);
  // console.log(arr);
  return arr;
}
