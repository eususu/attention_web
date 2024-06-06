import ViewLayout from "@/app/components/Layout";
import ListAndDetail from "../../../components/ListAndDetail"
import api from '@/app/scripts/api';

export default async function View({params, searchParams}) {
  const { page } = params
  const { hi } = searchParams
  console.log(`page=${page}`)
  console.log(`searchParams=${hi}`)
  const service_name = 'kaai_poc'
  const qa_list = await api.fetch.get_full_qalist(service_name, "rated", parseInt(page))

  return (
    <>
      <ViewLayout>
        <ListAndDetail page={parseInt(page)} list={qa_list} />
      </ViewLayout>
    </>
  );
}
