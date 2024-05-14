export default {

	getDataErrors:async()=>{
		try{
			await getDataQl.run();

			if(getDataQl.data.errors)
				return true

			return false
		}catch(e){
			return showAlert(`${e.message} - occured in getDataError`,'error')
		}
	},
	
	updateDataErrors:async()=>{
		try{
			
			if(updateStudentDataQl.data.errors || updateChapterDataQl.data.errors)
				return true
			return false
			
		}catch(e){
			return showAlert(`${e.message} - error occured in updateDataError, middleError`)
		}
	},

}