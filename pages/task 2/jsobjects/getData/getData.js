export default {
	studentScore: async () => {
		try {
			const schoolVal = school.selectedOptionValue;
			const subjectVal = subject.selectedOptionValue;
			const classVal = Class.selectedOptionValue;
			const sectionVal = section.selectedOptionValue;
			const chapterVal = chapter.selectedOptionValue;
			const testVal = test.selectedOptionValue;

			if (schoolVal && subjectVal && classVal && sectionVal && chapterVal && testVal) 
				await getDataQl.run();
			else {
				return [];
			}

			const chapters = getDataQl.data.data.chapter;

			if (!chapters || chapters.length === 0) {
				throw new Error('No data available');
			}

			const tableData = chapters.map((chapter) => {
				const student = chapter.Students;
				return {
					rollNumber: student.roll_number,
					studentName: student.student_name,
					score: chapter.score,
					timeTaken: chapter.time_taken_in_sec
				};
			});

			return tableData;

		} catch (err) {
			return showAlert(`${err.message}`, 'error');
		}
	},


}