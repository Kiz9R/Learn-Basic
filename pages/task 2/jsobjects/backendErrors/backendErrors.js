export default {

	dataErrors:async(api)=>{
		try{

			if(api.data.errors)
				return `${api.data.errors[0].message} - Backend Error`

				return false
		}catch(e){
			return showAlert(`${e.message} - error occured at dataError in backendError`,'error')
		}

	},

}