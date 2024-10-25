export const useSearch = (data, id) => {
  return data.find(item => item.id.toString() === id);
};
