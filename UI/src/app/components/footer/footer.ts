import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector:'app-footer',
    imports:[DatePipe],
    template:`<div class="w-full py-4 bg-indigo-600 text-center">
    <p class="text-md text-white capitalize">© {{currentDate | date:'yyyy' }} Expense Tracking System. All rights reserved.</p>
</div>`
})
export class Footer{
currentDate: Date = new Date();
}