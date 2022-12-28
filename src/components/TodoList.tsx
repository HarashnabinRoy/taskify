import React from 'react'
import {Todo} from '../model';
import './styles.css' 
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    completedTodos: Array<Todo>;
}
const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
    return (
        <div className='container'>

            <Droppable droppableId='TodosList'>
                {
                    (provided, snapshot) => (
                        <div className= {`todos ${snapshot.isDraggingOver ? "dragActive" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='todos_heading'>
                                Active Task
                            </span>
                            {
                                todos?.map((todo, index) => (
                                    <SingleTodo 
                                        index={index}
                                        todo={todo}
                                        todos={todos}
                                        key={todo.id}
                                        setTodos={setTodos}
                                    />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            
            <Droppable droppableId='TodosRemove'>
                {
                    (provided, snapshot) => (
                        <div className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : "remove"}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='todos_heading'>
                                    Completed Task
                            </span>
                            {
                                completedTodos?.map((todo,index) => (
                                    <SingleTodo 
                                        index={index}
                                        todo={todo}
                                        todos={completedTodos}
                                        key={todo.id}
                                        setTodos={setCompletedTodos}
                                    />
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    );
};

//-------------- OLD UI --------------
// const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
//   return <div className='todos'>
//     {todos.map((todo) => (
//         <SingleTodo 
//             todo={todo} 
//             key={todo.id} 
//             todos={todos} 
//             setTodos={setTodos} 
//         />
//     ))}
//   </div>
// }

export default TodoList;