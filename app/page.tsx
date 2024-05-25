import Tabs from "./components/Tabs";

import ListAndDetail from "./components/ListAndDetail"


async function load_qainfo_list(page:number) {
  const service_name = 'kaai_poc'
  const url=`http://172.30.1.15:8008/api/qa/${service_name}?page=${page}`

  const response = await fetch(
    url,
    {
      method: 'get',
      mode: 'cors',
      cache: 'no-cache',
    }
  );
  console.log(response)
  const body = await response.json()
  console.log(body)

  return body.qa_list
}

function onSelectItem(item:any) {
  console.log(item)

}
export default async function Home() {
  const qa_list = await load_qainfo_list(0)


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <Tabs></Tabs>
      </div>
      <ListAndDetail list={qa_list}/>
      <div>
        C
      </div>
    </main>
  );
}
