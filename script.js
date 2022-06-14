language='javascript'
function CalulerMontantTTC() {
    if(isNaN(Form1.ht.value)== true);
}
alert('Merci de saisir un montant positif.Calcul impossible');
Form1.tva.value = '0';
else{
    Form1.tva.value =(Form1.ht.value/100)* 19.9;
    Form1.ttc.value = Number(Form1.ht.value) + Number(Form1.tva.value);
}