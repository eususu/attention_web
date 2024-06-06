import config from '../../../scripts/config'

import Tabs from "../../../components/Tabs";
import ListAndDetail from "../../../components/ListAndDetail"
import Layout from '../../../components/Layout';
import { ReactElement } from 'react';
import RatedTabs from '@/app/components/RatedTabs';
import api from '@/app/scripts/api';
import ViewLayout from '../../../components/Layout';

export default async function View({params, searchParams}) {
  const { page } = params
  const { hi } = searchParams
  console.log(`page=${page}`)
  console.log(`searchParams=${hi}`)
  const service_name = 'kaai_poc'
  const qa_list = await api.fetch.get_full_qalist(service_name, "rated_yes", parseInt(page))

  return (
    <>
      <ViewLayout>
        <ListAndDetail page={parseInt(page)} list={qa_list} />
      </ViewLayout>
    </>
  );
}
