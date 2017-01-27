
var annotation_flag=false;
var count = 0;
var name = "annotationtxt";
var inputId;
var selectstring;
var node;
<!--实现标注-->
function annotation(){
    console.log(1);
    annotation_flag=true;
    

    <!--按一次按钮只能触发一次-->
    if(annotation_flag==true){        
		count++;
		console.log(3)
        var selection = window.getSelection();   
	    var selectAnchorNode = selection.anchorNode;
		node = selectAnchorNode.parentElement;
	        

	    var newSpan=document.createElement("input");	
		selectstring = selection.toString();	
 		inputId = name+count;
	    newSpan.className="annotation_edit"; 
		newSpan.id=inputId;
		
		newSpan.style.left= node.style.left;
		var Position = parseInt(node.style.top);		
		
		Position+=10;		
	
		var sPosition =	Position.toString()+"px";
		newSpan.style.top= sPosition             

		document.getElementById("pageContainer1").appendChild(newSpan);
         selection.removeAllRanges();
         annotation_flag=false;

    }
   
   
    
}
<!--实现点一下标红以后标注信息的标签消失-->
function click_hide(a)
{
 
  var hideid = a.toString();
  hideid = "newdiv"+hideid
  if(document.getElementById(hideid).style.display=="none"){
    document.getElementById(hideid).style.display="block";
  }
  else{
    document.getElementById(hideid).style.display="none"
  }
  

}

<!--通过修改背景色实现高亮标红-->
function highlight()
{
	var beforestring = node.innerHTML.toString();
	var id = count;
	var id = id.toString();
	
	var s1 = new String("<span style=\"background-color:red\" onclick=\"click_hide(replaceid)\">");
	var s2 = new String("</span>");

	var replacestr = s1+selectstring+s2;
	var afterstr = beforestring.replace(selectstring,replacestr);
	var afterstr = afterstr.replace("replaceid",id);
	node.innerHTML=afterstr;


}

<!--将标记框修改成书签标记-->
function save(){

    var newDiv=document.createElement("div");
	newDiv.className="annotation_edit";
	var id =count.toString();
	newDiv.id = "newdiv"+id;
	newDiv.style.left=document.getElementById(inputId).style.left;
	newDiv.style.top=document.getElementById(inputId).style.top;
	newDiv.innerHTML=document.getElementById(inputId).value;
	document.getElementById("pageContainer1").appendChild(newDiv);
	
	highlight();
    $("input.annotation_edit").hide(); 
}

