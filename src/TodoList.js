import React, { Component,Fragment } from 'react'
import TodoItem from './TodoItem'
import './index.css'

class TodoList extends Component {

	constructor(props) {

		super(props);
		this.state = {
			inputValue : '',
			list:[]
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleClickDelete = this.handleClickDelete.bind(this);
	}

	//在组件即将被挂载到页面的时刻执行
	componentWillMount() {
		console.log("componentWillMount");
	}
	//在组件挂载到页面的时刻执行
	componentDidMount() {
	 console.log("componentDidMount");
	}

	//组件被更新之前，他会自动执行
	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
		return true;
	}
	//组件被更新之前，他会自动执行,但是他在shouldComponentUpdate之后执行
	//如果返回true，会自动执行，否则不执行
	componentWillUpdate() {

		console.log("conponentWillUpdate");
	}
	//组件被更新之后，他会自动执行
	componentDidUpdate() {
		
		console.log("conponentDidUpdate");
	}

	render() {
		console.log("render");
		return (
			<Fragment>	
				<div> 
					<label htmlFor = "insertArea">
						输入内容
					</label>
					<input 
						id = "insertArea"
						className = 'input'
						value = {this.state.inputValue}
						onChange = { this.handleInputChange }
					/> 
					<button onClick = { this.handleBtnClick }>  提交  </button>

				</div>

				<ul>
					{ this.getTodoItem() }
				</ul>

			</Fragment>
			)
	}

	getTodoItem() {

		return  this.state.list.map((item, index) => {
			return (
				<TodoItem 
						key = { index }
						content = { item } 
						index = { index } 
						deleteItem = { this.handleClickDelete }
					/>
			)
		})
	}

	handleInputChange(e) {

		const value = e.target.value;
		this.setState(() => ({
			inputValue: value

		}))
	}

	handleBtnClick() {

		this.setState((prevState) => ({ 

			list:[...prevState.list,prevState.inputValue],
			inputValue:''

		}))
	}

	handleClickDelete(index) {

		this.setState((prevState) => {

			const list = [...prevState.list];
			list.splice(index,1)

			return { list }

		})
		

	}

}

export default TodoList;