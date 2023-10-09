export const fetchProducts = async (url: string) => {
  const prods = await fetch(url);
  return prods.json();
};
