function orderSummary(order) {
    let totalSum = 0;
  
    order.rows.forEach(item => {
      const itemName = item.name;
      const itemQuantity = item.amount;
      const itemPrice = item.price;
      const itemSum = itemQuantity * itemPrice;
  
      console.log(`Nimi: ${itemName}, Kogus: ${itemQuantity}, Hind: ${itemPrice}, Summa: ${itemSum}`);
      
      totalSum += itemSum;
    });
  
    console.log(`Tellimuse kogusumma: ${totalSum}`);
  }
  
  // näidistellimus
  const sampleOrder = {
    "id": 720265,
    "orderNumber": "E20210913469",
    "createdAt": "2021-09-13 11:03:08",
    "clientName": "Malle Tali",
    "deliveryType": "Omniva kuller",
    "deliveryId": 336,
    "rows": [
      {
        "articleId": 5756,
        "name": "Braun Cafe com Pinga 2800V",
        "productCode": 512300,
        "price": 12.5,
        "amount": 1,
        "vat": 0.06
      },
      {
        "articleId": 81797,
        "name": "Philips Espresso 5600K",
        "productCode": 49989,
        "price": 10.48,
        "amount": 3,
        "vat": 0.22
      },
      {
        "articleId": 78754,
        "name": "De'Longhi Cafe de olla 600O",
        "productCode": 397937,
        "price": 5.4,
        "amount": 1,
        "vat": 0.22
      }
    ]
  };
  
  // test
  orderSummary(sampleOrder);
  