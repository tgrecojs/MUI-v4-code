import React from 'react'
import { Button } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import styles from './styles'

const StyledDiv = styled('div')(styles.root)
const StyledButton = styled(Button)(styles.btn)

const Demo = () => (
	<StyledDiv>
		<StyledButton variant="contained" size="small">
			Shoutout Styled Components!
		</StyledButton>
	</StyledDiv>
)

export default Demo
