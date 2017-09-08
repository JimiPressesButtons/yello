import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from './Lanes';
import connect from '../libs/connect';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
	const addLane = () => {
		LaneActions.create({
			id: uuid.v4(),
			name: 'New Card'
		});
	};

	return (
		<div className="main">
			<div className="header">
				<h1><i>Yello</i></h1>
				<div className="trelloLogo"></div>
			</div>
			<div className="boardBox">
				<Lanes lanes ={lanes} />
				<button className = "add-lane" onClick = {addLane}>Add List</button>
			</div>
			<div className ="commentBox">
				<h2><i>Yello</i></h2>
				<hr />
				<h4>Purpose:</h4>
					<p>&nbsp;&nbsp;&nbsp;&nbsp; To build on my knowledge of the flux architecture and make an app that I might regularly use.</p>
				<h4>Technologies:</h4> 
					<p>&nbsp;&nbsp;&nbsp;&nbsp;React, Alt, Webpack, React-DnD</p>
				<h4>Difficulties:</h4>
					<p> &nbsp;&nbsp;&nbsp;&nbsp;The greatest struggle I had with this project was that once I decided I wanted to add something it took me a <i>long</i> time before I attempted to do it. I would research and google and look up tutorials before I ever wrote a line a code. Call it procrastination, fear, or even call incompetance - it did not feel good.</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;Also choosing to assign IDs upon creation of both cards and lists caused a lot of headaches when trying to make sure all the logic lined up between the nested components. I might have decided to scrap storing all the data in state but for whatever reason I thought that that would be counter-productive.</p>
					<p> &nbsp;&nbsp;&nbsp;&nbsp;Finally getting the drag and drop feature implemented at all took me around the internet and back. By the end of it, I barely remember the trip.</p>
				<h4>Reflections:</h4> 
					<p>&nbsp;&nbsp;&nbsp;&nbsp;I think I could have made this project way easier on myself if I just decided to make a change of plans but for whatever reason I drew a line in the sand and wanted to see it through until the end. It's not like I haven't given up on a project before, hell I have a half-dozen failed Swift projects burning space on my iPhone.</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;I guess I resent that it was so hard and yet I'm not satified with the result.</p>
				<h4>Conclusion:</h4> 
					<p>&nbsp;&nbsp;&nbsp;&nbsp;I'm not happy with Yello. I took me to a lot of dark places. Hell even getting the webpack config right made me want to give up on this whole web developer thing. But when all is said and done, I made an app that runs.</p>
				<hr />
				<a href='https://www.google.com'><svg className="svg"fill="#444444" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0z" fill="none"/>
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
				</svg> jimimadeawebsite.com</a>
			</div>
		</div>
	);
};
 export default compose(
	DragDropContext(HTML5Backend),
	connect(
		({lanes}) => (
			{lanes}),
			{LaneActions}
	)
)(App)