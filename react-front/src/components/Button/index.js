import React from "react";

import { Button as ContainerButton } from "./styles"

export default function Button({ children, ...props }) {
    // em vez de colocar um por um, exemplo: onClick, onChange etc... coloca o "...props"

    return <ContainerButton { ...props }>{children}</ContainerButton>
}