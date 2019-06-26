import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import styles from './styles'

const Demo = ({ classes }) => (
	<div className={`${classes.root}`}>
		<Button className={classes.btn} variant="outlined">
			hocs are the pattern for me!
		</Button>
	</div>
)

Demo.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Demo)
