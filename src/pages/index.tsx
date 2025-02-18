import { DataTable } from "mantine-datatable";
import companies from "../data/companies.json";

export default function BasicUsageExample() {
  return (
    <DataTable
      columns={[
        { accessor: "name" },
        { accessor: 'missionStatement', width: 400 },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
    />
  );
}
