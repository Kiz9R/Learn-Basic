export default {
	getFatalError:async()=>{
		try{

			if(getDataQl.responseMeta.statusCode !== "200 OK")
				return true
			return false;	

		}catch(e){
			return showAlert(`${e.message} - error occured in fatalErrors, serverErrors`)
		}
	},
	
	updateFatalError:async()=>{
		try{

			if(updateStudentDataQl.responseMeta.statusCode !== "200 OK" || (updateChapterDataQl.responseMeta.statusCode !== "200 OK"))
				return true
			return false;	

		}catch(e){
			return showAlert(`${e.message} - error occured in fatalErrors, serverErrors`)
		}
	}
	
}