import { MdOutlineAccessTime,MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { currencyUpdate } from "../utils/utils";

const ItemComponent = ({itemType,itemAmount,date,itemID,handleDelete,isLoading,item,itemInitial}) => {
  const amount = currencyUpdate(itemAmount)
  return (
     <div className="item-component">
      
      <section className="item-content">
        <p>{itemInitial}</p>
        <p className="type">{itemType}</p>
         <p className="date"><MdOutlineAccessTime className="icon"/>{date}</p>
         <p className="amount">{amount}</p>
         <div className="item-btn">
            <button className="btn-delete" onClick={handleDelete} disabled={isLoading}><MdDelete/></button>
            <Link to={`${item}/${itemID}`}><button type="button" className="btn-edit"><FaEdit/></button></Link>
         </div>
      </section>
    </div>
  )
}

export default ItemComponent