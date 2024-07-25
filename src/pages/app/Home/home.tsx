import {Helmet} from 'react-helmet-async';

import {Breadcrumb} from '@/components/Breadcrumb/breadcrumb';
import {Card} from '@/components/Card/card';

import {breadcrumbItems} from './data';

export function Home() {
  return (
    <>
      <Helmet title="Produtos" />
      <Breadcrumb items={breadcrumbItems} />
      <Card />
    </>
  );
}
