import { useState, useEffect, createContext } from "react";
import { v4 as uuid4 } from "uuid"

export const ItemsContext = createContext([])

export function ItemsProvider({children}){
    const [items, setItems] = useState([])

    function handleAddingNewItem(value) {
        const id = uuid4()
        const newItem = {
            id: id,
            item: value,
            checked: false
        }

        localStorage.setItem("items", JSON.stringify([...items, newItem])) 
        setItems([...items, newItem])    
    }

    useEffect(() => {
      function handleLoadingDataFromLocalStorage() {  
        const storedItems = JSON.parse(localStorage.getItem("items"))
        if (storedItems === null) {
          localStorage.setItem("items", JSON.stringify([]))
          setItems([])
        } else {
          setItems(storedItems)
        }
      }
  
      handleLoadingDataFromLocalStorage()
    }, [items])

    return (
        <ItemsContext.Provider 
            value={{
                items,
                setItems, 
                addNewItem: handleAddingNewItem 
            }}>
            {children}
        </ItemsContext.Provider>
    )
}