export default {
	update:async()=>{
		const updates=Table1.updatedRows.map(i=>i.allFields);

		// return updates;
		let res="";

		for (let update of updates) {
			const { rollNumber, studentName, score, timeTaken } = update;

			const conditionStudent = {"roll_number": {"_eq": rollNumber}}
			const payloadStudent= {"student_name":studentName}
			const conditionChapter = {"roll_number": {"_eq": rollNumber}}
			const payloadChapter = {"score": score, "time_taken_in_sec": timeTaken}



			await updateStudentDataQl.run({
				condition:conditionStudent,
				payload:payloadStudent
			});

			await updateChapterDataQl.run({
				condition:conditionChapter,
				payload:payloadChapter
			});


		}
		await getDataQl.run();
		return res;
	}

}