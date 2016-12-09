// Manager is a class that implements functionality for deploying a project to
// a given scheduling platform
export class Manager {
  constructor(scheduler) {
    this.scheduler = scheduler
  }

  GetProject(id) {
    return this.scheduler.GetApp(id)
  }

  DeployProject(project) {
    return this.scheduler.CreateApp(project)
  }
}
