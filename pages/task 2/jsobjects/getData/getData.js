export default {
	studentScore: async () => {
		try {
			const allFieldSelected = await userErrors.selectFieldError();
			let tableData=[];
			
			if (allFieldSelected) {
				
				const errorMessage=await errorMessages.errorMessage()
				if(errorMessage)
					throw new Error(errorMessage)

				const data = await getDataQl.data.data.chapter

				tableData = data.map((chapter) => {
					const student = chapter.Students;
					return {
						rollNumber: student.roll_number,
						studentName: student.student_name,
						score: chapter.score,
						timeTaken: chapter.time_taken_in_sec
					};
				});
			}
			if (tableData.length===0) 
				throw new Error('No data available, select fields properly');
			else
				showAlert("Data retrived","success")
			return tableData;

		} catch (err) {
			return showAlert(`${err.message}`, 'error');
		}
	},

}