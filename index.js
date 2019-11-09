const {
  asyncCat,
  asyncCatBadPractice,
  exposedObj,
  asyncCatPromisePending
} = require("./asyncCat");

async function getCatInAbadPracticeWay() {
  const a = await asyncCatBadPractice();
  console.log("look whos availble ...", a);
  console.log("look whos availble in a bad way...");
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
