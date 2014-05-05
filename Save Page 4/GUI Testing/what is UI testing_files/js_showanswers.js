// JavaScript Document


function RandomNumber()
{
	var randomnumber = Math.floor(Math.random()*999);
	document.FrmAF.imgvalue.value = randomnumber;
	return randomnumber;
}


function answer_checkform(reg)
 {
 	var message = "";
	
	if (document.FrmAF.answer.value.length == 0)
	{
		message = message + "Please Type Answer \n";
		document.FrmAF.answer.focus();
	}
	
	if(reg == 0)
	{
			if (document.FrmAF.tpostedBy.value.length == 0)
			{
				message = message + "Please Type Your Name \n";
				document.FrmAF.tpostedBy.focus();
			}
 		
			if (document.FrmAF.sendemail.checked && document.FrmAF.myemail.value.length == 0)
			{
				message = message + "You need to Enter your e-Mail ID to receive new Answers \n";
				document.FrmAF.myemail.focus();
			}
	}
	
/*	if (document.FrmAF.imgtext.value.length == 0)
	{
		message = message + "Please Enter the Number as given \n";
		document.FrmAF.imgtext.focus();
	}
	
	if ((document.FrmAF.imgtext.value.length > 0) && (document.FrmAF.imgvalue.value != document.FrmAF.imgtext.value))
	{
		message = message + "Number Not Matched, Please re-enter the Number \n";
		document.FrmAF.imgtext.focus();
	}*/
	
	if (document.FrmAF.tqa.value.length == 0)
	{
		message = message + "Please Enter the Result \n";
		document.FrmAF.tqa.focus();
	}
	
	if (document.FrmAF.myemail.value.length != 0)
	{
			var str = document.FrmAF.myemail.value;			
			var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
			if (!str.match(re)) {
				message = message + "Enter Valid e-mail Address \n";	
				document.FrmAF.myemail.focus();
			}				
	}
 	
	
	if (message.length > 0 )
	{
		alert(message);
		return false;
	}
	else
	{
		return true;
	}
 }
 

function showCompany(qnum)
{			
	var coname = window.prompt("In Which Company Interview you faced this Question?", "");

	if( coname.length >= 2 )
	{
		document.location.href = '../classes/question.php?repeat&qnum='+qnum+'&comname='+coname;
	}
	else
	{
		alert("Please Enter Company Name");
		showCompany(qnum);
	}
}			


