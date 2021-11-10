import React from 'react';
import '../MaterialUI/ButtonPractice.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ButtonPractice = () => {
	return (
		<div>
			<Button variant='contained' className='single-btn'>
				Hello Material UI
			</Button>{' '}
			<br />
			<ButtonGroup
				variant='contained'
				aria-label='outlined primary button group'>
				<Button>Previous</Button>
				<Button>Pause</Button>
				<Button>Next</Button>
			</ButtonGroup>
		</div>
	);
};

export default ButtonPractice;
