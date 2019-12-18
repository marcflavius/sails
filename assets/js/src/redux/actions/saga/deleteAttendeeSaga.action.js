export const DELETE_ATTENDEE_SAGA_ACTION = 'DELETE_ATTENDEE_SAGA_ACTION'

/**
 *  deleteAttendeeSagaAction
 */
export const deleteAttendeeSagaAction = (id) => ({
	type: DELETE_ATTENDEE_SAGA_ACTION,
	id
})


