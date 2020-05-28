var app = angular.module('resumeApp',[]);
app.controller('resumeController',function($scope){
      $scope.skillsArr = [];
      $scope.profileArr = [];
      $scope.achivementsArr = [];
      $scope.projectsArr = [];
      $scope.strengthsArr=[];
      var left=20;
      var right=15;

$scope.resume = function(name,contact,postal,address,educationClg,educationSchool1,educationSchool2,skills,careerObjective,profile,achivements,projects,strengths){
	
	function alignment(word,word_len){
		var temp=word;
		var len=temp.length;
		var words=temp.split(" ");
		var sentence="";
		var tempArr=[];
		var l=0;
		for(var k=0;k<words.length;k++){
			l+=words[k].length+1;
			if(l>word_len){
				l=words[k].length+1;
				tempArr.push(sentence);
				sentence=words[k]+" ";
			} 
			else{
				sentence+=(words[k]+" ");
			}
		}
		tempArr.push(sentence);
		return tempArr;
	}

	function alignment_left(word,word_len){
		var tempArr=[];
		for(var i=0;i<word.length;i+=word_len){
			tempArr.push(word.slice(i,i+word_len));
		}
		return tempArr;
	}
	
	

	$scope.skillsArr.push(skills);
    $scope.profileArr.push(profile);
    $scope.achivementsArr.push(achivements);
    $scope.projectsArr.push(projects);
    $scope.strengthsArr.push(strengths);

	var doc = new jsPDF(); 
    
	doc.setFillColor("#2c3e50");
	doc.rect(0,0,90,600,'FD');

	doc.setFontType("Lucida Calligraphy Italic");
	doc.setTextColor("#ecf0f1");
	doc.setFontSize(20);
	doc.text("Address",10,left);
	doc.setDrawColor("ecf0f1");
	doc.line(10,left+2,80,left+2);
	left=left+12;


	doc.setFontType("Comic Sans");
	doc.setFontSize(14);
	doc.text(postal.hno,12,left);
	left=left+7;
	doc.text(postal.street,12,left);
	left=left+7;
	doc.text(address.city,12,left);
	left=left+7;
	doc.text(address.state,12,left); 
	left=left+12;

	doc.setFontSize(14);
	doc.text(contact.phone,10,left); 
	left=left+8;
	doc.text(contact.email,10,left); 
	left=left+15;

	doc.setFontSize(20);
	doc.text("Skills",10,left); 
	doc.setDrawColor("ecf0f1");
	doc.line(10,left+2,80,left+2);
	left=left+12;

	doc.setFontSize(14);
	for(var j in $scope.skillsArr)
	{	
		doc.setFillColor("ecf0f1");
		doc.circle(10, left-1.5, 0.5);
		doc.text($scope.skillsArr[j].s,12,left);
		left=left+7;
	}
	left=left+5;

	doc.setFontSize(20);
	doc.text("Online Profile",10,left);
	doc.setDrawColor("ecf0f1");
	doc.line(10,left+2,80,left+2);

	left=left+12;
	doc.setFontSize(12);
	for(var j in $scope.profileArr)
	{
		doc.setFillColor("ecf0f1");
		doc.circle(10, left-1.5, 0.5);
		console.log($scope.profileArr[j].pro);
		if($scope.profileArr[j].pro.length>35){
			var temp=alignment_left($scope.profileArr[j].pro,35);
			for(var k in temp){
				doc.text(temp[k],12,left);
				left=left+5;
			}
		}else{
			doc.text($scope.profileArr[j].pro,12,left);
			left=left+5;
		}
		left=left+2;
	}
	left=left+5;

	doc.setFontSize(20);
	doc.text("Strengths",10,left);
	doc.setDrawColor("ecf0f1");
	doc.line(10,left+2,80,left+2);

	left=left+12;
	doc.setFontSize(14);
	for(var j in $scope.strengthsArr)
	{
		doc.setFillColor("ecf0f1");
		doc.circle(10, left-1.5, 0.5);
		if($scope.strengthsArr[j].s.length>35){
			var temp=alignment_left($scope.strengthsArr[j].s,35);
			for(var k in temp){
				doc.text(temp[k],12,left);
				left=left+5;
			}
		}else{
			doc.text($scope.strengthsArr[j].s,12,left);
			left=left+5;
		}
		left=left+2;
	}


	doc.setFontSize(29);
	doc.setTextColor("#2c3e50");
	doc.text(name.fn+" "+name.ln,95,right);
	right=right+18;

	doc.setFontSize(20);
	doc.text("Career Objective",95,right); 
	doc.setDrawColor("#2c3e50");
	doc.line(95,right+2,195,right+2);
	right=right+12;
	doc.setFontSize(14);
	doc.setTextColor("#2d3436");  
	var tempArr=alignment(careerObjective,53);
	for(var j in tempArr)
	{
		doc.text(tempArr[j],100,right);
		right=right+5;
	}
	right=right+7;

	doc.setFontSize(20);
	doc.setTextColor("#2c3e50");
	doc.text("Education",95,right); 
	doc.setDrawColor("#2c3e50");
	doc.line(95,right+2,195,right+2);

	right=right+12;
	doc.setFontSize(14);  
	doc.setFillColor("#2d3436");
	doc.circle(100, right-1, 1);
	doc.setTextColor("#2c3e50");
	var temp=right;

	doc.setFontSize(14);
	doc.setTextColor("#2d3436");
	doc.text(educationClg.year,105,right); 
	right=right+8;
	doc.setFontSize(12);
	doc.text("Bachelor of Technology",105,right); right=right+6;
	doc.text(educationClg.college,105,right); right=right+6;
	doc.text(educationClg.branch,105,right); right=right+6;
	doc.text(educationClg.cgpa,105,right); right=right+10;
	doc.setDrawColor("#2c3e50");
	doc.line(100,temp,100,right-2);


	doc.circle(100, right-1, 1);
	doc.setTextColor("#222f3e");
	var temp=right;

	doc.setFontSize(14);
	doc.setTextColor("#2d3436");
	doc.text(educationSchool2.year,105,right); right=right+6;
	doc.setFontSize(12);
	doc.text("Board of Intermediate Education",105,right); right=right+6;
	doc.text(educationSchool2.name,105,right); right=right+8;
	doc.text(educationSchool2.cgpa,105,right); right=right+10;
	doc.setDrawColor("#2c3e50"); 
	doc.line(100,temp,100,right-2);
	var temp=right;

	doc.setFontSize(14);  
	doc.setFillColor("#2c3e50");
	doc.circle(100, right-1, 1);
	doc.setTextColor("#222f3e");

	doc.setFontSize(14);
	doc.setTextColor("#2d3436");
	doc.text(educationSchool1.year,105,right); right=right+8;
	doc.setFontSize(12);
	doc.text("Board of Secondary Education",105,right); right=right+6;
	doc.text(educationSchool1.name,105,right); right=right+6;
	doc.text(educationSchool1.cgpa,105,right); right=right+12;
	doc.setDrawColor("#2c3e50");
	doc.line(100,temp,100,right-12);


	doc.setFontSize(20);
	doc.setTextColor("#2c3e50");
	doc.text("Achivements",95,right); 
	doc.setDrawColor("#2c3e50");
	doc.line(95,right+2,195,right+2);
	right=right+12;
	doc.setFontSize(12);
	doc.setTextColor("#2d3436");
	for(var j in $scope.achivementsArr)
	{
		doc.setFillColor("#2c3e50");
		doc.circle(98, right-1.5, 0.5,'FD');
		if($scope.achivementsArr[j].a.length>53){
			var temp=alignment($scope.achivementsArr[j].a,53);
			for(var k in temp){
				doc.text(temp[k],100,right);
				right=right+5;
			}
		}else{
			doc.text($scope.achivementsArr[j].a,100,right);
			right=right+5;
		}
		right=right+2;
	}
	right=right+5;

	doc.setFontSize(20);
	doc.setTextColor("#2c3e50");
	doc.text("Internships/Projects",95,right); 
	doc.setDrawColor("#2c3e50");
	doc.line(95,right+2,195,right+2);
	right=right+12;
	doc.setFontSize(12);
	doc.setTextColor("#2d3436");
	for(var j in $scope.projectsArr)
	{
		doc.setFillColor("#2c3e50");
		doc.circle(98, right-1.5, 0.5,'FD');
		if($scope.projectsArr[j].pr.length>53){
			var temp=alignment($scope.projectsArr[j].pr,53);
			for(var k in temp){
				doc.text(temp[k],100,right);
				right=right+5;
			}
		}else{
			doc.text($scope.projectsArr[j].pr,100,right);
			right=right+5;
		}
		right=right+2;
	}
    $scope.name={};
	$scope.contact={};
	$scope.postal={};
	$scope.address={};
	$scope.educationClg={};
	$scope.educationSchool1={};
	$scope.educationSchool2={};

	doc.save('resume.pdf');

}
	$scope.skill = function(skills)
	{
		$scope.skillsArr.push(skills);
		$scope.skills={};
	}
	$scope.achivement = function(achivements)
	{
		$scope.achivementsArr.push(achivements);
		$scope.achivements = {};
	}

	$scope.project = function(projects)
	{
		$scope.projectsArr.push(projects);
		$scope.projects = {};
	}
	$scope.profiles=function(profile){
		$scope.profileArr.push(profile);
		$scope.profile={};
	}
	$scope.strength = function(strengths)
	{
		$scope.strengthsArr.push(strengths);
		$scope.strengths={};
	}
});
