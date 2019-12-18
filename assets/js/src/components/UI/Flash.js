import { Box, Text }                  from "grommet"
import { Checkmark, FormClose }       from "grommet-icons"
import React, { useEffect, useState } from 'react'
import { AppConfig }                  from "../../AppConfig"

import '../../styles/App.css'
import { Bus }                        from '../Utils/Bus'

export const Flash = () => {
	let [visibility, setVisibility] = useState(false)
	let [message, setMessage] = useState('')
	let [type, setType] = useState('')

	useEffect(() => {
		Bus.addListener('flash', ({message, type}) => {
			setVisibility(true)
			setMessage(message)
			setType(type)
			setTimeout(() => {
				setVisibility(false)
			}, 8000)
		})
	}, [])

	useEffect(() => {
		if (document.querySelector('.close') !== null) {
			document.querySelector('.close').addEventListener('click', () => setVisibility(false))
		}
	})

	return (visibility && <Box color={"brand"} flex direction={"row"} className={`shadow close alert float-over`}>
		<Box className={`alert-${type} float-over`}
		     direction="row"
		     pad="medium"
		>
			{type?<FormClose size="large" color="brand"/>:<Checkmark size="large" color="brand" />}
		</Box>

		<Box flex={"grow"}
		     style={{
			     backgroundColor: '#fff',
			     padding: 8,
			     color: AppConfig.theme.global.colors.brand
		     }}
		     className={`float-over`}
		>
			<Text color={"brand"} style={{color: AppConfig.theme.global.colors.brand}}>
				{message}
			</Text>
		</Box>
	</Box>)
}
