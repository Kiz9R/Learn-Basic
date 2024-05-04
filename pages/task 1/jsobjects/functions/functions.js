export default {
	getFilteredStudent: () => {
		const allStudent = getAll.data;
		let filteredStudent = allStudent;

		if (Select1.selectedOptionValue.length > 0) {
			filteredStudent= filteredStudent.filter(t => t.school_name === Select1.selectedOptionValue);
		}

		if (Select2.selectedOptionValue > 0) {
			 filteredStudent=filteredStudent.filter(t => t.class === Select2.selectedOptionValue);
		}  if (Select3.selectedOptionValue.length > 0) {
			 filteredStudent= filteredStudent.filter(t => t.section === Select3.selectedOptionValue);
		}

		return filteredStudent;
	},
	
	handleReset: async () => {
		resetWidget('Select1');
		resetWidget('Select2');
		resetWidget('Select3');
		await getAll.run();
		this.getFilteredStudent();
	},
}