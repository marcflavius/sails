import Button        from "@material-ui/core/Button"
import PropTypes     from 'prop-types'
import React         from "react"
import { AppConfig } from "../../AppConfig"

export const AppButton = ({text, color, bgc, onClick}) => (<Button
	onClick={onClick}
	style={{
		color: color || "#fff",
		backgroundColor: AppConfig.theme.global.colors.brand || bgc
	}}>{text}</Button>)

AppButton.propTypes = {
	color: PropTypes.string,
	bgc: PropTypes.string
}
