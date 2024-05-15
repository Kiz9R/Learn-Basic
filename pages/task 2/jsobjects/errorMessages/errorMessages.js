export default {
	getErrorMessage:async(api)=>{
		try{
			
			const serverError = await serverErrors.getFatalError(api)
			if(serverError)
				return `Server is down, statusCode - ${getDataQl.responseMeta.statusCode}`

				const backendError = await backendErrors.getDataErrors(api);
			if(backendError)
				return `${getDataQl.data.errors[0].message} - Backend Error`

		}catch(e){
			return showAlert(`${e.message} - error occured at getErrorMessage in errorMessages`)
		}
	},

	// updateErrorMessage:async()=>{
		// try{
			// 
			// const middle = await backendErrors.updateDataErrors();
			// if(middle==='student')
				// return `${updateStudentDataQl.data.errors[0].message} - Backend Error`
// 
				// if(middle==='chapter')
					// return `${updateChapterDataQl.data.errors[0].message} - Backend Error`
// 
		// }catch(e){
			// return showAlert(`${e.message} - error occured at updateErrorMessage in errorMessages`)
		// }
	// }
}