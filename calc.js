$(document).ready(function(){
    $('#totalTip').css('display','none')
    $('#each').css('display','none')
	$('#calculate').click(function(){


	var Amt=$('#amt').val();
	var qual=$('#qual').val();
	var ppl=$('#pplamt').val();
    if(Amt === "" || ppl==0){
    	alert("Please enter values");
    	return;
    }
  var total = (Amt * qual) / ppl;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(1);
  $('#totalTip').css('display','block')
  $('#tip').text(total)
  $('#each').css('display','block')
	})
});

