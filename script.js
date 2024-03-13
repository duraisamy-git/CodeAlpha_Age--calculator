function calculateAge(){
    const Dob = new Date(document.getElementById("dob").value);

    const ageinMS = Date.now() - Dob.getTime();
    const ageDate = new Date(ageinMS);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDay()-1;
            
    document.getElementById("year").innerHTML=`Your age is ${age} years, ${months} months and ${days} days old. `;
}