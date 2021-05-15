function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
  return deliveryOrders;
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice([i], 1);
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i <deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  var results = items.join(", ");
  return results;
}

function searchOrder(orders, items) {
  var deliveryOrders = [];
  for (var i = 0; i < orders.length; i++) {
    deliveryOrders.push(orders[i].item);
  }
  if (deliveryOrders.includes(items)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
