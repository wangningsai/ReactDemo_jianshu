import React, { Component } from 'react';

class TodoItem extends Component {

	constructor(props) {

			super(props);
			this.handleClickDelete = this.handleClickDelete.bind(this);
		}

	render() {
		const { content } = this.props;
		return (
			<div onClick = { this.handleClickDelete }>

			{ content }

			</div>
		)
	}

	handleClickDelete() {

		const { deleteItem, index } = this.props;
		deleteItem(index)

	}
} 
 
export default TodoItem;