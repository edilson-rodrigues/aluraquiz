export const remove = (arr, item) => {
  const newArr = [...arr];
  newArr.splice(newArr.findIndex((i) => i === item), 1);
  return newArr;
};

let newIndex = 0;
export const add = (arr) => {
  newIndex += 1;
  return [...arr, newIndex];
};
