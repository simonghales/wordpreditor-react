import React from 'react'
import classes from './<%= pascalEntityName %>.scss'


class <%= pascalEntityName %> extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <input type="text" />
      </div>
    );
  }

}

<%= pascalEntityName %>.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default <%= pascalEntityName %>
