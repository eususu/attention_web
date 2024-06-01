import ListAndDetail from '@/app/components/ListAndDetail'
import api from '@/app/scripts/api'

export default async function View({params, searchParams}) {
  const { page } = params
  const { hi } = searchParams
  console.log(`page=${page}`)
  console.log(`searchParams=${hi}`)
  const qa_list = await api.fetch.get_full_qalist('kaai_poc', "full", parseInt(page));
  console.log(`qa_list=${qa_list}`)

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

