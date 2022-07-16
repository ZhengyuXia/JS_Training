// Q1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Q1.1 "double" built-in func
const doubleBuiltInFunc = (arg) => {
  return console.log(
    arg.map(({ quantity, price }) => ({
      quantity: quantity * 2,
      price: price * 2,
    }))
  );
};

doubleBuiltInFunc(itemsObject);

//  Q1.1 "double" for-loop func
const doubleForLoopFunc = (arg) => {
  const output = [];
  for (let i = 0; i < arg.length; i++) {
    let q = arg[i].quantity * 2;
    let p = arg[i].price * 2;
    output.push({ quantity: q, price: p });
  }
  return console.log(output);
};

doubleForLoopFunc(itemsObject);

// Q1.2 "filter" built-in func
const filterBuiltInFunc = (arg) => {
  return console.log(
    arg.filter((quantity, price) => {
      return quantity > 2 && price > 300;
    })
  );
};

filterBuiltInFunc(itemsObject);

// Q1.2 "filter" for-loop func
const filterForLoopFunc = (arg) => {
  const output = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i].quantity > 2 && arg[i].price > 300) {
      let q = arg[i].quantity;
      let p = arg[i].price;
      output.push({ quantity: q, price: p });
    }
  }
  return console.log(output);
};

filterForLoopFunc(itemsObject);

// Q1.3 "sum" built-in func
const sumBuiltInFunc = (arg) => {
  return console.log(
    arg.reduce((init, next) => {
      return init + next.quantity * next.price;
    }, 0)
  );
};

sumBuiltInFunc(itemsObject);

// Q1.3 "sum" for-loop func
const sumForLoopFunc = (arg) => {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum = sum + arg[i].quantity * arg[i].price;
  }
  return console.log(sum);
};

sumForLoopFunc(itemsObject);

// Q2
const string =
  " Perhaps !!!The Easiest-to-understand   Case   For Reduce Is    To Return The Sum Of   All The Elements In  An Array ";

const convertString = (arg) => {
  return console.log(
    string
      .replace(/[^a-z]/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
  );
};

convertString(string);

// note for Q2:
// \s: any whitespaces such as spaces, tabs and line break
// +: match one or more of the preceding tokens
// g: iterative searching, not just first time
// ^: not the following
// a-z: letters in the range of "a-z"
// i: case insenstitive

// Q3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

// const new_map = {};
// const mergedmap = [...first, ...second];
// mergedmap.forEach((ele) => {
//   if (!new_map[ele.uuid]) {
//     new_map[ele.uuid] = {
//       uuid: ele.uuid,
//       name: !ele.name ? null : ele.name,
//       role: !ele.role ? null : ele.role,
//     };
//   } else {
//     new_map[ele.uuid] = { ...new_map[ele.uuid], ...ele };
//   }
// });

// const sortedMap = Object.values(new_map).sort((a, b) => {
//   a.uuid - b.uuid;
// });

// console.log(sortedMap);

// Q3 built-in func
const merge = (arg1, arg2) => {
  let output = [...arg1, ...arg2];

  output.sort((a, b) => a.uuid - b.uuid);

  output.forEach((cur, ind) => {
    if (ind < output.length - 1) {
      output[ind].uuid === output[ind + 1].uuid
        ? ((output[ind] = { ...output[ind], ...output[ind + 1] }),
          output.splice(ind + 1, 1))
        : null;
    }
    output[ind].role ? null : (output[ind].role = null);
    output[ind].name ? null : (output[ind].name = null);
  });

  return console.log(output);
};

merge(first, second);
