interface Environment {
  production: boolean;
  shopApiUrl: string;
  stripePublishableKey: string;
}
export const environment = {
  production: true,
  shopApiUrl: "https://ythstore.com/api",
  // shopApiUrl: "https://localhost:8443/api",
  stripePublishableKey: <string>""
};
