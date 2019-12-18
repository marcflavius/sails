import React                                      from "react"
import { Anchor, Box, Grid, Heading, Text }       from "grommet/es6/index"
import { Card }                                   from "grommet-controls"
import { Android, Apple, ClosedCaption, Reactjs } from "grommet-icons/es6/index"

const services = [
	{
		name: 'Reactjs',
		color: 'accent-1',
		icon: Reactjs
	}, {
		name: 'Android',
		color: 'accent-2',
		icon: Android
	}, {
		name: 'iOS',
		color: 'accent-3',
		icon: Apple
	}, {
		name: 'Video',
		color: 'accent-4',
		icon: ClosedCaption
	}
]

const Section = ({children, name}) => (<Box
	tag='section'
	pad={{
		vertical: 'medium',
		horizontal: 'xlarge'
	}}
>
	<Heading level={2} margin={{top: 'none'}} alignSelf='center'>
		{name}
	</Heading>
	{children}
</Box>)

const dashboard = () => <Section name='Our services'>
	<Grid columns={{
		"count": "fit",
		size: 'small'
	}} gap='large' alignContent='center'>
		{services.map((item, index) => (<Card key={`services_${index}`}>
			<Box direction='row' fill align='center' pad='small' gap='small'>
				<Box background={item.color} flex={false} pad='small'>
					<item.icon size='xlarge' />
				</Box>
				<Box justify='between' gap='small'>
					<Text size='large' weight='bold'>
						{item.name}
					</Text>
					<Text size='small'>
						check our {item.name} services
					</Text>
					<Anchor label='see more...' />
				</Box>
			</Box>
		</Card>))}
	</Grid>
</Section>

export default dashboard
