let exposedObj = {};

function asyncCat() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ cat: { name: "zuzu" } });
    }, 1000);
  });
}

function asyncCatBadPractice() {
  return new Promise(resolve => {
    setTimeout(() => {
      exposedObj.cat = { cat: { name: "zuzu" } };
      console.log("cat val", cat);
      resolve(1);
    }, 1000);
  });
}
const asyncCatPromisePending = asyncCat();

module.exports = {
  asyncCat,
  exposedObj,
  asyncCatPromisePending,
  asyncCatBadPractice
};
