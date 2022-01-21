var users =[
{
	name:'Shenaya',
	gender:'F',
	hobby:'pets',
	avatar:'avatar5.jpg'
},
{
	name:'Ishani',
	gender:'F',
	hobby:'pets',
	avatar:'avatar6.jpg'
},
{
	name:'Rehan',
	gender:'M',
	hobby:'Music',
	avatar:'avatar1.jpg'
},
{
	name:'Vishal',
	gender:'M',
	hobby:'sports',
	avatar:'avatar2.jpg'
},
{
	name:'Avantha',
	gender:'M',
	hobby:'shopping',
	avatar:'avatar3.jpg'
},
{
	name:'Geeth',
	gender:'M',
	hobby:'pets',
	avatar:'avatar4.jpg'
},
{
	name:'Himaya',
	gender:'F',
	hobby:'party',
	avatar:'avatar8.jpg'
},
{
	name:'Tharushi',
	gender:'F',
	hobby:'shopping',
	avatar:'avatar7.jpg'
}
];


window.addEventListener('load',function(){

	var results=document.getElementById('results');

	function search(){

		//get hobby
		var hobbyField=document.getElementById('hobby');
		var hobby=hobbyField.value;
		console.log(hobby);

		//get gender
		var genderField=document.getElementById('gender');
		var s=genderField.selectedIndex;
		var gender=genderField.options[s].value;
		console.log(gender);

		var resultsHtml='';
		var usersLength=users.length
		for(var i=0; i< usersLength; i++){
			//check gender
			if (gender=='A' || gender==users[i].gender){
				//check hobby
				if (hobby=='' || hobby==users[i].hobby){
					resultsHtml += '<div class="person-row">\
					<img src="avatar/' +users[i].avatar+ '">\
					<div class="person-info">\
					<div>' +users[i].name+ '</div>\
					<div>' +users[i].hobby+ '</div></div>\
					<button>Add as friend</button></div>';
				}
			}
			
		}

		results.innerHTML=resultsHtml;
		
	}

	var searchBtn = document.getElementById('searchBtn');
	searchBtn.addEventListener('click',search);
	});

