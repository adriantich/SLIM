
class AssignOtuVsearchModule extends Module {
	constructor (params) {
		super ("assignment-table-vsearch", "https://github.com/adriantich/SLIM/blob/master/man/sections/OTU-table-assignment-Vsearch.md");
		this.params = params;
	}

	onLoad () {
		super.onLoad();

		var input = this.dom.getElementsByClassName('otu_matrix')[0];
		var output = this.dom.getElementsByClassName('assigned')[0];

		input.onchange = () => {
			var idx = input.value.lastIndexOf('.');
			if (idx <= 0)
				return;
			var filename = input.value.substr(0, input.value.lastIndexOf('.'));
			output.value = filename + '_assigned-vsearch.tsv';
			output.onchange();
		};
	}
};

module_manager.moduleCreators['assignment-table-vsearch'] = (params) => {
	return new AssignOtuVsearchModule(params);
};
