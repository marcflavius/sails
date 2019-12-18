import React                      from "react"
import '../../styles/App.css'
import '../../styles/Content.css'
import { Box, ResponsiveContext } from "grommet"
import TopNavigation              from "../AdminContainer/TopNavigation/TopNavigation"

const page = ({children}) => <ResponsiveContext.Consumer>
	{responsiveSize => (<Box style={{
	    height:'100vh'
	}}>
		<TopNavigation responsiveSize={responsiveSize} />
		<Box direction='row'>
			{children}
		</Box>

	</Box>)}
</ResponsiveContext.Consumer>
export default page
