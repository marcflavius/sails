import React          from "react"
import { entities }   from "../../../../../Constants/entities"
import AttendeeList   from "../services/AttendeeList"
import { ListLayout } from "../services/ListLayout"

export const ShowSession = () => {
	return <ListLayout entity={entities.attendee} title={'Candidates'} >
		<AttendeeList showAddItemForm={true} />
	</ListLayout>
}
