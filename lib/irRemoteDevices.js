// VE.Direct Protocol Version 3.26 from 27 November 2018
// Classification of all state attributes possible

const irDeviceButtons = {
	'Air Conditioner': {
		'temperature': {
			name: 'temperature',
			type: 'number',
			role: 'level.temperature',
		},
		'Set mode': {
			name: 'Set mode',
			type: 'number',
			role: 'state',
			states: {
				1: 'auto',
				2: 'cool',
				3: 'dry',
				4: 'fan',
				5: 'heat'
			},
		},
		'fan Speed': {
			name: 'fan speed mode',
			type: 'number',
			role: 'state',
			states: {
				1: 'auto',
				2: 'low',
				3: 'medium',
				4: 'high'
			},
			def: 1
		},
		'power State': {
			name: 'Turn device On',
			type: 'string',
			role: 'state',
			states: {
				on: 'On',
				off: 'On',
			},
			def: 'off'
		},
	},
	'TV': {
		'Menu': {
			name: 'Menü',
			type: 'boolean',
			role: 'button'
		},
		'Ok': {
			name: 'Ok',
			type: 'boolean',
			role: 'button'
		},
		'Left': {
			name: 'Left',
			type: 'boolean',
			role: 'button'
		},
		'Down': {
			name: 'Down',
			type: 'boolean',
			role: 'button'
		},
		'Right': {
			name: 'Right',
			type: 'boolean',
			role: 'button'
		},
		'Up': {
			name: 'Up',
			type: 'boolean',
			role: 'button'
		},
		'Exit': {
			name: 'Exit',
			type: 'boolean',
			role: 'button'
		}
	}
};

module.exports = irDeviceButtons;
