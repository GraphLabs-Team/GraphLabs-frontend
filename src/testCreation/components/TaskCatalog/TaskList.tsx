import React, { useState, useEffect } from "react";
import "./TaskList.css"

interface Props {
    list: {id: number, name: string, start: string, end: string, interval: string}[];
}


function TaskList (props: Props) {

    const [dataId, setDataId] = useState<Array<any>>([]);
    const [invalid_count, set_invalid_count] = useState<boolean>();

    const chooseCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.value);
        if (dataId.includes(id)) {
            const idCollection = dataId.filter((id) => id !== id);
            setDataId(idCollection);
        } else {
            const idCollection = [...dataId];
            idCollection.push(id);
            setDataId(idCollection);
        }
    };

    return (
        <div>
            <p/>
            <h2>Каталог заданий</h2>
            <p/>
            <p/>
            <div className="sort">
                <button className="btn-sort">Активные задания</button>
                <button className="btn-sort">Завершенные задания</button>
                <button className="btn-sort">Все задания</button>
            </div>
            
            <div className={"area"}>
                <p className={"alert-warning-invalid-score"} hidden={!invalid_count}>Выберите хотя бы 1 модуль!</p>
                {props.list.length === 0 && <h4>Модули не выбраны!</h4>}
                {props.list.length > 0 &&
                    props.list.map((item: any) => (
                        <div className={"checkboxes"} key={item.id}>
                            <span className={"id"}>{item.id}. {item.name}</span>
                            
                            
                            <span>
                            <span className="timeout">Срок выполнения: {item.start} - {item.end}</span>
                                <button className="del">Del</button>
                                <button className="edit">Edit</button>
                            </span>
                        </div>
                    ))}
            </div>
        
        </div>
    );
}

export default TaskList;