import { Request, Response } from 'express';
import pjson from 'pjson';

export let getInfo = (req: Request, res: Response) => {
  res.status(200).json({
    name: 'League of Legends API Wrapper',
    version: pjson.version,
    author: pjson.author,
    contributors: pjson.contributors,
    repository: pjson.repository.url
  });
};
