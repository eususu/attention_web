import config from './config'
import { Summary } from './types';
class FetchAPI {
  async _fetch(url:string, headers:any):Promise<any> {
    const response = await fetch(`http://${config.get_host()}/api${url}`, {
      cache: 'no-store',
      headers: headers

    });
    console.log(`request url is ${url}`)
    const body = await response.json()
    console.log(body)
    return body 
  }
  async get_full_qalist(service_name:string, mode:string, page:number): Promise<any>{
    if (config.is_local()) {
      console.log('use local')
      return []
    }
      console.log('use remote')

    const url = `/qa/${service_name}?mode=${mode}&page=${page}`
    const body = await this._fetch(url, [])
    return body.qa_list
  }
  async get_rated_qalist(service_name:string): Promise<any>{
    const url = `/qa/${service_name}`
    const response = fetch(url)
    return response
  }

  async get_summary(service_name:string):Promise<Summary> {

    if (config.is_local()) {
      return [
          { day: '2024-05-24', total: 22, yes: 10, no: 3, empty: 1 },
          { day: '2024-05-25', total: 12, yes: 10, no: 3, empty: 1 },
          { day: '2024-05-26', total: 2, yes: 1, no: 0, empty: 0 },
          { day: '2024-05-27', total: 0, yes: 0, no: 0, empty: 0 },
          { day: '2024-05-28', total: 2, yes: 1, no: 0, empty: 1 },
          { day: '2024-05-29', total: 22, yes: 8, no: 13, empty: 1 },
          { day: '2024-05-30', total: 32, yes: 20, no: 11, empty: 1 },
        ]
    }
    const url = `/summary/${service_name}`
    const body = await this._fetch(url, [])
    return body.summary
  }

}
class LocalAPI {

  fetch = new FetchAPI()

}

const api = new LocalAPI()

export default api;