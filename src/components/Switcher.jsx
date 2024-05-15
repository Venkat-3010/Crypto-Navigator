import React, { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {

  const [colorTheme, setTheme] = useDarkMode();
  const [isDarkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  }

  return (
    <div>
        <DarkModeSwitch 
        className='md:my-0 my-5'
        checked={isDarkMode}
        size={25}
        onChange={toggleDarkMode}
        />
    </div>
  )
}

export default Switcher