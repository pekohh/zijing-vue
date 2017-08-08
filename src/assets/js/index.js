$(function() {
         //点击显示隐藏nav
        $("#sec").click(function(){
            $("#nav1").toggle();
        })
 /* 
        //无限加载
        var start=0;
        var pageSize=10;
        var isFlag=true;
       	var counter=0
    	dataLoad(start,pageSize)

    	//滚动条小于页面底部10的时候加载

    	$(window).scroll(function(){
    		if ($(document).height() - $(this).scrollTop() - $(this).height()<10){
    			counter++
    			start=counter*pageSize;
    			dataLoad(start,pageSize,isFlag)
    		}
    	})*/
 
}); 
//无限加载函数
/*
	function dataLoad(start,pageSize,isFlag){

		$.ajax({
			type:'get',
			url:'./src/data/aa.txt',
			dataType:'json',

			success:function(data){
				 var result='';
				 var sum=data.length;
				 var len=start+pageSize;
				 if(len>=sum)
				 {
				 	len=sum;
				 	isFlag=false;
				 }
				 for(var i=start;i<len;i++){
				 	//console.log(i)
				 	result+="<li><div class='con_l'><img src='"+data[i].imgurl+"'></div><div class='con_r'><h3><a href=''>"+data[i].title+"</a></h3><span><i></i><time>"+data[i].time+"</time></span></div></li>"
				 		
				 }
					$('#content ul').append(result)
			},
			err:function(jqXHR){
				
			
				console.log(jqXHR.json)

			}
		})
	}*/
