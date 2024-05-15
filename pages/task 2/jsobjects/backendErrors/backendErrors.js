export default {

	getDataErrors:async(api)=>{
		try{
			await api.run();
			
			if(api.data.errors)
				return true
			
			return false
		}catch(e){
			return showAlert(`${e.message} - occured in getDataError`,'error')
		}
	},
	
	updateDataErrors:async()=>{
		try{
			
			if(updateStudentDataQl.data.errors)
				return "student"
			
			if(updateChapterDataQl.data.errors)
				return "chapter"
			
			return false
			
		}catch(e){
			return showAlert(`${e.message} - error occured in updateDataError, middleError`)
		}
	},

}