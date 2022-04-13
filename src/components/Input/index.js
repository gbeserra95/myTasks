import { useContext } from 'react';
import { LanguageContext } from '../../contexts/language';
import { ItemsContext } from '../../contexts/items';
import React, { useState } from 'react';
import * as S from "./styles"

function Input() {
    const { language } = useContext(LanguageContext)
    const { addNewItem } = useContext(ItemsContext)
    const [userInput, setUserInput] = useState([])

    function handleSubmit(event) {
        event.preventDefault()

        addNewItem(userInput)
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