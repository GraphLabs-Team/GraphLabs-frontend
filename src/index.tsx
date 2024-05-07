import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Server } from "miragejs"
import { RoutesManager } from './routes/routes';


const authUserUrl = "/auth_user"
const checkResultsUrl = "/check_results"
const createUserUrl = "/create_user"
const getTasksFromTestUrl = "/get_tasks_from_test"
const getTestsUrl = "/get_tests"
const send_answers_url = "/send_answers"





new Server({
  	routes() {

		this.namespace = 'https://localhost:8080';

      	this.post("https://localhost:8080/auth_user", (schema, request) =>{
			return {
            	"token": "12"
          	}
        })
		this.get("https://localhost:8080/check_results", () =>{
          	return {
            	"results": [
					{
					  "end": "string",
					  "grade": 0,
					  "id": 0,
					  "start": "string",
					  "studentID": 0,
					  "testID": 0
					}
				  ]
          	}
        })
		this.post("https://localhost:8080/create_user", () =>{
          	return {
				"token": "string"
			  }
        })
		this.get("https://localhost:8080/get_tests", () =>{
          	return {
            	"tests": [
					{
					  "end": "string",
					  "id": 0,
					  "interval": "125",
					  "name": "string",
					  "start": "string"
					}
				  ]
          	}
        })
		this.post("https://localhost:8080/get_tasks_from_test", (schema, request) =>{
			if (JSON.parse(request.requestBody).test_id !== 0){
				return {
					"tasks": [
					  ]
				  }
			}
          	return {
            	"tasks": [
					{
					  "answer": "string",
					  "data": '[{"data":{"id":"0","label":"0","color":""}},{"data":{"id":"1","label":"1","color":""}},{"data":{"id":"2","label":"2","color":""}},{"data":{"id":"3","label":"3","color":""}},{"data":{"id":"4","label":"4","color":""}},{"data":{"id":"5","label":"5","color":""}},{"data":{"id":"6","label":"6","color":""}},{"data":{"id":"7","label":"7","color":""}},{"data":{"id":"1","source":"0","target":"2","label":"0","color":""}},{"data":{"id":"2","source":"0","target":"4","label":"0","color":""}},{"data":{"id":"3","source":"0","target":"7","label":"0","color":""}},{"data":{"id":"4","source":"1","target":"0","label":"0","color":""}},{"data":{"id":"5","source":"1","target":"2","label":"0","color":""}},{"data":{"id":"6","source":"1","target":"3","label":"0","color":""}},{"data":{"id":"7","source":"1","target":"4","label":"0","color":""}},{"data":{"id":"8","source":"2","target":"0","label":"0","color":""}},{"data":{"id":"9","source":"2","target":"5","label":"0","color":""}},{"data":{"id":"10","source":"2","target":"6","label":"0","color":""}},{"data":{"id":"11","source":"3","target":"1","label":"0","color":""}},{"data":{"id":"12","source":"3","target":"2","label":"0","color":""}},{"data":{"id":"13","source":"3","target":"5","label":"0","color":""}},{"data":{"id":"14","source":"4","target":"1","label":"0","color":""}},{"data":{"id":"15","source":"4","target":"2","label":"0","color":""}},{"data":{"id":"16","source":"4","target":"3","label":"0","color":""}},{"data":{"id":"17","source":"4","target":"5","label":"0","color":""}},{"data":{"id":"18","source":"5","target":"1","label":"0","color":""}},{"data":{"id":"19","source":"5","target":"4","label":"0","color":""}},{"data":{"id":"20","source":"6","target":"3","label":"0","color":""}},{"data":{"id":"21","source":"6","target":"5","label":"0","color":""}},{"data":{"id":"22","source":"6","target":"7","label":"0","color":""}},{"data":{"id":"23","source":"7","target":"0","label":"0","color":""}},{"data":{"id":"24","source":"7","target":"3","label":"0","color":""}}]',
					  "id": 0,
					  "maxGrade": 3,
					  "name": "ModuleExample"
					},
					{
						"answer": "string",
						"data": '[{"data":{"id":"0","label":"0","color":""}},{"data":{"id":"1","label":"1","color":""}},{"data":{"id":"2","label":"2","color":""}},{"data":{"id":"3","label":"3","color":""}},{"data":{"id":"4","label":"4","color":""}},{"data":{"id":"1","source":"0","target":"3","label":"0","color":""}},{"data":{"id":"2","source":"1","target":"3","label":"0","color":""}},{"data":{"id":"3","source":"2","target":"0","label":"0","color":""}},{"data":{"id":"4","source":"3","target":"0","label":"0","color":""}},{"data":{"id":"5","source":"3","target":"1","label":"0","color":""}},{"data":{"id":"6","source":"3","target":"4","label":"0","color":""}},{"data":{"id":"7","source":"4","target":"0","label":"0","color":""}}]',
						"id": 1,
						"maxGrade": 12,
						"name": "Template"
					  },
					  {
						"answer": "string",
						"data": '[{"data":{"id":"0","label":"0","color":""}},{"data":{"id":"1","label":"1","color":""}},{"data":{"id":"2","label":"2","color":""}},{"data":{"id":"3","label":"3","color":""}},{"data":{"id":"4","label":"4","color":""}},{"data":{"id":"1","source":"0","target":"3","label":"0","color":""}},{"data":{"id":"2","source":"1","target":"3","label":"0","color":""}},{"data":{"id":"3","source":"2","target":"0","label":"0","color":""}},{"data":{"id":"4","source":"3","target":"0","label":"0","color":""}},{"data":{"id":"5","source":"3","target":"1","label":"0","color":""}},{"data":{"id":"6","source":"3","target":"4","label":"0","color":""}}]',
						"id": 3,
						"maxGrade": 12,
						"name": "ModuleExample"
					  }
				  ]
          	}
        })
		this.post("https://localhost:8080/send_answers", () =>{
          	return {
            	"result": {
					"end": "string",
					"grade": 0,
					"id": 0,
					"start": "string",
					"studentID": 0,
					"testID": 0,
					"modules": [
						{
							taskId: 0,
							taskGrade: 12,
							maxTaskGrade: 13,
							taskName: "AAA"
						},
						{
							taskId: 1,
							taskGrade: 13,
							maxTaskGrade: 13,
							taskName: "dass"
						}
					]
				  }
          	}
        })
		this.post("https://localhost:8080/insert_task", (schema, request) =>{
			return {
				"task_id": 0
			}
        })
		this.post("https://localhost:8080/insert_test", () =>{
          	return {
            	"test_id": 0
          	}
        })
    }
})


const root = ReactDOM.createRoot(
  	document.getElementById('root') as HTMLElement
);
root.render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>
);
//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
