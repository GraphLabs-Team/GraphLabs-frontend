import React, {Component, useState} from 'react';
import "./TaskCreation.css"
import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";
import { useNavigate } from 'react-router-dom';
import { inputTypes, outputTypes } from '../../../routes/routesTypes';
import { getAllModules } from '../../../ModuleManager/modulesInfo';
import { RoutesManager } from '../../../routes/routes';
import Header from '../../../header/Header';
import { GraphGenerator } from '../../../Template/src/components/GraphLibrary/GraphGenerator';


type TaskParams = {
    id: number, 
    name: string
}

type TaskInfo = {
    execution_time: number, 
    task_name: string,
    deadline_start: string, 
    deadline_end: string, 
    groups_ids: number[]
}


function TaskCreation() {
    const navigate = useNavigate();
    const allTasksList: TaskParams[] = getAllModules() //all_list
    const [taskInTest, setTaskInTest] = useState<TaskParams[]>([])
    const [stage, setStage] = useState(0)
    const [modulesScores, setmodulesScores] = useState<{id: number, name: string, score: number}[]>([])
    const [taskInfo, setTaskInfo] = useState<TaskInfo>()
    const [testId, setTestId] = useState<{test_id: number}>({test_id: 1})


    // TODO: добавить в будущем назначение группам
    const [groups, setGroups] = useState<{id: number, name: string}[]>([])



    // first stage handlers
    const firstStagePrev = () => {
        setStage(0)
    }

    const firstStageNext = (list: {id: number, name: string}[]) => {
        setTaskInTest(list)
        setStage(1)
    }

    // second stage handlers
    const secondStagePrev = () => {
        setStage(0)
    }

    const secondStageNext = (list: {id: number, name: string, score: number}[]) => {
        setmodulesScores(list)
        setStage(2)
    }

    // third stage handlers
    const thirdStagePrev = () => {
        setStage(1)
    }

    const thirdStageNext = (task_info: TaskInfo) => {
        //TODO: убрать поле id
        setTaskInfo(task_info)
        let testRequestBody = {
            test: {
                end: task_info.deadline_end,
                id: 0,
                description: task_info.execution_time.toString(),
                name: task_info.task_name,
                start: task_info.deadline_start
            }
        }

        RoutesManager.insertTest(testRequestBody, setTestId)

        modulesScores.forEach(element => {
            let taskRequestBody: inputTypes.Task = {
                task: {
                  answer: "NO ANSWER",
                  data: JSON.stringify(GraphGenerator.random(8, 0.5).toJSONFormat()),
                  description: "NO DESCRIPTION",
                  id: element.id,
                  maxGrade: element.score,
                  name: element.name,
                  testID: testId.test_id
                }
            }

            RoutesManager.insertTask(taskRequestBody, (variable: outputTypes.TaskID) => {})
        });

        setStage(3)
        
    }

    const mainPageHandler = () => {
        navigate("/")
    }

    

    if (stage === 0) {
        return (
            <>
                <Header/>
                <FirstStage list={allTasksList}
                            nextStage={firstStageNext}
                            prevStage={firstStagePrev}/>
            </>
                
        );
    }
    if (stage === 1) {
        return (
            <>
                <Header/>
                <SecondStage list={taskInTest}
                                nextStage={secondStageNext}
                                prevStage={secondStagePrev}/>
            </>
                
        );
    }
    if (stage === 2) {
        return (
            <>
                <Header/>
                <ThirdStage nextStage={thirdStageNext}
                            prevStage={thirdStagePrev}
                            groups={groups}/>
            </>
                
        );
    }
    if (stage === 3) {
        return (
            <>
                <Header/>
                <h2>Задание успешно создано!</h2>
                <button className={"main-page"} onClick={mainPageHandler}>
                    Главная страница
                </button>
            </>
        );
    }
    return (<></>)
}



export default TaskCreation;