// my time 24:50
function diffArray(arr1, arr2) {
  var newArr = [];
  var tmpArr = [];
  // Same, same; but different.

  let maxLen = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLen; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      tmpArr.push(arr2[i]);
    }
    if (arr2.indexOf(arr1[i]) === -1) {
      tmpArr.push(arr1[i]);
    }
    newArr = tmpArr.filter(el => el != undefined);
  }
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
