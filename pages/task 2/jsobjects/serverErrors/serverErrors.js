export default {
	getFatalError:async(api)=>{
		try{

			if(api.responseMeta.statusCode !== "200 OK")
				return `Server is down, statusCode - ${api.responseMeta.statusCode}`
			return false;	

		}catch(e){
			return showAlert(`${e.message} - error occured at fatalErrors in serverErrors`)
		}
	}
	
}