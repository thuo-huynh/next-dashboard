'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { Employee } from '@/constants/data';
import { columns } from './colums';

export default function EmployeeTable({
  data,
  totalData
}: {
  data: Employee[];
  totalData: number;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">hehe</div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}
