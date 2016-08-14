import React from 'react'
import classes from './ComponentsListComponent.scss'

export const ComponentsListComponent = () => (
  <div className={classes['root']}>
    <div className={classes['icon']}></div>
    <div className={classes['info']}>
      <div className={classes['name']}>Component Name</div>
      <div className={classes['children']}>5 children</div>
    </div>
  </div>
)

export default ComponentsListComponent
