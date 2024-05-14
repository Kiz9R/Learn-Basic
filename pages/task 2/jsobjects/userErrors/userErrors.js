export default {

	getSelectFieldError:async()=>{
		try{	
			const schoolVal = school.selectedOptionValue;
			const subjectVal = subject.selectedOptionValue;
			const classVal = Class.selectedOptionValue;
			const sectionVal = section.selectedOptionValue;
			const chapterVal = chapter.selectedOptionValue;
			const testVal = test.selectedOptionValue;
			if (schoolVal && subjectVal && classVal && sectionVal && chapterVal && testVal)
				return true;
			return false;
		}catch(e){
			return showAlert(`${e.message} - error occured in selectFieldError, userError`);
		}
	},

}