// Scheduler is a stub implementation of a scheduling client.
export class Scheduler {
  constructor(...options) {
    this.options = {};
    options.forEach((optFunc) => {
      optFunc(this.options)
    })
  }

  CreateApp(project) {
    throw new Error("Not implemented");
  }

  GetApp(id) {
    throw new Error("Not implemented");
  }
}

export function WithBalancer(balancer) {
  return function(options) {
    options.balancer = balancer
  }
}

export function RoundRobin() {
  return {
    "type": "round-robin"
  }
}
