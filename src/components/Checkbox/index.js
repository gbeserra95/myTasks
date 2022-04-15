import React, {useRef, useState, useEffect, useContext} from 'react';
import { ItemsContext } from '../../contexts/items';
import * as S from "./styles"

function Checkbox({onClick, checked, item}) {
  const ref = useRef(null)

  const [itemToEdit, setItemToEdit] = useState(false)
  const [updatedItem, setUpdatedItem] = useState(item.item)

  const { items, setItems} = useContext(ItemsContext)

  function handleSubmit(event) {
    event.preventDefault()

    if(updatedItem) {
      let myObj = items.map(element => {
        if (element.id === item.id) {
          return ({
              id: item.id,
              item: updatedItem,
              checked: item.checked
          })
        }

        return element
      })
        
       localStorage.setItem("items", JSON.stringify(myObj))
       setItems(myObj)
       setItemToEdit(false)
    } else {
      setItemToEdit(false)
      setUpdatedItem(item.item)
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (itemToEdit && ref.current && !ref.current.contains(event.target)) {
        setItemToEdit(false)
        setUpdatedItem(item.item)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ itemToEdit, item.item ])

  return (
    <S.Container checked={checked}>
        {
          checked ? 
          <S.Checked onClick={onClick} checked={checked}/> : 
          <S.Unchecked onClick={onClick} checked={checked}/>
        }
        {
          itemToEdit ? 
          <form onSubmit={handleSubmit}>
            <input ref={ref} autoFocus type="text" value={updatedItem} onChange={(event) => setUpdatedItem(event.target.value)} />
          </form> :
          <p onDoubleClick={() => setItemToEdit(true)}>{item.item}</p>
        }
    </S.Container>
  );
}

export default Checkbox;