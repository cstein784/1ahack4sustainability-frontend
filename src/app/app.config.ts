import { ApiManagerConfig } from "./services/api-manager";
import { WoosmapConfig } from "./services/woosmap/woosmap.tokens";
import { RailKitApiManagerConfig } from "./services/train-itineraries/train-itineraries.tokens";


// Configuration to connect to the Amadeus API
export const amadeusApiConfig: ApiManagerConfig = {
  gatewayUrl: 'https://test.api.amadeus.com/v1/security/oauth2',
  // TODO How to find your credentials: https://developers.amadeus.com/register
  gatewayClientId: 'ebewKjOxqycCVchAg26NGeOch9EacXXp',
  gatewayClientPrivate: '7V8xPCMfLZal1mlp',

  // Test API
  maximumConcurrentCalls: 1,
  delayBetweenRequests: 200,
  numberOfRetries: 2,
  sleepBetweenRetries: 1000
}

export const railKitApiConfig: RailKitApiManagerConfig =
{
  organization:"'RAIL-SBB'",
  userId:"USSBBRAILK",
  officeID:"BRN2S78AG",
  password : 'Amadeus@20' //TODO ask your rail mentors  for the password
}

// Configuration to connect to Woosmap API
export const woosmapApiConfig: WoosmapConfig = {
  // TODO: more information about how to get your key: https://developers.woosmap.com/get-started/#before-you-start
  apiKey: 'woos-b54d44a8-868e-3395-a144-400c32498865'
}
