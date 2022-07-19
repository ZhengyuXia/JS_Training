// Q1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455-983-0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455-983-0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455-345-0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321-345-0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// Q1 - Method 1: bulti-in map
let tableDiv = document.createElement("div");
document.body.append(tableDiv);
let tableHeader1 = document.createElement("h2");
tableHeader1.textContent = "Q1.TABLE BY MAP";
tableDiv.append(tableHeader1);
let table1 = document.createElement("table");
table1.className = "table";
tableDiv.append(table1);

const tableRow = document.createElement("tr");
table1.append(tableRow);
tableInfo.tableHeader.map((val0) => {
  const ele = document.createElement("th");
  ele.textContent = val0;
  tableRow.append(ele);
});

tableInfo.tableContent.map((val1) => {
  const tableRow = document.createElement("tr");
  table1.append(tableRow);
  Object.values(val1).map((val2, index) => {
    const ele = document.createElement("td");
    if (index === 3) {
      ele.id = "address";
    }
    ele.textContent = val2;
    tableRow.append(ele);
  });
});

// Q1 - Method 2: for loop
let tableHeader2 = document.createElement("h2");
tableHeader2.textContent = "Q1.TABLE BY FOR-LOOP";
tableDiv.append(tableHeader2);
let table2 = document.createElement("table");
table2.className = "table";
tableDiv.append(table2);
for (let i = 0; i <= tableInfo.tableContent.length; i++) {
  let tableRow = document.createElement("tr");
  table2.append(tableRow);
  if (i === 0) {
    for (let j = 0; j < tableInfo.tableHeader.length; j++) {
      let tableHeader = document.createElement("th");
      tableHeader.textContent = tableInfo.tableHeader[j];
      tableRow.append(tableHeader);
    }
  } else {
    let tableNameData = document.createElement("td");
    tableNameData.textContent = tableInfo.tableContent[i - 1]["Student Name"];
    let tableAgeData = document.createElement("td");
    tableAgeData.textContent = tableInfo.tableContent[i - 1].Age;
    let tablePhoneData = document.createElement("td");
    tablePhoneData.textContent = tableInfo.tableContent[i - 1].Phone;
    let tableAddressData = document.createElement("td");
    tableAddressData.id = "address";
    tableAddressData.textContent = tableInfo.tableContent[i - 1].Address;
    tableRow.append(
      tableNameData,
      tableAgeData,
      tablePhoneData,
      tableAddressData
    );
  }
}

// Q2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// Q2 - Answer
let listDiv = document.createElement("div");
document.body.append(listDiv);
let listH2 = document.createElement("h2");
listH2.textContent = "Q2.LIST";
listDiv.append(listH2);

let olp = document.createElement("p");
olp.textContent = "An ordered technologies list";
listDiv.append(olp);
let ol = document.createElement("ol");
listDiv.append(ol);
let olNodes = list.map((ele) => {
  let li = document.createElement("li");
  li.textContent = ele;
  return li;
});
ol.append(...olNodes);

let ulp = document.createElement("p");
ulp.textContent = "An unordered technologies list";
listDiv.append(ulp);
let ul = document.createElement("ul");
listDiv.append(ul);
let ulNodes = list.map((ele) => {
  let li = document.createElement("li");
  li.textContent = ele;
  return li;
});
ul.append(...ulNodes);

// Q3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

// Q3 - Answer
let menuDiv = document.createElement("div");
document.body.append(menuDiv);
let menuH2 = document.createElement("h2");
menuH2.textContent = "Q3.DROPDOWN MENU";
menuDiv.append(menuH2);

let menu = document.createElement("select");
menuDiv.append(menu);
dropDownList.map((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.textContent = ele.content;
  option.className = "option";
  menu.append(option);
});

//Q2/Q3 which way more efficient/popular?
//menu.append(...menuNodes);
//menu.options.selectedIndex = 0;
