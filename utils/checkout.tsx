export const redirectToCheckout = (id: string, email: string) => {
  window.location.href = `https://buy.stripe.com/6oE5lM1SQaXFePu8ww?prefilled_email=${email}&client_reference_id=${id}`;
};
