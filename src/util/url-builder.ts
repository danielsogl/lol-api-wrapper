export function getRegionEndpoint(region: string): string {
  let regionEndpoint: string;

  if (!region) {
    return 'euw1.api.riotgames.com';
  }

  switch (region.toUpperCase()) {
    case 'BR':
      regionEndpoint = 'br1.api.riotgames.com';
      break;
    case 'EUNE':
      regionEndpoint = 'eun1.api.riotgames.com';
      break;
    case 'EUW':
      regionEndpoint = 'euw1.api.riotgames.com';
      break;
    case 'JP':
      regionEndpoint = 'jp1.api.riotgames.com';
      break;
    case 'KR':
      regionEndpoint = 'kr.api.riotgames.com';
      break;
    case 'LAN':
      regionEndpoint = 'la1.api.riotgames.com';
      break;
    case 'LAS':
      regionEndpoint = 'la2.api.riotgames.com';
      break;
    case 'NA':
      regionEndpoint = 'na1.api.riotgames.com';
      break;
    case 'OCE':
      regionEndpoint = 'oc1.api.riotgames.com';
      break;
    case 'TR':
      regionEndpoint = 'tr1.api.riotgames.com';
      break;
    case 'RU':
      regionEndpoint = 'ru.api.riotgames.com';
      break;
    case 'PBE':
      regionEndpoint = 'pbe1.api.riotgames.com';
      break;
    default:
      regionEndpoint = 'euw1.api.riotgames.com';
      break;
  }

  return regionEndpoint;
}
