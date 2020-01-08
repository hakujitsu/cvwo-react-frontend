import { ITask } from '../../redux/tasks/types'
//p1 imports above

import React from 'react';
import deletes from '../../svgs/delete.svg';
import edit from '../../svgs/edit.svg';
import './Tasks.css';
import './IndivTask';
import IndivTask from './IndivTask';
// p2 imports above

//Typing
// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//   tasks: ITask[]
// }

type Props = {
    tasks: ITask[];
}

export const Tasks: React.FC<Props> = (props:Props) => {
    const { tasks } = props;
    console.log(tasks);
    return (
        <div>
            <pre>
        {   
            JSON.stringify(tasks, null, 2)
            
        }
                    </pre>
        </div>
    )
}


// MAP WHEN REDUX FINALLY WORKS
// props.tasks.map((task:ITask, index:number) => 
    //     <IndivTask key={index} {...task}/>
    // )


// CLASS VERSION
// class Tasks extends React.Component<Props> {
//     constructor(props:Props){
//         super(props);
//     }

//     render() {
//       return (
//         <div>{this.props.tasks}</div>
                
//       );
//     }
// }



// ORIGINAL VERSION
// class Tasks extends React.Component {
//     render() {
//       return (
//         <div>
//         <div className = "task">
//             <input type = "checkbox"/>
//             <span className = "taskname">Do CVWO Task</span>
//             <img className = "delete" src = {deletes} alt=""/>
//             <img className = "edit" src = {edit} alt=""/>
//             <hr/>
//         </div>
//         <div className = "task">
//             <input type = "checkbox"/>
//             <span className = "taskname">Play Celeste</span>
//             <img className = "delete" src = {deletes} alt=""/>
//             <img className = "edit" src = {edit} alt=""/>
//             <div className = "tag"> Important </div>
//             <hr/>
//         </div>
//         <div className = "task">
//             <input type = "checkbox"/>
//             <span className = "taskname">Sleep</span>
//             <img className = "delete" src = {deletes} alt=""/>
//             <img className = "edit" src = {edit} alt=""/>
//             <hr/>
//         </div>
//     </div>
            
//         );
//     }
// }




