import { Observable } from "rxjs";

export const getNumbers = new Observable((subcriber) =>{
    subcriber.next(1);
    subcriber.next(2);
    subcriber.next(3);

    setTimeout(() => {
        subcriber.next(4);
        subcriber.complete();
    }, 1000);
})

export function gettingNumbers(){ 
        return new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    });
}