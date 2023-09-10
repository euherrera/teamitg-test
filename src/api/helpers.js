/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
 export async function request(data, arr) {
  // console.log(arr);
  
  const url = Object.values(data).map((value) => (
    value.apiUrl
  ));

  let price;
  
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
}
