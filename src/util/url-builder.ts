import { RIOT_ENDPOINT } from './settings';
import { DEFAULT_REGION } from './secrets';

export function getRegionEndpoint(region?: string): string {
  let regionEndpoint: string;

  if (!region) {
    region = DEFAULT_REGION;
  }

  switch (region.toUpperCase()) {
    case 'BR':
      regionEndpoint = 'br1.' + RIOT_ENDPOINT;
      break;
    case 'EUNE':
      regionEndpoint = 'eun1.' + RIOT_ENDPOINT;
      break;
    case 'EUW':
      regionEndpoint = 'euw1.' + RIOT_ENDPOINT;
      break;
    case 'JP':
      regionEndpoint = 'jp1.' + RIOT_ENDPOINT;
      break;
    case 'KR':
      regionEndpoint = 'kr.' + RIOT_ENDPOINT;
      break;
    case 'LAN':
      regionEndpoint = 'la1.' + RIOT_ENDPOINT;
      break;
    case 'LAS':
      regionEndpoint = 'la2.' + RIOT_ENDPOINT;
      break;
    case 'NA':
      regionEndpoint = 'na1.' + RIOT_ENDPOINT;
      break;
    case 'OCE':
      regionEndpoint = 'oc1.' + RIOT_ENDPOINT;
      break;
    case 'TR':
      regionEndpoint = 'tr1.' + RIOT_ENDPOINT;
      break;
    case 'RU':
      regionEndpoint = 'ru.' + RIOT_ENDPOINT;
      break;
    case 'PBE':
      regionEndpoint = 'pbe1.' + RIOT_ENDPOINT;
      break;
    default:
      regionEndpoint = 'euw1.' + RIOT_ENDPOINT;
      break;
  }

  return regionEndpoint;
}
