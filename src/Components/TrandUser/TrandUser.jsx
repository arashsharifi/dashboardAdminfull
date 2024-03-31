import React from "react";

import { FaEye } from "react-icons/fa";
export default function TrandUser({ user }) {
  console.log(user.imge);
  return (
    <li className="flex   justify-between lg:px-6 items-center p-4">
      <img
        className="w-12 h-12 rounded-full border-2 border-gray-900 "
        src={user.imge}
        alt="nooot"
      />
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-xl">{user.title}</h2>
        <p className="text-sm text-gray-700 opacity-40">{user.userName}</p>
      </div>
      <div className="p-1 flex items-center justify-center bg-gray-300 rounded-xl">
        <FaEye className="text-gray-600" />
      </div>
    </li>
  );
}
