import * as resolver from "scheduler"

// RoundRobin is a Balancer Class for giving clients a host in a roundrobin 
// fashion
export class RoundRobin {
  constructor(resolver){
    if(arguments.length < 1) {
      throw new Error("resolver required argument")
    }

    if(cp instanceof resolver.Resolver) {
      throw new Error("first argument must be of type Resolver")
    }

    this.resolver = resolver;
  };
};
