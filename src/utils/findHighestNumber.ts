export function findItemWithHighestNumber(arr: any[]) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  let maxItem = arr[0];
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].likes > maxNumber) {
      maxItem = arr[i];
      maxNumber = arr[i];
    }
  }

  return maxItem;
}
