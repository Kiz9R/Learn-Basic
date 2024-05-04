export default {
	
	getFilteredStudent: () => {
		
		const result = getData.data;	
		return result;
	},

	handleReset: async () => {
		resetWidget('school');
		resetWidget('subject');
		resetWidget('Class');
		resetWidget('section');
		resetWidget('chapter');
		resetWidget('test');
		await getData.run();
	},
	
}