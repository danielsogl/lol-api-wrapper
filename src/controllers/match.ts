import axios from 'axios';
import { Request, Response } from 'express';
import { add } from 'url-params';

import { API_KEY } from '../util/secrets';
import { getRegionEndpoint } from '../util/url-builder';

export let handleRequest = (req: any, res: Response) => {
  if ((req.url as string).includes('by-account')) {
    const splitArray: string[] = (req.params[0] as string).split('/');
    req.apicacheGroup = `accountId-${splitArray[splitArray.length - 1]}`;
  }

  axios
    .get(buildUrl(req.url, req.query.region))
    .then(response => {
      res.status(response.status);
      res.json(response.data);
    })
    .catch(err => {
      res.status(err.response.status);
      res.json(err.response.data);
    });
};

function buildUrl(requestUrl: string, region: string): string {
  let url = `https://${getRegionEndpoint(
    region
  )}/lol/match/v3${requestUrl.replace('/match', '')}`;
  // Add api key
  url = add(url, 'api_key', API_KEY);
  // Return url
  return url;
}
