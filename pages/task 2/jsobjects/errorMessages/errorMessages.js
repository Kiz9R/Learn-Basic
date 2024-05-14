export default {
	errorMessage:async()=>{
		try{
			
			const server = await serverErrors.fatalErrors()
			if(server)
				return `Server is down, statusCode - ${getDataQl.responseMeta.statusCode}`
				
			const middle = await middleErrors.getDataErrors();
			if(middle)
				return `${getDataQl.data.errors[0].message}`
			
		}catch(e){
			return showAlert(`${e.message} - error occured in errorMessage in errorMessages`)
		}
	}
}