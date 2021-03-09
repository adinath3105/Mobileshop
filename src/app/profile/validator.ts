import { AbstractControl } from "@angular/forms";

export function passvalidator(control:AbstractControl){
    if(control && (control.value !== null || control.value !==undefined)){
        const cnfpassvalue=control.value;
        const passcontrol=control.root.get('password');
        if(passcontrol){
            const passvalue=passcontrol.value;
            if(passvalue !== cnfpassvalue){
                return{
                    'comparepass':true
                }
            }
        }

    }
    return null;
}
