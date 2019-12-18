import React          from "react"
import Fab            from "@material-ui/core/Fab"
import { Previous }   from "grommet-icons/es6"
import { withRouter } from "react-router"

const previousBtn = (props) => <Fab size={'small'} onClick={() => {
	 props.history.goBack()
 }}>
	 <Previous />
 </Fab>

export default  withRouter(previousBtn)
