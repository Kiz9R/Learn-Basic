export default {

	dataErrors:async(api, params)=>{
		try{

			let res=""

			if(!params)
				res = await api.run();
			else
				res = await api.run({data:params})

			if(api.data.errors)
				return `${api.data.errors[0].message} - Backend Error`

				return false
		}catch(e){
			return showAlert(`${e.message} - server error occured at dataError in errors`,'error')
		}

	},

}