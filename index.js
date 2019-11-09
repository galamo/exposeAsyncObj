const {
  asyncCat,
  asyncCatBadPractice,
  exposedObj,
  asyncCatPromisePending
} = require("./asyncCat");

//Ugly Option...
async function getCatInAbadPracticeWay() {
  await asyncCatBadPractice();
  console.log("look whos availble in a bad practice...");
  // using the Exposed obj only by any promise as helper for ready ...
  console.log(exposedObj);
}
getCatInAbadPracticeWay();

//BEST OPTION...can also be used with await
asyncCat().then(res => {
  console.log(res);
});

// BEST OPTION 2...can also be used with await
asyncCatPromisePending.then(res => console.log(res));

// best practices for modules is to export functionality and not objects, supports decupeling and low cohision
