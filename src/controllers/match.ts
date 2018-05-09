import axios from 'axios';
import { Request, Response } from 'express';
import { add } from 'url-params';

import { API_KEY } from '../util/secrets';
import { getRegionEndpoint } from '../util/url-builder';

export let handleRequest = (req: Request, res: Response) => {
  axios
    .get(buildUrl(req.url, req.query.region))
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
  let url = `https://${getRegionEndpoint(
    region
  )}/lol/match/v3${requestUrl.replace('/match', '')}`;
  // Add api key
  url = add(url, 'api_key', API_KEY);
  // Return url
  return url;
}
