export default {
	serverErrors:async()=>{
		try{
			
		}catch(e){
			
		}
	},
	middleErrors:async()=>{
		try{
			await getDataQl.run();
			let flag=false;
			if(getDataQl.data.errors)
				flag=true
			else
				flag=false;
			return flag
		}catch(e){
			return showAlert(`${e.message} - occured in getDataError`,'error')
		}
	},
	
	userErrors:async()=>{
		try{
			
		}catch(e){
			
		}
	}
}