$(function(){
	$(".logo_tow_nav").hide();
	$(".logo_box").mouseover(function(){
				$(".logo_box").addClass("logo_box_hover")
				$(".logo_tow_nav").show();
			})
	$(".logo_tow_nav").mouseover(function(){
				$(".logo_tow_nav").show();
			})
	$(".logo_tow_nav").mouseout(function(){
				$(".logo_tow_nav").hide();
				$(".logo_box").removeClass("logo_box_hover")
				
		})		
	$(".logo_box").mouseout(function(){
				$(".logo_tow_nav").hide();
				
		})
	
	/*“我的订单”部分下来菜单--指向*/
	$(".logo_nav_tow").hide()	
	$(".logo_index").mouseover(function(){
			x=$(".logo_index").index(this)
			$(".logo_nav_tow").eq(x).show();
		})
	/*“我的订单”部分下来菜单--移出*/	
	$(".logo_index").mouseout(function(){
			$(".logo_nav_tow").hide();
		})
	

	$(".thumbnail img").eq(0).addClass("border_red")
	var n = 0;
	function imgChange(){
		if(n<$("#banner img").length-1){
			n=n+1;
			}else{
			n=0;	
		}
			 
		$("#banner img").hide();
		$("#banner img:eq("+n+")").fadeIn(555);
		$(".thumbnail img").removeClass("border_red")
		$(".thumbnail img").eq(n).addClass("border_red")
		}
	
	var clock = setInterval(imgChange,3000);
	$("#banner_box").mouseover(function(){
		clearInterval(clock);
			}).mouseout(function(){
			clock=setInterval(imgChange,3000)	
	})
	
	$("#btn_right").click(function(){
		if(n<$("#banner img").length-1){
			n=n+1;
			}else{
			n=0;	
		}
		$("#banner img").hide();
		$("#banner img").eq(n).fadeIn(333);	
		$(".thumbnail img").removeClass("border_red")
		$(".thumbnail img").eq(n).addClass("border_red")	
	})
	
	$("#btn_left").click(function(){
		if(n>0){
			n=n-1;
			}else{
			n=$("#banner img").length-1;	
		}
		$("#banner img").hide();
		$("#banner img").eq(n).fadeIn(333);
		$(".thumbnail img").removeClass("border_red")
		$(".thumbnail img").eq(n).addClass("border_red")		
	})
	
	$(".thumbnail li").click(function(){
		n=$(".thumbnail li").index(this)
		$("#banner img").hide();
		$("#banner img").eq(n).fadeIn(333);
		$(".thumbnail img").removeClass("border_red")
		$(".thumbnail img").eq(n).addClass("border_red")
	})
	
})