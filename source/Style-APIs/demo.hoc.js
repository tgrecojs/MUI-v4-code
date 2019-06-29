import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { object } from 'prop-types'
import styles from './styles.shared'

const Demo = ({ classes }) => (
	<div className={`${classes.root}`}>
		<Button className={`${classes.btn}`} variant="contained" size="small">
			hocs are the pattern for me!
		</Button>
	</div>
)

Demo.propTypes = {
	classes: object.isRequired
}

export default withStyles(styles)(Demo)
