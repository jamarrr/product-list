/**
 * Fetch product list from dummyjson API
 * @param url
 * @returns Response<Array<Product>>
 */
export const fetchData = async (url: string) => {
  const prods = await fetch(url);
  return prods.json();
};
