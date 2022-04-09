import React from "react"
import * as S from "./styles"
import Checkbox from "../Checkbox";

function List({items, setItems}) {

  function handleCheckUncheck(item) {
    let myObj = items
    myObj[item.id] = {
       id: item.id,
       item: item.item,
       checked: !item.checked
     }
     localStorage.setItem("items", JSON.stringify(myObj))
     setItems(myObj)
  }

  function handleDeleteItem(item) {
    let myObj = items
    myObj.splice(item.id, 1)

    for (let i = 0; i < myObj.length;  i++) {
      myObj[i].id = i
    }
    
    localStorage.setItem("items", JSON.stringify(myObj))
    setItems(myObj)
  }

  return (
    <S.Container>
      { items &&
        items.map(item => React.Children.toArray(
          <S.Item>
            <Checkbox
              onClick={() => handleCheckUncheck(item)}
              checked={item.checked} 
              item={item}
            />
            <div>
              <S.TrashIcon onClick={() => handleDeleteItem(item)}/>
            </div>
          </S.Item>
        ))
      }
    </S.Container>
  )
}

export default List;