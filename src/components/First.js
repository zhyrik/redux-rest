import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getData } from '../store/actions/first'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function First({ first, getData, error, data }) {
  if (error) {
    return <div style={{color: 'red'}}>{error}</div>
  }

  return (
    <div>
      {data.map(f => <div>{f.id}</div>)}
        <button onClick={getData}>get data</button>
    </div>
  )
}

First.propTypes = {
 first: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  first: state.first.first,
  error: state.first.error,
  data: state.first.data
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(First)
