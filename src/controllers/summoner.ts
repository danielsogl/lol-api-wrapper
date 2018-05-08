import axios from 'axios';
import { Request, Response } from 'express';
import { add } from 'url-params';

import { API_KEY } from '../util/secrets';
import { getRegionEndpoint } from '../util/url-builder';

export let handleRequest = (req: any, res: Response) => {
  if (!(req.url as string).includes('/by-name')) {
    const splitArray: string[] = (req.params[0] as string).split('/');
    req.apicacheGroup = `summonerId-${splitArray[splitArray.length - 1]}`;
  }

  axios
    .get(buildUrl(req.url, req.params.region))
    .then(response => {
      res.status(response.status);
      res.json(response.data);
    })
    .catch(err => {
      res.status(500).json({
        error: 500,
        message: 'Internal Server Error'
      });
    });
};

function buildUrl(requestUrl: string, region: string): string {
  let url = `https://${getRegionEndpoint(region)}/lol/summoner/v3${requestUrl}`;
  // Add api key
  url = add(url, 'api_key', API_KEY);
  // Return url
  return url;
}
