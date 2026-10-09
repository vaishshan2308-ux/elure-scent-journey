export const elure = {
  name: "ELURE",
  price: 1700,
  currency: "INR",
  complimentaryShippingOnFirstOrder: true,
};

export function shippingOffer(isFirstOrder: boolean) {
  return isFirstOrder && elure.complimentaryShippingOnFirstOrder;
}

export function orderInquiry(quantity: number) {
  const safeQuantity = Math.max(1, Math.min(5, Math.floor(quantity)));
  return `mailto:support@sarkar.store?subject=${encodeURIComponent("ELURE order enquiry")}&body=${encodeURIComponent(`Hello Sarkar, I would like to enquire about ordering ${safeQuantity} × ELURE at ₹${elure.price.toLocaleString("en-IN")} each. Please share availability and payment details.`)}`;
}