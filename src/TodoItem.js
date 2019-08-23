import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
 
TodoItem.propTypes = {

	content : PropTypes.string,
	deleteItem : PropTypes.func,
	index : PropTypes.number

} 
export default TodoItem;