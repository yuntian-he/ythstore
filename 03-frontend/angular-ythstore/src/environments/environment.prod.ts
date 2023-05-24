interface Environment {
  production: boolean;
  luv2shopApiUrl: string;
  stripePublishableKey: string;
}
export const environment = {
  production: true,
  shopApiUrl: "http://mattstore5.us-east-1.elasticbeanstalk.com/api",
  stripePublishableKey: <string>"pk_test_51N8XmYGmKieVG20yYrcR3y478nfj2gfaNeJNxEPRxFOIp3xtKugweZOGaEw04MC6UB4wCbk8kymw5iw9dKhwxfgm00quWWBsfG"
};
