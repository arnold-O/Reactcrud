import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function List({ list,removeItem }) {
  return (
    <div>
      <div >
        {list.map((item) => {
          const { title, id } = item;

          return (<div key={id} className="listContan">
            
              <div style={{width:"120px"}}>{title}</div>
              <div style={{width:"70px"}}>
                <FaRegEdit className="edit-delet-cont" />
                <BsTrash onClick={()=>removeItem(id)} className="edit-delet-conttwo"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
