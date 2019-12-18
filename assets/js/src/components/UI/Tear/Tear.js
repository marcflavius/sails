import React                        from "react"
import { Box }                      from "grommet/es6"
import './Tear.css'
import PropTypes  from "prop-types"



const tear = (props) => <Box style={{position:'absolute'}} className={`bounce-${props.bounceDirection}`} width={'inherit'}>
	<Box style={{
		position: 'relative',
		left: props.x+'px',
		top:props.y+'px'
	}} className={['tear', `tear-${props.tearDirection}`].join(' ')} />
</Box>

tear.propTypes = {
	bounceDirection: PropTypes.string.isRequired,
	tearDirection: PropTypes.string.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired
}
export default tear
