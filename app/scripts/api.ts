import config from './config'
import { Summary } from './types';
async function _fetch(url: string, headers: any): Promise < any > {
  const response = await fetch(`http://${config.get_host()}/api${url}`, {
    cache: 'no-cache',
    headers: headers

  });
  console.log(`request url is ${url}`)
    const body = await response.json()
    console.log(body)
    return body
}

async function client_fetch(url: string, headers: any): Promise < any > {
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: headers

  });
  console.log(`request url is ${url}`)
    const body = await response.json()
    console.log(body)
    return body
}

class FetchAPI {
  async get_full_qalist(service_name:string, mode:string, page:number): Promise<any>{
    if (config.is_local()) {
      console.log('use local')
      return [
        {id:1, query:'hi', answer:'hi', rate:'YES', date:'2024-04-04 11:11:11'},
        {id:2, query:'h2i', answer:'hi2', rate:'YES', date:'2024-04-04 11:11:11'},

      ]
    }
      console.log('use remote')

    const url = `/qa/${service_name}?mode=${mode}&page=${page}`
    const body = await _fetch(url, [])
    return body.qa_list
  }
  async get_rated_qalist(service_name:string): Promise<any>{
    const url = `/qa/${service_name}`
    const response = fetch(url)
    return response
  }

  async get_summary(service_name:string):Promise<Summary> {
    console.log('begin summary')
    const now = new Date();
    console.log(now)
    const before_month = new Date(now.setMonth(now.getMonth()-1));
    console.log(before_month)
    const start_date = `${before_month.getFullYear()}-${before_month.getMonth()+1}-${before_month.getDate()}`
    console.log(start_date)


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
    const url = `/summary/${service_name}?start_date=${start_date}`
    const body = await _fetch(url, [])
    return body.summary
  }

} // end of FetchAPI


class RateAPI {
  async rate_single(service_name:string, uuid:string):Promise<any> {
    const url = `http://${config.get_host()}/api/rate/${service_name}?uuid=${uuid}`
    const body = await client_fetch(url, [])
    console.log(body)
    return body
  }

}

class LocalAPI {

  fetch = new FetchAPI()
  rate = new RateAPI()

}

const api = new LocalAPI()

export default api;