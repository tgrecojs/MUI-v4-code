import React from 'react'
import ReactDOM from 'react-dom'
import HookDemo from './demo.hook'
import StyledDemo from './demo.styled'
import HOCDemo from './demo.hoc'

const App = () => (
	<>
		<HookDemo />
		<StyledDemo />
		<HOCDemo />
	</>
)

ReactDOM.render(<App />, document.querySelector('#root'))
