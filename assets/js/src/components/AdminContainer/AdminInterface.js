import React                      from 'react'
import { Box, ResponsiveContext } from 'grommet'
import TopNavigation              from "./TopNavigation/TopNavigation"
import AsideNavigation            from "./AsideNavigation/AsideNavigation"
import Main                       from "./Main/Main"

class AdminInterface extends React.Component {

	render() {

		return (<ResponsiveContext.Consumer>
			{responsiveSize => (<Box>
				<TopNavigation responsiveSize={responsiveSize} />
				<Box direction='row'>
					<AsideNavigation />
					<Main>{this.props.children}</Main>
				</Box>

			</Box>)}
		</ResponsiveContext.Consumer>)

	}
}


export default AdminInterface
