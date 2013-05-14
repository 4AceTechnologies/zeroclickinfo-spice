function ddg_spice_khan_academy ( api_result ) {

	// check for response
	if ( !api_result.items ) return;

	var query = DDG.get_query().replace(/khan(\sacademy)?|videos?/g, "").trim();

	Spice.render({
		data: api_result,
		source_name : 'Khan Academy',
		source_url : 'http://www.khan_academy.com/?q=' + query,
		header1 : query + ' (Khan Academy)' ,
		force_no_fold : 1,
		force_big_header : 1,
		
		template_frame: "carousel",
		template_normal: "khan_academy",
		carousel_css_id: "khan_academy",
		carousel_template_detail: "khan_academy_detail",
		carousel_items: api_result.items,
		template_options : {
			li_width : 120
		}
	});

	// Move ddgc_detail above carousel
	$("#ddgc_detail").prependTo("#khan_academy");

	// Set height of ddgc_detail;
	resizeDetail();
	
	// Maintain 16/9 aspect ratio
	$(window).resize( resizeDetail );

	function resizeDetail() {
		var $detail = $("#ddgc_detail");
		var width = $detail.width();
		var height = Math.floor(width * 0.5625) + 30;	//30px for player menu
		$detail.height(height);
	};
}