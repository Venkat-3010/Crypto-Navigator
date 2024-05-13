import React, { useState, useEffect } from 'react'

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(localStorage.theme)
    const colorTheme = isDarkMode === "dark" ? "light" : "dark"

    useEffect(() => {
        document.getElement.classList.remove(colorTheme);
        document.getElement.classList.add(isDarkMode);

        localStorage.setItem("theme", isDarkMode);
    }, [isDarkMode, colorTheme])

    return [colorTheme, setDarkMode]
}

export default useDarkMode;