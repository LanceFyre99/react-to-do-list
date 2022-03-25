import React from 'react';
import { nanoid } from 'nanoid';
import { IListEntry } from '../types';
import ListEntry from './ListEntry';

export default class ToDoList extends React.Component<{}, {input:string, list: Array<IListEntry>}> {
    constructor(props: {}) {
      super(props)
      this.state = {input: '', list: []}
      this.deleteEntry = this.deleteEntry.bind(this)
      this.toggleCompletion = this.toggleCompletion.bind(this)
    }
  
    newEntry() {
      console.log('adding...')
      const identifier = 'todo-'+nanoid()
      const old = this.state.list
      old.push({key: identifier,
        id: identifier,
        name: this.state.input,
        checked: false,
        delete: this.deleteEntry,
        toggle: this.toggleCompletion
      })
      this.setState({list: old})
      console.log('added!')
    }

    deleteEntry(delId: string) {
      console.log('killing '+delId)
      const remaining = this.state.list.filter(task => delId != task.key)
      this.setState({list: remaining})
      console.log(this.state.list)
    }

    toggleCompletion(toggleId: string) {
      const updatedTasks = this.state.list.map(task => {
        if (toggleId === task.id) {
          return {key: task.key,
            id: task.id,
            name: task.name,
            checked: !task.checked,
            delete: task.delete,
            toggle: task.toggle
          }
        }
        return task;
      });
      this.setState({list: updatedTasks});
    }

    //Not sure how to properly type this. typeof() says its an object but typing it as that breaks things
    updateInput(evt: any) {
      this.setState({input: evt.target.value})
    }

    override render() {
      console.log('rendering!')
      console.log(this.state.list)
      const taskList = this.state.list.map(task => (<ListEntry 
        name={task.name}
        key={task.key}
        id={task.id}
        checked={task.checked}
        delete={task.delete}
        toggle={task.toggle}
        />));
      return(
        <>
        {taskList}
        <input className = '"input input__lg"' type = "text" value={this.state.input} onChange={evt => this.updateInput(evt)}></input>
        <button className = 'btn' type="button" onClick={() => this.newEntry()}>Add Entry</button>
        </>
        );
    }
  }