import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getUsers, returnStart } from '../store/actions/second'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function Second({ fetching, error, users, getUsers, returnStart }) {
  console.log(fetching)
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
      <button onClick={getUsers}>second</button>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

Second.propTypes = {
 error: PropTypes.object
}

const mapStateToProps = state => ({
  users: state.second.users,
  error: state.second.error,
  fetching: state.second.fetching
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  returnStart: () => dispatch(returnStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Second)
