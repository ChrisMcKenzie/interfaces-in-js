// Scheduler is a stub implementation of a scheduling client.
export class Scheduler {
  constructor(...options) {
    this.options = {};
    options.forEach((optFunc) => {
      optFunc(this.options)
    })
  }

  CreateApp(project) {
    console.log("CreateApp Not implemented")
  }

  GetApp(id) {
    console.log("GetApp Not implemented")
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
