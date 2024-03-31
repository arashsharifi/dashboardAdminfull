import React from "react";

export default function TboddyActin({ transUser }) {
  const approved = "bg-green-200 text-green-800 px-3 py-1 rounded-lg";
  const pending = "bg-indigo-200 text-indigo-800 px-3 py-1 rounded-lg";
  const declined = "bg-red-200 text-red-800 px-3 py-1 rounded-lg";

  return (
    <>
      <tr className=" dark:bg-gray-800 dark:border-gray-700 rtl">
        <td className="px-6 py-4">
          <button
            className={
              transUser.status === "نپذیرفتن"
                ? declined
                : transUser.status === "پذیرفتن"
                ? approved
                : transUser.status === "انتظار"
                ? pending
                : ""
            }
          >
            {transUser.status}
          </button>
        </td>
        <td className="px-6 py-4 text-xl">{transUser.amount}</td>
        <td className="px-6 py-4 text-lg font-bold ">{transUser.date}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-14 h-14 rounded-full border-2 border-black"
            src={transUser.imge}
            alt="noot"
          />
        </th>
        <td className="px-6 py-4 text-lg font-bold ">{transUser.customer}</td>
      </tr>
    </>
  );
}
