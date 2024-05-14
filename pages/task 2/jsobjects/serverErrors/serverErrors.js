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

			if(updateStudentDataQl.responseMeta.isExecutionSuccess==false )
				return `${updateStudentDataQl.responseMeta.statusCode}`
			if(updateChapterDataQl.responseMeta.isExecutionSuccess==false )
				return `${updateChapterDataQl.responseMeta.statusCode}`
			return false;	

		}catch(e){
			return showAlert(`${e.message} - error occured in fatalErrors, serverErrors`)
		}
	}
	
}|| (updateChapterDataQl.responseMeta.statusCode !== "200 OK")