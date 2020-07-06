let button: HTMLElement = document.getElementById('register')!;

document.getElementById('chkbx')!.addEventListener('change', () => {
    let tnc: HTMLInputElement = <HTMLInputElement>document.getElementById('chkbx')
    if (tnc.checked == true) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'true');
    }
}) 

button.addEventListener('click', () => {
    let isValid: boolean = true;
    //let fornames:string | undefined = getInputValue("forenames");
    if (getInputValue("forenames").length <1) { 
        console.log("Forenames invalid");
        isValid = false;
    }
    //let surname:string | undefined = getInputValue("surname");
    if (getInputValue("surname").length <2) { 
        console.log("Surname is invalid");
        isValid = false;
    }
    //let nickname:string|undefined = getInputValue("nickname");

    let email:string | undefined = getInputValue("email");
    if (email.length < 4 || !email.includes("@")) { 
        console.log("Email address is invalid");
        isValid = false;
    }
    //let password:string | undefined = getInputValue("password");
    if (getInputValue("password").length <4) { 
        console.log("Password is invalid");
        isValid = false;
    }
    //let passwordC:string | undefined = getInputValue("passwordC");
    if (getInputValue("password") != getInputValue("passwordC")) { 
        console.log("Passwords do not match");
        isValid = false;
    }
    if (isValid) {
        console.log("You are now logged in.");
    }
});

document.getElementById('array')!.addEventListener('click', () => { 
    //1
    let nums: number[] = [89, 5, 56, 102, 7];
    nums = nums.filter(isBiggerThan);
    console.log("1. "+nums);
    //2
    let names:   string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
    names.splice(2, 2, "Cindy","Zoe");
    console.log("2."+names);
    //3
    let names2: string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
    names2.splice(3, 1,);
    console.log("3. "+names2);
    //4
    let nums2: number[] = [89, 5, 56, 102, 7];
    nums2.pop();
    console.log("4. "+nums2);
    //5
    let nums3: number[] = [89, 5, 56, 102, 7];
    nums3.push(78);
    console.log("5. "+nums3);
    ///6
    let nums4: number[] = [89, 5, 56, 102, 7];
    console.log("6. "+nums4.indexOf(5));
    //7
    let names3: string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
    let namesSlice:string[] = names2.slice(1, 4,);
    console.log("7. "+namesSlice);
    //8
    let nums5: number[] = [89, 5, 56, 102, 7];
    nums5.unshift(14, 67);
    console.log("8. "+nums5);
    //9
    let numArr:number[] = [1,2,3];
    let stringArr:string[] = ["a","b","c"];
    let arr = stringArr.concat(<any[]>numArr);
    console.log("9. "+arr);
});

function getInputValue(elementID: string): string{
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function isBiggerThan(arr: number): boolean{
    return (arr > 50);
}