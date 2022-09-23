import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Todo"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-8">
                            <button 
                                style={{width : '100%'}}
                                type="submit"
                                className={"btn btn-block mt-3 btn-info"}
                                >
                                Search
                            </button>
                        </div>
                        <div className="col-md-4">
                            <button 
                                style={{width : '100%'}}
                                type="submit"
                                className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}
                                >
                                {editItem ? 'Edit task' : 'Add new task'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
