import { iproduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError , tap} from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})

export class ProductService {

    private productUrl = 'api/products/products.json'
    /**
     *
     */
    constructor(private http : HttpClient) {
      
    }
    getProducts() : Observable<iproduct[]>{
        return this.http.get<iproduct[]>(this.productUrl)
        .pipe(
            tap(data => console.log('All : ' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }


    private handleError(err: HttpErrorResponse) {
        
        let errorMessage = '';
        if(err.error instanceof ErrorEvent)
        {
            //Client side or network error occured
            errorMessage = `The error occured : ${err.error.message}`;
        }
        else
        {
            //server side issue
            errorMessage = `Server returned code: ${err.status}, ErrorMessage is :${err.message} `;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
        
    }

}