import React, { useEffect, useState } from "react";
import { inputTypes, IUser, outputTypes, TaskAnswer } from "../routes/routesTypes";
import { RoutesManager } from "../routes/routes";
import { ModuleChanger } from "./modulesInfo";
import RotateLoader from "react-spinners/RotateLoader";


interface Props{
   currentTest: outputTypes.Test,
   modules: outputTypes.TasksFromTest,
   thirdStageNext: (results: outputTypes.TestResult, compilationTime: number) => void
}

// FIXME: пофиксить, что подряд одни и те же модули не перегенерируются !1

export function ModuleManager(props: Props){

    let answer_base: inputTypes.TestAnswer = {
        answers: [],
        token: (JSON.parse(localStorage.getItem("user") as string) as IUser).token,
        testID: props.currentTest.id
    }

    const [answers, setAnswers] = useState<inputTypes.TestAnswer>(answer_base)
    const [stage, setStage] = useState(0)
    const [results, setResults] = useState<outputTypes.TestResult>()
    

    function stageIncrement(){
        if (props.modules.tasks.length === stage + 1){
            sendAnswers(answers)
        }
        setStage(stage + 1)
    }

    function addAnswer(answ: string){
        setAnswers(prev_answ => {
            let ta: TaskAnswer = {
                answer: answ,
                taskID: props.modules.tasks[stage].id
            }
            prev_answ.answers.push(ta)
            return prev_answ
        })
    }

    function sendAnswers(answ: inputTypes.TestAnswer){
        RoutesManager.sendAnswers(answ, setResults)  
    }


    useEffect(() => {
        if (results){
            props.thirdStageNext(results, 0)
        }
      }, [results])

    
    if (props.modules.tasks.length > stage){
        return (
        <ModuleChanger 
            moduleName={props.modules.tasks[stage].name} 
            stageIncrement={stageIncrement} 
            answerSetter={addAnswer}
            time_left={Number(props.currentTest.interval)}
            data={JSON.parse(props.modules.tasks[stage].data)}/>
        )
    }
    else {
        return (
            <RotateLoader
                color="blue"
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }
}
