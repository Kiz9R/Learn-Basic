export default {

	
	Palindrome:()=>{
	let s=""
	let s1="";
	for(let i=0;i<s.length;i++){
		let c=s.charAt(i);
		s1=c+s1;
	}
		if(s===s1){  
			return true;
		}else
			return false;
},

	manyUpdates:async()=>{
		const updates=Table1.updatedRows.map(i=>i.allFields);

		// return updates;
		let res="";

		for (let update of updates) {
			const { roll_number, student_name, score, time_taken_in_sec } = update;

			res=`${roll_number}+" "+${student_name}+" "+${score}+" "+ ${time_taken_in_sec}`;

			await updateStudentData.run({
				roll_number: roll_number,
				student_name: student_name
			});

			await updateChapterData.run({
				roll_number: roll_number,
				score: score,
				time_taken_in_sec: time_taken_in_sec
			});
		}
		await getData.run();
		return res;

	},

	handleReset: async () => {
		resetWidget('school');
		resetWidget('subject');
		resetWidget('Class');
		resetWidget('section');
		resetWidget('chapter');
		resetWidget('test');

	},

}