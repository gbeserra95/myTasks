import React, { useState } from 'react';
import * as S from "./styles"

function Input({language, items, setItems}) {
    const [userInput, setUserInput] = useState([])

    function handleSubmit(event) {
        event.preventDefault()

        const id = items.length ? items.length : 0

        const newItem = {
            id: id,
            item: userInput,
            checked: false
        }

        localStorage.setItem("items", JSON.stringify([...items, newItem])) 

        setItems([...items, newItem])     
        setUserInput("")   
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <input
                spellCheck="false"
                type="text"
                placeholder={
                    language === "pt-br" ? "Digite sua tarefa..." :
                    language === "en" ? "Type your task..." :
                    "Entra con tu tarea..."
                }
                value={userInput}
                onChange={event => setUserInput(event.target.value)}
            />
            <button 
                type="submit"
                disabled={!userInput} >
                {
                    language === "pt-br" ? "Adicionar" :
                    language === "en" ? "Add" :
                    "Añadir"
                } 
            </button>
        </S.Form>
    )
}

export default Input;