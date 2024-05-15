export default {
	studentScore: async () => {
		try {
			const allFieldSelected = await userErrors.getSelectFieldError();
			let tableData=[];

			if (allFieldSelected) {
				
				const serverError = await serverErrors.getFatalError(getDataQl)
			if(serverError)
				throw new Error(serverError)
				
				await getDataQl.run()

				const error=await backendErrors.dataErrors(getDataQl)
				if(error)
					throw new Error(error)

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

				if (tableData.length===0) 
					throw new Error('No data available, select fields properly');
			}

			if(tableData.length>0)
				showAlert("Data retrived","success")
			return tableData;

		} catch (err) {
			return showAlert(`${err.message}`, 'error');
		}
	},

}