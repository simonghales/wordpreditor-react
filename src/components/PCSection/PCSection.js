import React from 'react'
import classes from './PCSection.scss'

export const PCSection = (props) => (
  <div className={classes['PCSection']}>
    <h1>PCSection</h1>
    <h2>{props.data.label}</h2>
  </div>
)

export default PCSection
