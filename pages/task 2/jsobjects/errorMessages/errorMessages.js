export default {
	getErrorMessage:async()=>{
		try{

			const server = await serverErrors.getFatalError()
			if(server)
				return `Server is down, statusCode - ${getDataQl.responseMeta.statusCode}`

				const middle = await middleErrors.getDataErrors();
			if(middle)
				return `${getDataQl.data.errors[0].message} - middleError, server error`

		}catch(e){
			return showAlert(`${e.message} - error occured in getErrorMessage in errorMessages`)
		}
	},

	updateErrorMessage:async()=>{
		try{
			const server = await serverErrors.updateFatalError()
			if(server)
				return `Server is down, statusCode - ${server}`



				const middle = await middleErrors.updateDataErrors();
			if(middle==='student')
				return `${updateStudentDataQl.data.errors[0].message} - middleError, server error`
				if(middle==='chapter')
					return `${updateChapterDataQl.data.errors[0].message} - middleError, server error`

		}catch(e){
			return showAlert(`${e.message} - error occured in updateErrorMessage, errorMessages`)
		}
	}
}