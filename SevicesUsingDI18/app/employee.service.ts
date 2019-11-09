import { Injectable } from '@angular/core'

@Injectable()
export class EmployeeService{
    getEmployees(){
        return [
            {"id":1, "name":"Omkar", "gender":"male"},
            {"id":2, "name":"Omkar1", "gender":"male"},
            {"id":3, "name":"Omkar2", "gender":"male"},
            {"id":4, "name":"Omkar3", "gender":"male"}   
        ]
    }
}