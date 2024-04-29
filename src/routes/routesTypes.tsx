import React from "react";


export type {UserAuth, UserReg, TestID, TestAnswer}


interface UserAuth{
    email: string, 
    password: string
}

interface UserReg{
    email: string, 
    firstName: string, 
    lastName: string, 
    password: string
}


interface TestID{
    test_id: number
}

interface TaskAnswer{
    answer: string, 
    taskID: number
}

interface TestAnswer{
    answers: TaskAnswer[], 
    testID: number
}