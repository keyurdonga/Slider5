
$( document ).ready(function() {
		
		var sliderOptions = function(value){
			//Items to be seen on slider
			itemsOnSlider = value ;
			//total items present on slider
			totalItems=$('.slider-item').length;
			//index of first element on slider i.e. which element to start slider from
			indexFirst = 0;
			//single width value of the slider
			singleWidth = $('.slider-item').width();
			//total width of the entire slider
			totalWidth = (singleWidth * totalItems);
			contextSingleWidth = $(window).width();
			contextItems = $('.slider-item-context').length;
			contextTotalWidth = contextSingleWidth * contextItems;
			
		}	

		var slider5 = function(display){	
			
			var navList ;
			sliderOptions(display);
			//Assign total width to the slider and also the height of slider
			$('.slider').css({ "width": totalWidth });				
			//Initially all list members are hidden
			$('.slider-item').each(function(index){	
				$(this).val(index);
			});
			$('.slider-context').css({ "width": contextTotalWidth });
			$('.slider-item-context').each(function(index){
				$(this).val(index);
			});
			if(itemsOnSlider > 3 )
			{
				$('.slider-item:last()').prependTo('.slider');
				$('.slider-item:last()').prependTo('.slider');
				//assigns respective classes to active elements
				rClass();
				assignClass();

			}else
			if(itemsOnSlider <= 3)
			{
				$('.slider-item:last()').prependTo('.slider');
				$('.slider-item:first()').addClass('active-prev');
				$('.active-prev').next().addClass('active');
				$('.active').next().addClass('active-next');
			}
			contextNav();
			navigation();
			currentWidth();
			
			//Displays Next element of list as active on Slider
			$(".next-nav").click(function(){ navNext();});			
			// Displays Previous element of list as active on slider
			$(".prev-nav").click(function(){ $(".slider").css({ left:'-=260'+ 'px' }); navPrev();});
			// Displays clicked element of list as active on slider
			$( ".slider-item" ).click(function() {				
				switch($(this).index())
				{
					case 0:
						$(".slider").css({ left:'-=520'+ 'px' });
						navPrev1();
						break;
					case 1:
						$(".slider").css({ left:'-=260'+ 'px' });
						console.log('b4 navPrev');
						navPrev();
						console.log('after navPrev');
						$(".slider").css({ left:'-=260'+ 'px' });
						console.log('b4 navPrev1');
						navPrev();
						console.log('after navPrev1');
						break;
					case 3:
						navNext();
						break;
					case 4:
						navNext1();
						break;
					default:
						break;
				}
									
			});			
			//Window resize function
			$( window ).resize(function(size) {														
					 currentWidth();
			});			
		};	
		  
		function navNext() {
			$(".slider").animate({ left:'-=260'+ 'px' }, {
				duration: 800,
				step: function(now, fx){
					$(".slider-item:gt(0)").css("left", now);
				},
				complete:function(){
					$('.slider-item:first()').appendTo('.slider');
					rClass(); 
					assignClass();
					$(".slider").css({ 'left':'+=260'+ 'px'});
					currentWidth();
					 contextNav();
				},
				start:function(){
					$('.active-prev img').css({'transform' : "scale("+ 0.70 +")",'opacity':0.33});
					$('.active img').css({'transform' : "scale("+ 0.80 +")",'opacity':0.66});
					$('.active-next img').css({'transform' : "scale("+ 1 +")",'opacity':1});
					$('.active-next1 img').css({'transform' : "scale("+ 0.80 +")",'opacity':0.66});
				}
			});			
		}
		
		function navPrev() {				
			$('.slider-item:last()').prependTo('.slider');
			$(".slider").animate({ left:'+=260'+ 'px' }, {
				duration: 100,
				complete:function(){					  
					$(".slider").css({ left:'0'+ 'px' });
					rClass();					 
					assignClass();
					currentWidth();
					contextNav();
					console.log('complete navPrev');					
				},
				start:function(){				
					$('.active-prev1 img').css({'transform' : "scale("+ 0.80 +")",'opacity':0.66});
					$('.active-prev img').css({'transform' : "scale("+ 1 +")",'opacity':1});
					$('.active img').css({'transform' : "scale("+ 0.80 +")",'opacity':0.66});
					$('.active-next img').css({'transform' : "scale("+ 0.70 +")",'opacity':0.33});
					console.log('start navPrev');
				}
			});	 
		}
		
		function navNext1() {
			$(".slider").animate({ left:'-=520'+ 'px' }, {
				duration: 800,
				step: function(now, fx){
					$(".slider-item:gt(0)").css("left", now);
				},
				complete:function(){
					rClass();
					$('.slider-item:first()').appendTo('.slider');
					$('.slider-item:first()').appendTo('.slider');
					assignClass();
					$(".slider").css({ 'left':'+=520'+ 'px'});
					currentWidth();
					 contextNav();
				},
				start:function(){
					$('.active-prev img').css({'transform' : "scale("+ 0.70 +")",'opacity': 0.33});
					$('.active img').css({'transform' : "scale("+ 0.70 +")",'opacity': 0.33});
					$('.active-next img').css({'transform' : "scale("+ 0.80 +")",'opacity': 0.66});
					$('.active-next1 img').css({'transform' : "scale("+ 1 +")",'opacity': 1});				
					$('.slider-item img').eq(5).css({'transform' : "scale("+ 0.80 +")",'opacity': 0.66});
				}
			});	
		}
		
		function navPrev1() {	
			$('.slider-item:last()').prependTo('.slider');
			$('.slider-item:first() img').css({'transform' : "scale("+ 0.80 +")"});
			$('.slider-item:last()').prependTo('.slider');
			$(".slider").animate({ left:'+=520'+ 'px' }, {
				duration: 800,
				step: function(now, fx){
					$(".slider-item:gt(0)").css("left", now);
				},
				complete:function(){					  
					rClass();					 
					assignClass();
					currentWidth();
					 contextNav();
				},
				start:function(){
					$('.active-prev1 img').css({'transform' : "scale("+ 1 +")",'opacity': 1});
					$('.active-prev img').css({'transform' : "scale("+ 0.80 +")",'opacity': 0.66});
					$('.active img').css({'transform' : "scale("+ 0.70 +")",'opacity': 0.33});
					$('.active-next img').css({'transform' : "scale("+ 0.70 +")",'opacity': 0.33});
				}
			});	
		}
		
		function assignClass()
		{
			//assigning the classes to the elements
			$('.slider-item:first()').addClass('active-prev1').fadeTo( 0, 1 );
			$('.active-prev1').next().addClass('active-prev').fadeTo( 0, 1 );
			$('.active-prev').next().addClass('active').fadeTo( 0, 1 );
			$('.active').next().addClass('active-next').fadeTo( 0, 1 );
			$('.active-next').next().addClass('active-next1');
			
			//Assigning the sizes and sacles of the images w.r.t. classes
			$('.active-prev1 img').css({'transform' : "scale("+ 0.70 +")",'opacity':'0.33'});
			$('.active-prev img').css({'transform' : "scale("+ 0.80 +")",'opacity':'0.66'});
			$('.active img').css({'transform' : "scale("+ 1 +")",'opacity':'1'});
			$('.active-next img').css({'transform' : "scale("+ 0.80 +")",'opacity':'0.66'});
			$('.active-next1 img').css({'transform' : "scale("+ 0.70 +")",'opacity':'0.33'});
			
			//setting the active elements index value
			var activeNav = $('.active').val();
			$('.element-nav').eq(activeNav).addClass('active');
		};
		
		function rClass()
		{
			$('.slider-item').removeClass('active-prev1');
			$('.slider-item').removeClass('active-prev');
			$('.slider-item').removeClass('active');
			$('.slider-item').removeClass('active-next');
			$('.slider-item').removeClass('active-next1');

			//Navigation elements active value
			$('.active').removeClass('active');			
		};
		
		function leftOffsetter( a , b ) 											// Slider left offset calculator
		{										
			var indexOffset = ( a * b) * -1,
				leftOffset = indexOffset; 										// Slide position = Left

			return leftOffset;
		};
		
		function currentWidth()
		{
			var size = $( window ).width();
			if(size > 1100)
			{	
				$('.active-prev').fadeTo( 0, 1 );
				$('.active-next').fadeTo( 0, 1 );
				$('.active-prev1').fadeTo( 0, 1 );
				$('.active-next1').fadeTo( 0, 1 );
				$('.slider').css({
					'left': leftOffsetter( singleWidth , 0 )
				});	 
			}else
			if(size < 1100 && size > 720 )
			{				
				$('.active-prev').fadeTo( 0, 1 );
				$('.active-next').fadeTo( 0, 1 );
				$('.active-prev1').fadeTo( 0, 0 );
				$('.active-next1').fadeTo( 0, 0 );
				$('.slider').css({
					'left':leftOffsetter( singleWidth , 1 )
				});		
			}else 
			if(size < 720)
			{				
				$('.active-prev').fadeTo( 0, 0 );
				$('.active-next').fadeTo( 0, 0 );
				$('.active-prev1').fadeTo( 0, 0 );
				$('.active-next1').fadeTo( 0, 0 );
				$('.slider').css({
					'left':leftOffsetter( singleWidth , 2 )
				});		
			}
		};
		
		function contextNav(){
			var navActive = $('.active').val();
			var navCurrent = $('.active-context').val();
			var navigateTo = navActive - navCurrent;
			var windowSize = $( window ).width();
			$('.slider-item-context').css({ "width": windowSize });
			var slideTo = (navigateTo * windowSize);
			console.log(navActive);
			console.log(navCurrent);
			if(navCurrent != navActive)
			{
				$(".slider-context").animate({ left:'-='+slideTo }, {
						duration: 800,
						step: function(now, fx){
							$(".slider-item-context:gt(0)").css("left", now);
						},
						complete:function(){
							$('.slider-item-context').eq(navActive).addClass('active-context');
						},
						start:function(){
							$('.active-context').removeClass('active-context');
						}
					});				
			}	
		}
		
		function navigation()
		{
			// Create navigation list
			var navigationList= '<ul class="pagination"><li><a href="#" class="prev-nav" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
			for(i=0;i<totalItems;i++)
			{
				if( i != 0){
					navigationList +=  "<li class='element-nav' value='" + i + "'><a href='#'>" + i + "</a></li>";
				}else{
					navigationList +=  "<li class='element-nav active' value='" + i + "'><a href='#'>" + i + "</a></li>";
				}
				
			}
			//close navigation list
			navigationList += '<li><a href="#" class="next-nav" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>';			
			console.log('b4 clicked');
			// Define temporary list object and add click events
			
			navList = $( navigationList ).on( "click", ".element-nav", function() {
				var clickedIndex = $(this).val();
				var indexCurrent = $('.active').val();
				var value = clickedIndex - indexCurrent;
				var lastVal = $('.slider-item:last()').index();
				var leftValue = (260 * value)+'px';
				console.log(leftValue);
				if ( clickedIndex !== indexCurrent  ) {									
						if(value>0){
							if(value==1){ navNext();
							}else if(value==2){ 
								navNext1();
							}else if(value==lastVal-1){ 
								$(".slider").css({ left:'-=520'+ 'px' }); navPrev1();
							}else if(value==lastVal){ 
								$(".slider").css({ left:'-=260'+ 'px' }); navPrev();
							}else{								
								$(".slider").animate({ left:'-='+leftValue }, {
									duration: 800,
									step: function(now, fx){
										$(".slider-item:gt(0)").css("left", now);
									},
									complete:function(){
										
										for(i=0;i<value;i++)
										{
											$('.slider-item:first()').appendTo('.slider');
										}	
										$(".slider").css({ left:'+='+leftValue });
										rClass();
										assignClass();
										currentWidth(); 
										 contextNav();
									},
									start:function(){
										$('.active-prev img').css({'transform' : "scale("+ 0.70 +")"});
										$('.active img').css({'transform' : "scale("+ 0.70 +")"});
										$('.active-next img').css({'transform' : "scale("+ 0.70 +")"});
									}
								});	
							}				
						}else if(value<=0){
							if(value == -1){ 
								$(".slider").css({ left:'-=260'+ 'px' });
								navPrev();
							}else if(value == -2){ 
								$(".slider").css({ left:'-=520'+ 'px' });
								navPrev1();
							}else if(value == -lastVal){ 
							    navNext();
							}else if(value == -lastVal+1){
								navNext1();
							}else{		
								for(i=-1;i>value;i--)
								{
									$(".slider").css({'left':'-=260'+ 'px' });
									$('.slider-item:last()').prependTo('.slider');
								}
								$(".slider").css({'left':'-=260'+ 'px' });
								$('.slider-item:last()').prependTo('.slider');
								
								$(".slider").animate({ left:'-='+leftValue  }, {
									duration: 800,
									step: function(now, fx){
										$(".slider-item:gt(0)").css("left", now);
									},
									complete:function(){
										rClass();
										assignClass();
										currentWidth();
										 contextNav();
									},
									start:function(){
										$('.active-prev img').css({'transform' : "scale("+ 0.70 +")"});
										$('.active img').css({'transform' : "scale("+ 0.70 +")"});
										$('.active-next img').css({'transform' : "scale("+ 0.70 +")"});										
										
									}
								});
							}
						}
					}	
				});
				$('nav').append( navList );
		}	
		slider5(5);
		
});
	
	