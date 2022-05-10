import React from 'react'

interface CategoryProps {
    name: string
    color: string
    selected: boolean
    onClick: () => void
}



export default function Category({
    name,
    color,
    onClick,
    selected,
}: CategoryProps) {
    const defaultColor = 'bg-gray-500'
    function changeColor() {
        if (selected) {
            document.getElementById("ID")!.style.backgroundColor=color;
            selected = false;
        } else {
            document.getElementById("ID")!.style.backgroundColor=defaultColor;
            selected = true;
        }
    }
    return <button id="ID" onClick={changeColor}>Category</button>
}
