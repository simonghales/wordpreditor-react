import React from 'react'
import classes from './Header.scss'
var FontAwesome = require('react-fontawesome');

export const Header = () => (
  <div className={classes['root']}>
      <div className={classes['create-components-list']}>
        <div className={classes['create-component__component']}>
          <FontAwesome name='folder' />
        </div>
        <div className={classes['create-component__component']}>
          <FontAwesome name='font' />
        </div>
        <div className={classes['create-component__component']}>
          <FontAwesome name='paragraph' />
        </div>
        <div className={classes['create-component__component']}>
          <FontAwesome name='picture-o' />
        </div>
      </div>
  </div>
)

export default Header
