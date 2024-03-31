import React, { useState } from "react";

import { NewMembers } from "../../assets/data";
import TrandUser from "../TrandUser/TrandUser";

export default function ListTrand() {
  const [newMember, setNewMember] = useState(NewMembers);

  return (
    <div className=" mx-2 my-10 flex flex-col gap-2 border rounded-lg shadow-lg w-full  ">
      <ul className=" flex flex-col gap-2">
        {newMember.map((me) => (
          <TrandUser key={me.id} user={me} />
        ))}
      </ul>
    </div>
  );
}
