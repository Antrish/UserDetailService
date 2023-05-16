import {EventEmitter} from '@angular/core';
export class UserService {
    users = [
        {name: 'Chashme Wala', job: 'Developer', gender: 'Male', country: 'United States', age: 32, avatar: '/assets/avatar/chasmewala.png' },
        {name: 'Rashmi', job: 'Procurement Specilist', gender: 'Female', country: 'Germany', age: 32, avatar: '/assets/avatar/Rashmi.png'},
        {name: 'Vidya Devi', job: 'Harbinger', gender: 'Female', country: 'Ireland', age: 55, avatar: '/assets/avatar/Mataji.jpeg'},
        {name: 'Style Wala', job: 'Photographer', gender: 'Male', country: 'India', age: 30, avatar: '/assets/avatar/stylewala.JPG'}
    ]
    onShowDetailsClicked =  new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();
    ShowUserDetails(user:{name: string, job: string, gender: string, country: string, age: number, avatar: string}){
        this.onShowDetailsClicked.emit(user)
    }
}