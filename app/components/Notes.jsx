import React from 'react';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';

// export default({notes, onDelete = () => {}}) => (
// 	<ul>{notes.map(({id,task}) =>
// 		<li key = {id}>
// 			<Note>
// 				<span>{task}</span>
// 				<button onClick = {onDelete.bind(null,id)}>x</button>
// 			</Note>
// 		</li>
// 	)}</ul>
// )

export default({
	notes,
	onNoteClick=() => {}, onEdit=() =>{}, onDelete=() =>{}
}) => (
	<ul className="notes">{notes.map(({id, editing, task}) =>
		<li key={id}>
			<Note className="note" id={id} 
				editing = {editing}
				onClick={onNoteClick.bind(null, id)}
				onMove={LaneActions.move}>
				<Editable
					className = "editable"
					editing = {editing}
					value= {task}
					onEdit= {onEdit.bind(null, id)} />
				<button
					className="delete" 
					onClick={onDelete.bind(null, id)}>x</button>
			</Note>
		</li>
	)}</ul>



)


