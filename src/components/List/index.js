import React, { useContext } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ItemsContext } from "../../contexts/items";
import Checkbox from "../Checkbox";
import * as S from "./styles"


function List() {
  const { items, setItems } = useContext(ItemsContext)

  function handleCheckUncheck(item) {   
    let myObj = items.map(element => {
      if (element.id === item.id) {
        return ({
            id: item.id,
            item: item.item,
            checked: !item.checked
        })
      }
      return element
    })

     localStorage.setItem("items", JSON.stringify(myObj))
     setItems(myObj)
  }

  function handleDeleteItem(item) {
    let myObj = items
    myObj.splice(item.id, 1)
    
    localStorage.setItem("items", JSON.stringify(myObj))
    setItems(myObj)
  }

  function handleOnDragEnd(result){
    if (!result.destination) return;

    const myObj = Array.from(items);
    const [reorderedItem] = myObj.splice(result.source.index, 1);
    myObj.splice(result.destination.index, 0, reorderedItem);

    localStorage.setItem("items", JSON.stringify(myObj))
    setItems(myObj);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list-0">
        {(provided) => (
          <S.Container {...provided.droppableProps} ref={provided.innerRef}>
            { items &&
              items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <S.Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Checkbox
                        onClick={() => handleCheckUncheck(item)}
                        checked={item.checked} 
                        item={item}
                      />
                      <div>
                        <S.TrashIcon onClick={() => handleDeleteItem(item)}/>
                      </div>
                    </S.Item>
                  )}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </S.Container>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default List;