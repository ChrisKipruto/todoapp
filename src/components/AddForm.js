import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="uppercase tracking-white font-semibold text-gray-600 text-sm">Add new Todo</label>
                    <input type="text" value={this.state.content} placeholder="Add todo and click enter" className="px-3 py-3 bg-gray-200 shadow-md rounded w-full outline-none focus:outline-none focus:bg-gray-100 text-gray-900" onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default AddForm;