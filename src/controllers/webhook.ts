import { Request, Response } from 'express'

class Webhook {
  public handler(req: Request, res: Response) {
    return res.status(201).send()
  }
}

export default new Webhook()
