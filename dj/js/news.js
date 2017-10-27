$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.render();
		},
		bindEvent:function(){
			var that=this;	
			$(".group h2 i").on("click",function(){
				window.history.go(-1);
			});
			$(".groupsTop li").on("click",function(){
				var i = $(this).index();
				$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
				$(".groupsCon .pers").eq(i).show().siblings().hide();
			})
			//返回顶部
		    $('.go-back').on('click',function(){
		        var top = $(window).scrollTop();
		        var interval = setInterval(function(){
		            top -= 50;
		            if(top >= 50){
		                $(window).scrollTop(top);
		            }else {
		                $(window).scrollTop(0);
		                clearInterval(interval);
		            }
		        },20)
		    });
		     //底部按钮显示隐藏
		    $(window).on('scroll',function(){
		        var top = $(window).scrollTop();
		        var height = document.body.offsetHeight;
		        if(top >= height/2){
		            $('.go-back').show();
		        }else{
		            $('.go-back').hide();
		        }
		    });
		},
		render:function(){
			
		}
	};
	index.init();
})