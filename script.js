function kiem_tra(){
    let weight = Number.parseFloat(document.getElementById('can_nang').value);
    let height = Number.parseFloat(document.getElementById('chieu_cao').value);
    let bmi = weight / (height**2);
    let result;

    if (bmi < 18)
        result = "Underweight";
    else if (bmi < 25.0)
        result = "Normal";
    else if (bmi < 30.0)
        result = "Overweight";
    else
        result = "Obese";
    
    document.getElementById('result').innerHTML = result;
    document.getElementById("bmi").innerHTML = bmi;
}