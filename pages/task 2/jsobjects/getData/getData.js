export default {
	studentScore: async () => {
		try {
			const schoolVal = school.selectedOptionValue;
			const subjectVal = subject.selectedOptionValue;
			const classVal = Class.selectedOptionValue;
			const sectionVal = section.selectedOptionValue;
			const chapterVal = chapter.selectedOptionValue;
			const testVal = test.selectedOptionValue;

			let tableData=[];

			if (schoolVal && subjectVal && classVal && sectionVal && chapterVal && testVal) {

				await getStudentScoresRest.run();

				const chapters = getStudentScoresRest.data.chapter;

				tableData = chapters.map((chapter) => {
					const student = chapter.Students;
					return {
						rollNumber: student.roll_number,
						studentName: student.student_name,
						score: chapter.score,
						timeTaken: chapter.time_taken_in_sec
					};
				});

				if (tableData.length===0) {
					throw new Error('No data available, select fields properly');
				}
			}

			if(tableData.length>0)
				showAlert("Data retrived","success")
			return tableData;

		} catch (err) {
			return showAlert(`${err.message} - 400 BAD_REQUEST`, 'error');
		}
	},
// ${getStudentScoresRest.responseMeta.statusCode}

}