import React from 'react'

import MyParagraph from './MyParagraph'

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING')
  return <MyParagraph>{props.show ? 'this is new' : ''}</MyParagraph>
}

export default React.memo(DemoOutput)
//! React.memo() to tell react to re-exicute only if the prop values change
