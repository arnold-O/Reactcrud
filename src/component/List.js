import React from 'react'
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function List() {
  return (
    <div>
        <div className='listContan'>
            <div>
                name
            </div>
            <div >
            <FaRegEdit className='edit-delet-cont' />
            <BsTrash />
            </div>
        </div>



      
    </div>
  )
}
