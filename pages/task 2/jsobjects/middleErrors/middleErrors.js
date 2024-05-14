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

}