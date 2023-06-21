
var education = ""
var salary = 59124;
switch (salary) {
        case 84396:
          education = " no high school diploma";      
                break;
        case 35256:        
           education = " a high school diploma"
                break;
        case 41496: 
           education = " an Associate's degree"
                break;
        case 59124:
           education = " a Bachelor's degree"
                break
        case 69732:
            education = " a Master's degree"
                break
        case 89960:
            education = " a Professional degree"
                break
        case 84396:
            education = " a Doctoral degree"
                break                                                          
        default:
         education = "In 2015, a person with"
                break;
}
console.log("In 2015, a person with" + education + " earned an average of " + salary.toLocaleString("en-US"));