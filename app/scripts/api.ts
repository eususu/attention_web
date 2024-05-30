import config from './config'
class FetchAPI {
  async get_full_qalist(service_name:string): Promise<any>{
    if (config.is_local()) {
      return []
    }

    const url = `http://${config.get_host()}/api/qa/${service_name}`
    const response = fetch(url)
    return response
  }
  async get_rated_qalist(service_name:string): Promise<any>{
    const url = `http://${config.get_host()}/api/qa/${service_name}`
    const response = fetch(url)
    return response
  }

  async get_summary(service_name:string) {

    if (config.is_local()) {
      return {
        summary: [
          { day: '2024-05-24', count: 22 },
          { day: '2024-05-25', count: 12 },
          { day: '2024-05-26', count: 2 },
          { day: '2024-05-27', count: 0 },
          { day: '2024-05-28', count: 2 },
          { day: '2024-05-29', count: 22 },
          { day: '2024-05-30', count: 32 },
        ],
        pie: [
          { kind:'yes', count: 271 },
          { kind:'no', count: 32 },
          { kind:'else', count: 71}
        ]
      }
    }
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