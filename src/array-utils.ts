export const remove = <T>(arr: T[], item: T): T[] => {
    const newArr = [...arr];
    const index = newArr.findIndex((i) => i === item);
    if (index !== -1) newArr.splice(index, 1);
    return newArr;
};

let newIndex = 0;
export const add = (arr: number[]): number[] => {
    newIndex += 1;
    return [...arr, newIndex];
};
