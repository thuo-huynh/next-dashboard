import { searchParamsCache } from '@/lib/search-params';
import ProductListingPage from '@/sections/product/view/product-listing';
import { SearchParams } from 'nuqs/parsers';

type PageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Product'
};

export default async function Page({ searchParams }: PageProps) {
  searchParamsCache.parse(searchParams);

  return <ProductListingPage />;
}
