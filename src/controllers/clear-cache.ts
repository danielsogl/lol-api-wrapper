import { clear } from 'apicache';
import { Request, Response } from 'express';

export let handleRequest = (req: Request, res: Response) => {
  clear(`summonerId-${req.params.summonerId}`);
  res.status(200).json({
    message: 'Cache cleared'
  });
};
