export default {
	getFatalError:async(api)=>{
		try{

			if(api.responseMeta.statusCode !== "200 OK")
				return true
			return false;	

		}catch(e){
			return showAlert(`${e.message} - error occured in fatalErrors, serverErrors`)
		}
	}
	
}