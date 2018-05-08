new Vue({
	el: '.calculator',
	data: {
		input: '',
		error: false,
		buttons: ['(', ')', 'del', 'AC', 
							'7', '8', '9', '/', 
							'4', '5', '6', '*', 
							'1', '2', '3', '-', 
							'0', '.', '=', '+']
	},
	watch: {
		input: function() {
			this.input = this.input === '' ? '0' : this.input
		}
	},
	methods: {
		btnAction(event) {
			switch(event.path[0].innerHTML) {
				case 'del':
					this.input = this.input === 'Invalid Entry' 
						? '0'
						: this.input.slice(0, -1)
					this.error = false
					break;
				case 'AC':
					this.input = '0'
					this.error = false
					break;
				case '=':
					try {
						this.input = eval(this.input).toString()	
					} 
					catch(e) {
						this.input = 'Invalid Entry'
						this.error = true;
					}
					break;
				default:
					if (this.input === '0' || this.input === 'Invalid Entry') {
						this.input = event.path[0].innerHTML
					} else {
						this.input += event.path[0].innerHTML	
					}
					this.error = false
			}
		} // end btnAction
	} // end methods
})