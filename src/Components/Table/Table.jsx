import React, { useState } from "react";
import TboddyActin from "./TboddyActin";

export default function Table({ datasTable }) {
  const [dataTable, setDataTable] = useState(datasTable);
  return (
    <div className="relative overflow-x-auto border rounded-lg m-2 my-10 mt-0  w-full shadow-lg shadow-black rtl ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg shadow-black">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              وعضیت
            </th>
            <th scope="col" className="px-6 py-3">
              میزان حقوق
            </th>
            <th scope="col" className="px-6 py-3">
              تاریخ روز
            </th>
            <th scope="col" className="px-6 py-3">
              کارمندان
            </th>
            <th scope="col" className="px-6 py-3">
              نام کاربران
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((transUser) => (
            <TboddyActin key={transUser.id} transUser={transUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
