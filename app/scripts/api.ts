import config from './config'
class FetchAPI {
  async get_rated_qalist(service_name:string): Promise<any>{
    const url = `http://${config.get_host()}/api/qa/${service_name}`
    const response = fetch(url)
    return response
  }

  async get_summary(service_name:string) {
    const url = `http://${config.get_host()}/api/summary/${service_name}`
    console.log(url)
    const response = await fetch(url)
    const body = await response.json()
    console.log(body)
    return body.summary
  }

}
class LocalAPI {

  fetch = new FetchAPI()

}

const api = new LocalAPI()

export default api;