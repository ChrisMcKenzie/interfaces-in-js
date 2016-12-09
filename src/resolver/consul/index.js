export class Resolver {
  constructor(client, serviceName) {
    this.client = client
    this.service = serviceName
  }
}

export function DefaultClient() {
  return {}
}
