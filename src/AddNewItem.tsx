import React , {useState} from "react"
import {AddItemButton} from "./styles"

interface AddNewItemProps {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if(showForm){
    // show item creation form here
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}