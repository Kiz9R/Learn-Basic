export default {
	
	showInTable: async()=>{
		
		const students = await getDataQl.data.data.student;

		const tableData = students.map(student => {
			return {
				rollNumber: student.roll_number,
				studentName: student.student_name,
				score: student.Chapters.score, 
				timeTaken: student.Chapters.time_taken_in_sec
			};
		});
		return tableData;
	},

	manyUpdates:async()=>{
		const updates=Table1.updatedRows.map(i=>i.allFields);

		// return updates;
		let res="";

		for (let update of updates) {
			const { roll_number, student_name, score, time_taken_in_sec } = update;

			res=`${roll_number}+" "+${student_name}+" "+${score}+" "+ ${time_taken_in_sec}`;

			await updateStudentData.run({
				roll_number: roll_number,
				student_name: student_name
			});

			await updateChapterData.run({
				roll_number: roll_number,
				score: score,
				time_taken_in_sec: time_taken_in_sec
			});
		}
		await getData.run();
		return res;

	},

	handleReset: async () => {
		resetWidget('school');
		resetWidget('subject');
		resetWidget('Class');
		resetWidget('section');
		resetWidget('chapter');
		resetWidget('test');

	},

}