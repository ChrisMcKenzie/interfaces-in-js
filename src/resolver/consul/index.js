import * as resolver from 'resolver'

export class Resolver extends resolver.Resolver {
  constructor(client, serviceName) {
    super();

    this.client = client
    this.service = serviceName
  }
}

export function DefaultClient() {
  return {}
}
