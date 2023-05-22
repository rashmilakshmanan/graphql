const { RESTDataSource } = require('apollo-datasource-rest');

class ProjectService extends RESTDataSource {
  constructor() {
    super();
   // this.baseURL = 'http://localhost:3000';
   // this.baseURL = 'https://cip-1621266427-iam-sit.aipacn.com'
  }

  getProjects() {
    return this.get('/projects')
      .then((projects) => {
        return projects;
      })
      .catch((error) => console.log(error));
  }

  async findProjectById(id) {
    return await this.get(`/projects/${id}`);
  }
  async postUserId(movie) {
    return this.post(
      `/api/postUserDetails`, // path
      {body:movie}, // request body
    );
  }
  async generateToken() {
    return this.post(
      `/platform/enabler/iam/token/1.0.0/token`, // path
      { body: `grant_type=password&username=dir/experiencebuilder@cip.accenture.com@cip.accenture.com&password=Digitalinsurance786#&scope=PRODUCTION`,
        }, // request body
    )
  }
  async publishAPI() {
    return this.post(
      `/xaas/enabler/rigevent/1.0.0/publish`, // path
      {
       // method:this.post,
        body: { "id": "e60e628b-2400-413e-b486-664a3d8bc752--11", "type": "server.request", "specversion": "0.2", "source": "rig", "contenttype": "application/json", "deo": { "projectName": "commerce", "event": { "eventName": "SearchEvent", "eventData": { "user": "e5ea5a3e-94ed-4d6e-8399-8e5309468e50", "query": "ola", "channel": "web", "action": "click on home search icon", "refererpage": "https://beautyrepo.vercel.app/product", "device_type": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.42", "sessionId": "cf0f05eb-5331-4028-809b-246b3eeeca70" } }} },
       headers:{"Authorization":"Bearer 477b50ac-5200-3095-a58c-385fd88e9422"}
      }, // request body
    )
  }
}
module.exports = ProjectService;
