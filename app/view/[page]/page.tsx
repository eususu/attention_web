import config from '../../scripts/config'

import Tabs from "../../components/Tabs";
import ListAndDetail from "../../components/ListAndDetail"


async function load_qainfo_list(page:number) {
  const service_name = 'kaai_poc'
  const url=`http://${config.get_host()}/api/qa/${service_name}?page=${page}`
  console.log(`load_qainfo_list - host: ${url}`)

  const response = await fetch(
    url,
    {
      method: 'get',
      mode: 'cors',
      cache: 'no-cache',
    }
  );
  const body = await response.json()
  console.log(`qa_list count is ${body.qa_list.length}`)

  return body.qa_list
}

function onSelectItem(item:any) {
  console.log(item)

}
export default async function View({params, searchParams}) {
  const { page } = params
  const { hi } = searchParams
  console.log(`page=${page}`)
  console.log(`searchParams=${hi}`)
  const qa_list = await load_qainfo_list(parseInt(page))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
      </div>
      <ListAndDetail page={parseInt(page)} list={qa_list}/>
      <div>
        C
      </div>
    </main>
  );
}
