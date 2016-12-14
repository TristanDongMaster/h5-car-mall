$(function(){

$("body").tap(function(){
		
			console.log("12");
	});

	// $("body").on("click"," .share-btn", function(){
	// 		$(".dialog-custom").show();
	// 		$("#withdraw-dialog").show();
	// });

	$("body  .share-btn").tap( function(){
			$(".dialog-custom").show();
			$("#withdraw-dialog").show();
	});

	$("body .share-btn-code").tap(function(){
			$(".dialog-share").show();
	});

	$("body .share-btn-copy").tap(function(){
			$(".dialog-store").show();
	});


	$("body .dialog-block").tap(function(event){
		var target = $(event.target);
		if(!target.closest(".dialog-custom-container").length){
				$(this).closest(".dialog-block").hide();
		}
	});

	$("body .share-closed").tap(function(){
			$(this).closest(".dialog-block").hide();
	})
	$("body .share-code-btn").tap(function(){
		$(this).closest(".dialog-custom").hide();
		$(".dialog-custom-code").show();
	});

	$("body .store-setting").tap(function(){
			$(".dialog-custom").show();
	});


	$("body .filter-btn").tap(function(){
		$(".filter-value-container").hide();
		$(".dialog-filter").toggle();
			//$(".dialog-filter").show();
			if($(this).hasClass("filter-brand")){
				$(".filter-dialog .filter-brand").show();
			}
			else if($(this).hasClass("filter-money")){
				$(".filter-dialog .filter-money").show();
			}
			else if($(this).hasClass("filter-price")){
				$(".filter-dialog .filter-price").show();
			}
	});

	$("body .filter-icon").tap(function(){
			$(".myorder-status").toggleClass("hide");
	});

	$("body").tap(function(event){
		var target = $(event.target);
		if(!target.closest(".filter-icon").length){
				$(".myorder-status").addClass("hide");
		}
			
	});

	$(".checkedIcon ").tap(function(){
		$(this).toggleClass("uncheckedIcon");
	});

	$(".uploadIcon").tap(function(){
		$(this).toggleClass("updownIcon");
	});

	$(" .arrow-down-css").tap(function(){
		$(this).toggleClass("arrow-up-css");
	});


})