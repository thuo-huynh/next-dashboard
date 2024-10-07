import { searchParamsCache } from '@/lib/search-params';
import EmployeeListingPage from '@/sections/employee/view/employee-listing-page';
import { SearchParams } from 'nuqs/parsers';

export const metadata = {
  title: 'Dashboard : Employees'
};

type EmployeeProps = {
  searchParams: SearchParams;
};

export default async function page({ searchParams }: EmployeeProps) {
  searchParamsCache.parse(searchParams);
  return <EmployeeListingPage />;
}
