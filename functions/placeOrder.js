function placeOrder(functionArgs) {
  const {model, quantity} = functionArgs;
  console.log("GPT -> called placeOrder");
  
  // generate a random order number that is 7 digits 
  orderNum = Math.floor(Math.random() * (9999999 - 1000000 + 1) + 1000000);

  // check model and return the order number and price with 7.9% sales tax
  if (model?.toLowerCase().includes("pro")) {
    return JSON.stringify({ orderNumber: orderNum, price: Math.floor(quantity * 249 * 1.79)});
  } else if (model?.toLowerCase().includes("max")) {
    return JSON.stringify({ orderNumber: orderNum, price: Math.floor(quantity * 549 * 1.79) });
  }
  return JSON.stringify({ orderNumber: orderNum, price: Math.floor(quantity * 179 * 1.79) });
}

module.exports = placeOrder;