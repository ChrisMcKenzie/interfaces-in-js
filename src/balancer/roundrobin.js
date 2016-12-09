// RoundRobin is a Balancer Class for giving clients a host in a roundrobin 
// fashion
export class RoundRobin {
  constructor(resolver){
    this.resolver = resolver;
  };
};
