import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import classNames from 'classnames'

class TestComponent extends Component {
  static propTypes = {}
  static defaultProps = {}

  render() {
    const testA = (
      <div
        alt="sadasdads"
        href="Asdasd"
        target="adasda"
      >Test 2</div>
    )

    const testB = (
      <div alt="sadasdads" href="Asdasd">Test 2</div>
    )

    return (
      <div href="asdasd" target="adasda">
        Test
      </div>
    )
  }
}

export default TestComponent
