import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default connect(() => ({}), {
	NoteActions,
	LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
	const addNote = e => {
		e.stopPropagation();

		const noteId = uuid.v4();

		NoteActions.create({
			id: noteId,
			task: 'New task'			
		});
		LaneActions.attachToLane({
			laneId: lane.id,
			noteId
		});
	};
	const deleteLane =e => {
		e.stopPropagation();

		LaneActions.delete(lane.id);
	}
	return (
		<div className="lane-footer" {...props}>
			<div className="lane-add-note">
				<button onClick ={addNote}>...Add Card</button>
			</div>
		</div>
	);
})