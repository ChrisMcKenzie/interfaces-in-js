// Base Classes
import * as deployment from "deployment"
import * as scheduler from "scheduler"

// Schedulers
import * as marathon from "scheduler/marathon"
import * as mock from "scheduler/mock"

// Balancer
import * as balancer from "balancer"

// Resolver
import * as consul from "resolver/consul"

console.log("Starting DeploymentManager")

var resolver = new consul.Resolver(consul.DefaultClient(), "marathon")

var marathonDM = new deployment.Manager(
  new marathon.MarathonScheduler(
    scheduler.WithBalancer(new balancer.RoundRobin(resolver))
  )
)
console.log(marathonDM)

var mockDM = new deployment.Manager(new mock.MockScheduler())
console.log(mockDM)

// mockDM.GetProject("test")
