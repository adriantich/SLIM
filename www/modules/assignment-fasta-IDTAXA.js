class AssignFastaIdTaxaModule extends Module {
  constructor (params) {
  // lien de la doc
  super ("assignment-fasta-IDTAXA", "https://github.com/trtcrd/SLIM/wiki/FASTA-IDTAXA-classifier");

  this.params = params;
  }

  onLoad () {
    super.onLoad();

    let fasta = this.dom.getElementsByClassName('input_file')[0];
    let classifier = this.dom.getElementsByClassName('input_file')[1];
    let assignIdTaxa = this.dom.getElementsByClassName('output_zone')[0].getElementsByTagName('input')[0];

    let threshold = this.dom.getElementsByClassName('param_value')[0];

    fasta.onchange = () => {
      var idx = fasta.value.lastIndexOf('.');
			if (idx <= 0)
				return;
      assignIdTaxa.value = fasta.value.substr(0,fasta.value.lastIndexOf('.'))+ '_assigned-idtaxa.tsv';
      assignIdTaxa.onchange();
    };
  }
};

module_manager.moduleCreators['assignment-fasta-IDTAXA'] = (params) => {
  return new AssignFastaIdTaxaModule(params);
}
   