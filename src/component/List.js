import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function List({ list }) {
  return (
    <div>
      <div >
        {list.map((item) => {
          const { title, id } = item;

          return (<div key={id} className="listContan">
            
              <div>{title}</div>
              <div>
                <FaRegEdit className="edit-delet-cont" />
                <BsTrash />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
