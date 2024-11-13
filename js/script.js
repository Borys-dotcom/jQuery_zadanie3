$(document).ready(function(){

    let sumValue = $('#sum');

    const sumSalaries = function(){

        let salariesSum = 0;

        $('.salary').each(function(){
            salariesSum += Number($(this).text());
            console.log(salariesSum);
        });

        return salariesSum;
    }

    $('#count-sum').click(function(){
        sumValue.text(sumSalaries());
    });
})