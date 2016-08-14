import React from 'react'
import classes from './ComponentsList.scss'
import ComponentsListComponent from '../ComponentsListComponent'

export const ComponentsList = () => (
  <div className={classes['root']}>
    <header className={classes['header']}>
        Components List
    </header>
    <section>
        <div className={classes['component-container']}>
            <ComponentsListComponent />
        </div>
        <div className={classes['component-container']}>
            <ComponentsListComponent />
        </div>
        <div className={classes['component-container']}>
            <ComponentsListComponent />
        </div>
        <div className={classes['component-container']}>
            <ComponentsListComponent />
        </div>
    </section>
  </div>
)

export default ComponentsList
