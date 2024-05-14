export default {
	update:async()=>{
		const updates = Table1.updatedRows.map(i => i.allFields);

		let studentUpdates = [];
		let chapterUpdates = [];

		const chapterName=chapter.selectedOptionValue;
		const subjectName=subject.selectedOptionValue;
		const testName=test.selectedOptionValue;

		for (let update of updates) {
			const { rollNumber, studentName, score, timeTaken } = update;
			
			

			const condition1 = { "roll_number": { "_eq": rollNumber } };
			const condition2 = { "roll_numbe": { "_eq": rollNumber }, "_and": {subject: {"_eq":subjectName }, "_and": {"test_name": {"_eq": testName}, "_and": {chapter_name: {"_eq": chapterName}}}}} ;
			const payloadStudent = { "student_name": studentName };
			const payloadChapter = { "score": score, "time_taken_in_sec": timeTaken };

			const studentUpdate = { "where": condition1, "_set": payloadStudent };
			const chapterUpdate = { "where": condition2, "_set": payloadChapter };

			studentUpdates.push(studentUpdate);
			chapterUpdates.push(chapterUpdate); 
		}
		
		// return studentUpdates

		try {

			await updateStudentDataQl.run({data: studentUpdates})
			await updateChapterDataQl.run({data: chapterUpdates});

			const error = await errorMessages.updateErrorMessage()
			if(error)
				throw new Error(error)
			
			await getData.studentScore();

			return showAlert(`Update successfull`, "success");
		} catch (error) {
			
			return showAlert(`${error.message}`,"error");
		}

	}

}



