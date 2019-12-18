export default {
	auth: {},
	currentAttendeeInEditId: "",
	currentAdminInEditId: "",
	currentExamId: 0,
	currentSessionId: 0,
	attendees: [
		{
			id: '73WakrfVbNJBaAmhQtEeDv',
			firstName: "paul",
			lastName: "Hobbo",
			email: "paul_hobbo@yahoo.fr",
			result: -1,
			date: "12/10/2019",
			sessionId: 0
		}, {
			id: '73WakrfVbsJBaAmdQtEeDv',
			firstName: "mathieu",
			lastName: "Charpentier",
			email: "paul_hobbo@yahoo.fr",
			result: -1,
			date: "12/10/2019",
			sessionId: 1
		}

	],
	exams: [
		{
			id: 0,
			title: "Comptabilité",
			questions: ["q1", "q2"]
		}
	],
	admins: [
		{
			id: '73WakrfVbNJBdaAmhQtEeDv',
			firstName: "Carole",
			lastName: "Ba",
			email: "carole@ort.fr",
			role: "responsable de recrutement",
			password: 'admin'
		}, {
			id: '73WakrfVbsJBaAmdQtEeDv',
			firstName: "Marc",
			lastName: "Flavius",
			email: "admin@app.com",
			role: "admin",
			password: 'admin'
		}, {
			id: '73WakrfVbsJBaAmrQkEeDv',
			firstName: "Florian",
			lastName: "Denise",
			email: "admin2@app.com",
			role: "admin",
			password: 'admin'
		}

	],
	sessions: [
		{
			id: 0,
			title: "juin 2019",
			questions: ["q1", "q2"]
		}

	]
}
