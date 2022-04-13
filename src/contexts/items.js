import { useState, useEffect, createContext } from "react";

export const ItemsContext = createContext([])

export function ItemsProvider({children}){
    const [items, setItems] = useState([])

    function handleAddingNewItem(value) {
        const id = items.length ? items.length : 0
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