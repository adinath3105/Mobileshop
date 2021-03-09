import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddennamevalidator(str:string):ValidatorFn{
return (control:AbstractControl):ValidationErrors | null=>{
    const status=control.value===str;
    if(status){
        return{
            'forbiddenname':control.value
        }
    }
    return null;

    
}
}