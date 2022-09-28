export const redirectToCheckout = (id: string, email: string) => {
  window.location.href = `https://buy.stripe.com/test_cN29D2gM05yL6vC3cc?prefilled_email=${email}&client_reference_id=${id}`;
};
