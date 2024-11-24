
const AddInputComponent = ({handleAdd,handleTextID, item,inputTextId,id,itemName,itemAmount,handleInput,isLoading}) => {
  return (
     <form onSubmit={handleAdd}>
    <div className={item} onClick={handleTextID}>
        <span>{itemName}</span>
    </div>
   {inputTextId === id &&  <div className="item">
          <input type="text" className="number-input" name={itemName} value={itemAmount} onChange={handleInput}/>
          <button type="submit" className="item-btn" disabled={isLoading}>Add</button>
      </div>}
    </form>
  )
}

export default AddInputComponent