import React          from "react"
import { entities }   from "../../../../../Constants/entities"
import AdminList      from "../services/AdminList"
import { ListLayout } from "../services/ListLayout"

export const ShowAdmin = () => {
	return <ListLayout entity={entities.admin} title={'Administration'} >
		<AdminList showAddItemForm={true} />
	</ListLayout>
}
