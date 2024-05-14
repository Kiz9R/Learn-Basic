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
	updateValidInput:async( studentName, score, timeTaken)=>{

		try{

			const validRegex = /^[a-zA-Z\s]*$/;

			if(!validRegex.test(studentName))
				return 'Provide valid Inputs';

			if(isNaN(score) || isNaN(timeTaken))
				return 'Provide valid Inputs'

			return false

		}catch(e){
			return showAlert(`${e.message} - error occured in updateValidInput, userError`)
		}

	}
}