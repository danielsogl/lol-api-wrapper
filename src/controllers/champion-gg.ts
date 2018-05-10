import axios from 'axios';
import { Request, Response } from 'express';
import { add } from 'url-params';

import { CHAMPION_GG_KEY } from '../util/secrets';
import { getRegionEndpoint } from '../util/url-builder';

export let handleRequest = (req: Request, res: Response) => {
  console.log(buildUrl(req.url));

  axios
    .get(buildUrl(req.url))
    .then(response => {
      res.status(response.status);
      res.json(response.data);
    })
    .catch(err => {
      res.status(err.response.status);
      res.json(err.response.data);
    });
};

function buildUrl(requestUrl: string): string {
  let url = `http://api.champion.gg/v2${requestUrl.replace('/stats', '')}`;
  // Add api key
  url = add(url, 'api_key', CHAMPION_GG_KEY);
  // Return url
  return url;
}
