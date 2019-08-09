import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getUsers, returnStart } from '../store/actions/three'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function three({ fetching, error, users, getUsers, returnStart }) {
  if(fetching) {
    return <div>LOADER</div>
  }

  else if(error){
    return (<div>
      {error}
      <button onClick={returnStart}>return start</button>
    </div>)
  }
  return (
    <div style={{ border: '2px solid black'}}>
      <button onClick={getUsers}>three</button>
      {users.data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

three.propTypes = {
 error: PropTypes.object
}

const mapStateToProps = state => ({
  users: state.three.users,
  error: state.three.error,
  fetching: state.three.fetching
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  returnStart: () => dispatch(returnStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(three)
