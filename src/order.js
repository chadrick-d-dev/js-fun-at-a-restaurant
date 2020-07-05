function takeOrder(order, type) {
  if (type.length !== 3 && order.orderType === "delivery") {
    type.push(order);
  }
}

function refundOrder(number, type) {
  for (var i = 0; i < type.length; i++) {
    if (number === type[i].orderNumber) {
      type.splice(i, 1);
    }
  }
}

function listItems(type) {
  return `${type[0].item}, ${type[1].item}, ${type[2].item}`;
}

function searchOrder(type, item) {
  for (var i=0; i<type.length; i++) {
    if (type[i].item.includes(item)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
