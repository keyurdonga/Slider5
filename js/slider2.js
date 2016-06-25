
$( document ).ready(function() {
				
		var slider5 = function(display){	
			
			
			var sliderOptions = function(value){
				
				//Items to be seen on slider
				itemsOnSlider = value ;
				//total items present on slider
				totalItems=$('.slider-item').length;
				//index of first element on slider i.e. which element to start slider from
				indexFirst = 0;
				//single width value of the slider
				singleWidth = $('.slider-item').width();
				//slider extra width from left side
				extraWidth=20;
				//total width of the entire slider
				totalWidth = singleWidth * totalItems;
				
				
				
			}			
			sliderOptions(display);
			
			//Assign total width to the slider and also the height of slider
			$('.slider').css({ "width": totalWidth ,"height":'240px' });				
			
			//Initially all list members are hidden
			$('.slider-item').each(function(index){								
					$(this).val(index).fadeTo(0,0);
			});
			
			if(itemsOnSlider > 3 )
			{
				$('.slider-item:last()').prependTo('.slider');
				$('.slider-item:last()').prependTo('.slider');
				//assigns respective classes to active elements
				assignClass();
			}else
			if(itemsOnSlider <= 3)
			{
				$('.slider-item:last()').prependTo('.slider');
				
				$('.slider-item:first()').addClass('active-prev').fadeTo( 0, 1 );
				$('.active-prev').next().addClass('active').fadeTo( 0, 1 );
				$('.active').next().addClass('active-next').fadeTo( 0, 1 );
			}
			currentWidth();
			
			//Displays Next element of list as active on Slider
			$(".next").click(function() {	
			
				//removes respective classes of active elements
				rClass();
				if(itemsOnSlider > 3 )
				{
					$('.slider-item:first()').appendTo('.slider');
					assignClass();
					
				}else
				if(itemsOnSlider <= 3)
				{
					$('.slider-item:first()').appendTo('.slider');
					
					$('.slider-item:first()').addClass('active-prev').fadeTo(0,1);
					$('.active-prev').next().addClass('active').fadeTo(0,1);
					$('.active').next().addClass('active-next').fadeTo(0,1);
				
				}
				currentWidth();
			});
			
			// Displays Previous element of list as active on slider
			$( ".prev" ).click(function() {														
				
				rClass();
				if(itemsOnSlider > 3 )
				{	
					$('.slider-item:last()').prependTo('.slider');
					
					assignClass();
				}else
				if(itemsOnSlider <= 3)
				{	
					$('.slider-item:last()').prependTo('.slider');
				
					$('.slider-item:first()').addClass('active-prev').fadeTo( 0, 1);
					$('.active-prev').next().addClass('active').fadeTo( 0, 1);
					$('.active').next().addClass('active-next').fadeTo( 0, 1);
				}
				currentWidth();
			});
			
			// Displays clicked element of list as active on slider
			$( ".slider-item" ).click(function() {
				
				switch($(this).index())
				{
					case 0:
						rClass();
						$('.slider-item:last()').prependTo('.slider');
						$('.slider-item:last()').prependTo('.slider');
						break;
					case 1:
						rClass();
						$('.slider-item:last()').prependTo('.slider');
						break;
					case 3:
						rClass();
						$('.slider-item:first()').appendTo('.slider');
						break;
					case 4:
						rClass();
						$('.slider-item:first()').appendTo('.slider');
						$('.slider-item:first()').appendTo('.slider');
						break;
					default:
						break;
				}
					assignClass();
					currentWidth();					
			});
			
			
			//Window resize function
			$( window ).resize(function(size) {														
					 currentWidth();
			});	
			
		};	
		  
		
		function assignClass()
		{
			$('.slider-item:first()').addClass('active-prev1').fadeTo( 0, 1 );
			$('.active-prev1').next().addClass('active-prev').fadeTo( 0, 1 );
			$('.active-prev').next().addClass('active').fadeTo( 0, 1 );
			$('.active').next().addClass('active-next').fadeTo( 0, 1 );
			$('.active-next').next().addClass('active-next1').fadeTo( 0, 1 );
		};
		function rClass()
		{
			$('.slider-item').removeClass('active-prev1').fadeTo( 0, 0 );
			$('.slider-item').removeClass('active-prev').fadeTo( 0, 0 );
			$('.slider-item').removeClass('active').fadeTo( 0, 0 );
			$('.slider-item').removeClass('active-next').fadeTo( 0, 0 );
			$('.slider-item').removeClass('active-next1').fadeTo( 0, 0 );
		};
		function leftOffsetter( a , b ) 											// Slider left offset calculator
		{										
				var indexOffset = ( a * b) * -1,
					leftOffset = indexOffset; 										// Slide position = Left

				return leftOffset;
		};
		function currentWidth(){
			var size = $( window ).width();
			if(size > 1100)
				 {	
					$('.active-prev').fadeTo( 0, 1 ).attr('style','display:active');
					$('.active-next').fadeTo( 0, 1 ).attr('style','display:active');
					$('.active-prev1').fadeTo( 0, 1 ).attr('style','display:active');
					$('.active-next1').fadeTo( 0, 1 ).attr('style','display:active');
					$('.slider').css({
						'left': leftOffsetter( singleWidth , 0 )
					});
					 
				 }else
				 if(size < 1100 && size > 720 )
				 {				
					$('.active-prev').fadeTo( 0, 1 ).attr('style','display:active');
					$('.active-next').fadeTo( 0, 1 ).attr('style','display:active');
					$('.active-prev1').fadeTo( 0, 0 ).attr('style','display:none');
					$('.active-next1').fadeTo( 0, 0 ).attr('style','display:none');
					$('.slider').css({
						'left': extraWidth+leftOffsetter( singleWidth , 1 )
					});	
					
				 }else 
				 if(size < 720)
				 {				
					$('.active-prev').fadeTo( 0, 0 ).attr('style','display:none');
					$('.active-next').fadeTo( 0, 0 ).attr('style','display:none');
					$('.active-prev1').fadeTo( 0, 0 ).attr('style','display:none');
					$('.active-next1').fadeTo( 0, 0 ).attr('style','display:none');
					$('.slider').css({
						'left': extraWidth + leftOffsetter( singleWidth , 2 )
					});	
					
				 }
		};
		
		slider5(5);
		
		
		
		
		
});
	
	