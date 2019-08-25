import React from 'react'
import { Container, Card, Switch, Button, CardActions, CardContent, Typography } from '@material-ui/core'
import Favorite from '@material-ui/icons/FavoriteBorder'
import Share from '@material-ui/icons/ShareTwoTone'

const card = [{ text: 'audacious', pronounciation: 'au·da·cious' }]

const Demo = ({ classes, onToggleDark, currentTheme }) => (
	<Container>
		<Card>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					Today's Word
				</Typography>
				<Typography variant="h5" component="h2">
					be nev lent
				</Typography>
				<Typography color="textSecondary">adjective</Typography>
				<Typography component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button color="primary" variant="contained">
					<Favorite /> Favorite
				</Button>
				<Button color="primary" variant="contained">
					<Share /> Share
				</Button>
			</CardActions>
		</Card>
	</Container>
)

export default Demo
