export default {
	
	getFilteredStudent: () => {
		
		const result = getData.data;	
		return result;
	},
	
	manyUpdates:()=>{
		const updates=Table1.updatedRows.map(update=>update.allFields);
		return updates;
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