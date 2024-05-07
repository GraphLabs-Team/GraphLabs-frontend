import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { RoutesManager } from './routes/routes';
import {inputTypes, outputTypes} from "./routes/routesTypes"
import { ModuleManager } from './ModuleManager/moduleManager';
import { BrowserRouter as Router, Routes, Route }from "react-router-dom";
import Header from './header/Header';
import Catalog from './GraphLabs.StudentPages/src/components/PagesCreation/Catalog';
import Test from './GraphLabs.StudentPages/src/App';
import TestProcess from './GraphLabs.StudentPages/src/components/PagesCreation/PagesCreation';
import MainPage from './mainPage/components/mainPage';
import TaskCreation from './testCreation/components/TaskCreation/TaskCreation';


function App() {
	const props = {
		end: "string",
		id: 0,
		interval: "12",
		name: "string",
		start: "string"
	}
  	return (
    	<div className="App">
			<Router>
				<Routes>
					<Route path="/"
						element={
							<>
							<Header/>
							<MainPage/>
							</>
						} 
					/>
					<Route path="/personal_page"
						element={
							<>
								<TestProcess/>
							</>
						} 
					/>
					<Route path="/create_test"
						element={
							<>
								<TaskCreation/>
							</>
						} 
					/>
				</Routes>
			</Router>
			
    	</div>
  	);
}

export default App;
