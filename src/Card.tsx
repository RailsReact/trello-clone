import React from "react"
import { CardContainer } from "./styles"

interface CardProps {
  text: string
}

exports const Card = ({ text }: CardProps) => {
  return (
    <CardContainer>{text}</CardContainer>
  )
}
