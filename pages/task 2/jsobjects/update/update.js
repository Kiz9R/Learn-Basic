export default {
	update:async()=>{
		const updates = Table1.updatedRows.map(i => i.allFields);

		// return updates

		let studentUpdates = [];
		let chapterUpdates = [];

		const chapterName=chapter.selectedOptionValue;
		const subjectName=subject.selectedOptionValue;
		const testName=test.selectedOptionValue;

		for (let update of updates) {
			const { rollNumber, studentName, score, timeTaken } = update;

			const error = await userErrors.updateValidInput(studentName, score, timeTaken)
			if(error)
				throw new Error(error)

			const condition1 = { "roll_number": { "_eq": rollNumber } };
			const condition2 = { "roll_number": { "_eq": rollNumber }, "_and": {subject: {"_eq":subjectName }, "_and": {"test_name": {"_eq": testName}, "_and": {chapter_name: {"_eq": chapterName}}}}} ;
			const payloadStudent = { "student_name": studentName };
			const payloadChapter = { "score": score, "time_taken_in_sec": timeTaken };

			const studentUpdate = { "where": condition1, "_set": payloadStudent };
			const chapterUpdate = { "where": condition2, "_set": payloadChapter };

			studentUpdates.push(studentUpdate);
			chapterUpdates.push(chapterUpdate); 
		}

		// return studentUpdates
		// return chapterUpdates

		try {
			
			const serverErrorStudent = await serverErrors.getFatalError(updateStudentDataQl)
			if(serverErrorStudent)
				throw new Error(serverErrorStudent)

			const serverErrorChapter = await serverErrors.getFatalError(updateChapterDataQl)
			if(serverErrorChapter)
				throw new Error(serverErrorChapter)
			

			await updateStudentDataQl.run({data: studentUpdates});
			const backendStudentError = await backendErrors.dataErrors(updateStudentDataQl);
			if(backendStudentError)
				throw new Error(backendStudentError)
			
			
			await updateChapterDataQl.run({data: chapterUpdates});	
			const backendChapterError = await backendErrors.dataErrors(updateChapterDataQl)
			if(backendChapterError)
				throw new Error(backendChapterError)

			await getData.studentScore();

			return showAlert(`Update successfull`, "success");
		} catch (error) {
			return showAlert(`${error}`,"error");
		}

	}

}



