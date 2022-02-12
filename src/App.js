import React, { useState, useCallback } from 'react'
import DemoOutput from './DemoOutput'
import MyParagraph from './MyParagraph'

import './App.css'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowShowParagraph, setAllowShowParagraph] = useState(false)

  console.log('App Running')

  //? useCallback() saves functions, arrays and objects in memory, only re-evlauating them if the dependencies change.
  //* it will save the inital prop values, updating them through dependencies entered only.
  //! Use useCallback() and React.memo() to cut the branch to save react from re-evaluating irrelevant components.
  // the function is used in the component file by using export default React.memo(componentName), AND WRAPPING the function you want saved as if a useEffect function. (with dependencies)
  const showParagraphHandler = useCallback(() => {
    if (allowShowParagraph) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowShowParagraph])

  const allowToggleHandler = () => {
    setAllowShowParagraph(true)
  }

  return (
    <div className='App'>
      <DemoOutput show={showParagraphHandler} />
      <button onClick={showParagraphHandler}>toggle paragraph</button>
      <button onClick={allowToggleHandler}>Allow toggle paragraph</button>
    </div>
  )
}

export default App
