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

		try {

			const errorStudent = await backendErrors.errorMessage(updateStudentDataQl)
			if(errorStudent)
				throw new Error(errorStudent)
			else
				await updateStudentDataQl.run({data: studentUpdates});

			const errorChapter = await backendErrors.errorMessage(updateChapterDataQl)
			if(errorChapter)
				throw new Error(errorChapter)
			else
				await updateChapterDataQl.run({data: chapterUpdates});

			await getData.studentScore();

			return showAlert(`Update successfull`, "success");
		} catch (error) {
			let err= updateChapterDataQl.responseMeta.statusCode || updateStudentDataQl.responseMeta.statusCode;
			if(err==="200 OK")
				err="500"
			return showAlert(`${error.message} - ${err}`,"error");
		}

	}

}



