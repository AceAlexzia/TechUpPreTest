// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  // เริ่มเขียนโค้ดตรงนี้
  var reply = "";

  for (let i = 0; i < orders.length; i++) {
    if(orders[i].total >= 6000)
    {
      reply += "Order Id " + orders[i].orderId + " : Shipping is free.\n"
    }
    else if (orders[i].total >= 3000)
    {
      reply += "Order Id " + orders[i].orderId + " : Shipping cost is 250 Baht.\n"
    }
    else
    {
      reply += "Order Id " + orders[i].orderId + " : Shipping cost is 500 Baht.\n"
    }

  }
  return reply;
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
