import React, { useContext } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { ItemsContext } from "../../contexts/items"
import Checkbox from "../Checkbox";
import { useTheme } from "styled-components";
import * as S from "./styles"

function List() {
  const { items, setItems } = useContext(ItemsContext)
  const theme = useTheme()

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

     setItems(myObj)
  }

  function handleDeleteItem(item) {
    let myObj = items
    let itemIndex

    for(let element of myObj) {
      if(element.id === item.id)
        itemIndex = myObj.indexOf(element)
    }

    myObj.splice(itemIndex, 1)
    setItems(myObj)
  }

  function handleOnDragEnd(result){
    if (!result.destination) 
      return

    const myObj = Array.from(items);
    const [reorderedItem] = myObj.splice(result.source.index, 1);
    myObj.splice(result.destination.index, 0, reorderedItem);
    setItems(myObj);
  }

  function getItemStyle (isDragging, draggableStyle) {
    return ({
      backgroundColor: isDragging ? `${theme.button.hover}90` : "transparent",
      // styles we need to apply on draggables
      ...draggableStyle
    })
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <S.Container 
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <S.Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
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