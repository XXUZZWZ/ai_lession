/**
 * @param {*String} nums1
 * @param {*String} nums1
 * @return {*String}
 */

// function addLargeNumbers(nums1, nums2) {
//   let result = "";
//   let carry = 0;
//   let i = nums1.length - 1;
//   let j = nums2.length - 1;

//   while (i >= 0 || j >= 0 || carry > 0) {
//     const digit1 = i >= 0 ? parseInt(nums1[i]) : 0;
//     const digit2 = j >= 0 ? parseInt(nums2[i]) : 0;
//     carry = Math.floor((digit1 + digit2 + carry) / 2);
//     const res = (digit1 + digit2 + carry) % 10;
//     result = res + result;
//     j--;
//     i--;
//   }
//   console.log(result);
// }
function addLargeNumbers(num1, num2) {
  let result = ""; // 存储结果
  let carry = 0; // 存储进位
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    // 边界
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result;
}

addLargeNumbers("1111", "1111");
