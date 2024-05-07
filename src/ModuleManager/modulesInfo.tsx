import React from "react";
import { ModuleExample } from "../Template/src/components/ModuleExample/module";
import { Template } from "../Template/src/components/Template";


interface Props{
    moduleName: string, 
    time_left: number,
    data: any[],
    stageIncrement: () => void,
    answerSetter: (answ: string) => void
}


export function ModuleChanger(props: Props) {
    const modules = ["ModuleExample", "Template"]
    

    if (modules.includes(props.moduleName)){
        if (props.moduleName == "ModuleExample"){
            return (
                <ModuleExample 
                stageNumberIncrementer={props.stageIncrement} 
                time={props.time_left}
                data={props.data}
                answerSetter={props.answerSetter}/>
            )
        }
        if (props.moduleName == "Template"){
            return (
                <Template 
                stageNumberIncrementer={props.stageIncrement} 
                time={props.time_left}
                data={props.data}
                answerSetter={props.answerSetter}/>
            )
        }
        }
    return <></>

}

export function getAllModules(){
    return [
        {id: 0, name: "Template"},
        {id: 1, name: "ModuleExample"}
    ]
}
