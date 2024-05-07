import React, {Component, useState} from 'react';
import TaskList from './TaskList';


class TaskCatalog extends Component {
    
    list: {id: number, name: string, start: string, end: string, interval: string}[] = [];

    componentDidMount() {
        fetch("api/get_all_tests/")
            .then(response => response.json())
            .then(res => this.list = res)
        console.log(this.list)
    }

    public render() {
        
        return (
            <div><TaskList list={this.list}/></div>
            );
    }
}


export default TaskCatalog;