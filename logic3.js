// create a new array if facilitygroupcode and facilities code are same and show all new elements and new string

let facility = {
  facilities: [
    {
      code: 90,
      facilityGroupCode: 91,
      facilityTypologyCode: 15,
      content: "umesh is best programmer",
    },
    {
      code: 87,
      facilityGroupCode: 85,
      facilityTypologyCode: 15,
      content: "umesh is best software developer",
    },

    {
      code: 92,
      facilityGroupCode: 62,
      facilityTypologyCode: 25,
      content: "umesh is best",
    },
    {
      code: 68,
      facilityGroupCode: 11,
      facilityTypologyCode: 10,
      content: "umesh is good",
    },
  ],
};

let facilityGroup = {
  facilityGroups: [
    { code: 78, content: "green programmer -asia" },
    { code: 79, content: "green programmer -india" },
    { code: 80, content: "green " },
    { code: 81, content: "programmer" },
  ],
};
let newContentArray = [];
let content;
const getNewContent = () => {
  facility.facilities.map((fa) => {
    facilityGroup.facilityGroups.map((sg) => {
      if (fa.code === sg.code) {
        content = {
          code: fa.code,
          facilityGroupCode: sg.code,
          topologyCode: fa.facilityTypologyCode,
          content: sg.content,
        };

        newContentArray.push(content);
      }
    });
  });
  console.log(newContentArray);
};

getNewContent();

// problem 12 find shivani shukla user id

const employee = [
  {
    id: "123",
    fName: "ayush",
    lName: "sharma",
  },
  {
    id: "124",
    fName: "shivani",
    lName: "sharma",
  },
  {
    id: "125",
    fName: "amardeep",
    lName: "verma",
  },
  {
    id: "126",
    fName: "shivani",
    lName: "shukla",
  },
];

const departMent = [
  {
    empId: "123",
    dept: "software eng",
  },
  {
    empId: "124",
    dept: "backend",
  },
  {
    empId: "125",
    dept: "frontend",
  },
  {
    empId: "126",
    dept: "programmer",
  },
];

const userId = employee.find(
  (em) => em.fName === "shivani" && em.lName === "shukla"
);
console.log(userId);

// problem 13 add employee first name  and last name in department table

const dept = departMent.map((de) => {
  const { fName, lName } = employee.find((emm) => emm.id === de.empId);
  return { ...de, fName, lName };
});
console.log(dept);

// problem 14 show list of the orders for customer with the id 13  that have  not been deliverd

const orders = [
  {
    orderId: "123",
    customerId: "135",
    delivered: true,
    items: [
      { productId: "123", price: 80 },
      { productId: "167", price: 90 },
    ],
  },
  {
    orderId: "124",
    customerId: "136",
    delivered: true,
    items: [
      { productId: "1231", price: 180 },
      { productId: "1671", price: 190 },
    ],
  },
  {
    orderId: "13",
    customerId: "137",
    delivered: false,
    items: [
      { productId: "13", price: 70 },
      { productId: "14", price: 50 },
    ],
  },
];

const checkDelivery = (givenId) => {
  const nonDeliverOrder = orders.filter(
    (order) => order.customerId === givenId && !order.delivered
  );
  console.log(nonDeliverOrder);
};
checkDelivery("137");

// problem 15 have all the orders been delivered
const deliver = orders.every((order) => order.delivered);
console.log(deliver);
