import config from '../../../scripts/config'

import Tabs from "../../../components/Tabs";
import ListAndDetail from "../../../components/ListAndDetail"
import Layout from '../../page';
import { ReactElement } from 'react';
import RatedTabs from '@/app/components/RatedTabs';
import api from '@/app/scripts/api';

export default async function View({params, searchParams}) {
  const { page } = params
  const { hi } = searchParams
  console.log(`page=${page}`)
  console.log(`searchParams=${hi}`)
  const service_name = 'kaai_poc'
  const qa_list = await api.fetch.get_full_qalist(service_name, "rated_yes", parseInt(page))

  return (
    <>
      <RatedTabs defaultSelectedValue="yes"></RatedTabs>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <div className="w-full">
        </div>
        <ListAndDetail page={parseInt(page)} list={qa_list} />
        <div>
          C
        </div>
      </main>
    </>
  );
}
