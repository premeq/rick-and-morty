import { Character } from "@/features/cardspace/types/types";
import Image from "next/image";

export const CardCharacter = (data: Character) => {
  return (
    <div className="m-3 ring-2 rounded p-1 ring-yellow-800 bg-slate-400">
      <ul className="text-center" style={{ width: "200px", height: "282px" }}>
        <li>
          <Image
            className="rounded-t"
            src={data.image}
            width={200}
            height={200}
          />
        </li>
        <li className="text-xl truncate overflow-hidden mx-1">{data.name}</li>
        <li className="space-x-2">
          <span>{data.gender}</span>
          <span>{data.species}</span>
        </li>
        <li className="space-x-1">
          <span className="text-sm">Status:</span>
          <span>{data.status}</span>
        </li>
      </ul>
    </div>
  );
};