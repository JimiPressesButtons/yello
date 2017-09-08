import React from 'react';
import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import connect from '../libs/connect';
import Notes from './Notes';
import LaneHeader from './LaneHeader';
import LaneFooter from './LaneFooter';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';

const Lane = ({
	connectDropTarget, lane, notes, LaneActions, NoteActions, ...props
}) => {
	const editNote = (id,task) => {
		NoteActions.update({id, task, editing: false});
	};
	const deleteNote = (noteId, e) => {
		e.stopPropagation();

		LaneActions.detachFromLane({
			laneId: lane.id,
			noteId
		})

		NoteActions.delete(noteId);
	};
	const activateNoteEdit = id => {
		NoteActions.update({id, editing: true});
	};

	return connectDropTarget(
		<div {...props}>
			<LaneHeader lane={lane} />
			<Notes
				notes={selectNotesByIds(notes, lane.notes)}
				onNoteClick={activateNoteEdit}
				onEdit={editNote}
				onDelete={deleteNote} />
			<LaneFooter lane={lane} />
		</div>
	);
};

function selectNotesByIds(allNotes, noteIds = []){
	return noteIds.reduce((notes, id) =>
		//concatenate possible matching ids
		notes.concat(
			allNotes.filter(note => note.id === id)
		), 
		[]);
}

const noteTarget = {
	hover(targetProps, monitor) {
	const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;

		if(!targetProps.lane.notes.length) {
			LaneActions.attachToLane({
			laneId: targetProps.lane.id,
			noteId: sourceId
			}); 
		}
	} 
};

export default compose(
	DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
		connectDropTarget: connect.dropTarget()
	})),
		connect(({notes}) => ({
			notes
	}), {
		NoteActions,
		LaneActions
	}) 
)(Lane)