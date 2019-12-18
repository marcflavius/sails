export const DELETE_ADMIN_SAGA_ACTION = 'DELETE_ADMIN_SAGA_ACTION'

/**
 *  deleteAdminSagaAction
 */
export const deleteAdminSagaAction = (id) => {
	return  ({
		type: DELETE_ADMIN_SAGA_ACTION,
		id
	})
}


