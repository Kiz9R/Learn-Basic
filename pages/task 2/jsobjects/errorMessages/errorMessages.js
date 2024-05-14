export default {
	getErrorMessage:async()=>{
		try{

			const server = await serverErrors.getFatalError()
			if(server)
				return `Server is down, statusCode - ${getDataQl.responseMeta.statusCode}`

				const middle = await middleErrors.getDataErrors();
			if(middle)
				return `${getDataQl.data.errors[0].message}`

		}catch(e){
			return showAlert(`${e.message} - error occured in errorMessage in errorMessages`)
		}
	},

	updateErrorMessage:async()=>{
		try{
			const server = await serverErrors.updateFatalError()
			if(server)
				return `Server is down, statusCode - ${getDataQl.responseMeta.statusCode}`

				const middle = await middleErrors.updateDataErrors();
			if(middle){
				const errorMessage = updateStudentDataQl.data.errors[0].message || updateChapterDataQl.data.errors[0].message;
				return errorMessage;
			}

		}catch(e){
			return showAlert(`${e.message} - error occured in updateErrorMessage, errorMessages`)
		}
	}
}