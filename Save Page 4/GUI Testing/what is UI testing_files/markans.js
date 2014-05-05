// to mark any answer as yes or no
function markAns(value, ano) {  // This function does the AJAX request

	divId = "mark"+ano;
	curl = "/forms/markanswer.php?mark="+value+"&ansno="+ano;
	http.open("GET", curl, true);
  	http.onreadystatechange = getHttpRes;
  	http.send(null);
}


function showRankForm(ansno)
{
	var frmstr = "";
	frmstr = "<select name='rank' onchange='submitRank(this.value, "+ansno+");'><option value='--'>Rank This Answer</option><option value='5'>Excellent</option><option value='4'>Best</option><option value='3'>Very Good</option><option value='2'>Good</option><option value='1'>OK</option></select>";
	document.getElementById("rankans"+ansno).innerHTML = frmstr;
}


function submitRank(rank, ansno)
{
	divId = "rankans"+ansno;
	curl = "/forms/rankanswer.php?rank="+rank+"&ansno="+ansno;
	http.open("GET", curl, true);
  	http.onreadystatechange = getHttpRes;
  	http.send(null);
}


function showAnswerForm(qnum, type)
{
	divId = "pna";
	curl = "/forms/newanswerform.php?qno="+qnum+"&type="+type;

	http.open("GET", curl, true);
  	http.onreadystatechange = getHttpRes;
  	http.send(null);
	
	document.getElementById("imgpya").style.visibility = 'hidden';
}


function submitAnswer(reg)
{
		
	var result = answer_checkform(reg);

	if(result)
	{	
		document.FrmAF.submit();
		document.getElementById("divnaf").style.display = "none";
		document.getElementById("imgpya").style.visibility = 'visible';
		
		return true;
	}
	else
	{
		return false;
	}
}


function showQuestionForm(catno)
{
	divId = "pnq";
	curl = "/forms/newquestionform.php?catno="+catno;

	http.open("GET", curl, true);
  	http.onreadystatechange = getHttpRes;
  	http.send(null);
}


function submitQuestion(reg)
{
		
	var result = question_checkform(reg);

	if(result)
	{	
		document.FrmQF.submit();
		document.getElementById("divnqf").style.display = "none";
		
		return true;
	}
	else
	{
		return false;
	}
}



function getHttpRes() {	
  if (http.readyState == 4 ) { 
	res = http.responseText;  // These following lines get the response and update the page
    document.getElementById(divId).innerHTML = res;
  }
}


function getXHTTP() {
  var xhttp = null;
  
  try {   // The following "try" blocks get the XMLHTTP object for various browsers.
      xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
 		 // This block handles Mozilla/Firefox browsers...
	    try {
	      xhttp = new XMLHttpRequest();
	    } catch (e3) {
	      xhttp = false;
		  alert('Your browser is not IE 5 or higher, or Firefox or Safari or Opera');
	    }
      }
    }
  return xhttp; // Return the XMLHTTP object
}

var http = getXHTTP(); // This executes when the page first loads.
var divId;
