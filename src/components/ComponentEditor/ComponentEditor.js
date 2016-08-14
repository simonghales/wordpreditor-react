import React from 'react'
import classes from './ComponentEditor.scss'

export const ComponentEditor = () => (
  <div className={classes['root']}>
    <header className={classes['header']}>
      Name of Element
    </header>
    <nav className={classes['nav']}>
      <div className={[classes['nav__link'],classes['state--active']].join(' ')}>
        Main
      </div>
      <div className={classes['nav__link']}>
        Size
      </div>
    </nav>
  </div>
)

export default ComponentEditor
