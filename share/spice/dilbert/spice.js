function ddg_spice_dilbert(response) {
    var smbc = response;
    var comic = response.items[0].image_url;
    var comic_alt_text = response.items[0].alt_text;
    var previous = response.items[1].link;
    var answer = '<img class="img_zero_click_big" src="' + comic + '"/>'
               + '<br>'
               + '<a href="' + previous + '"'
                   + (comic_alt_text != null ? 'alt="' + comic_alt_text + '"' : '')
                   + '>Prev&nbsp;&nbsp;</a>';

	var items = new Array();
	items[0] = new Array();
    items[0]['a'] = answer;
	items[0]['h'] = response.items[0].title + ' (Dilbert)';
	items[0]['s'] = 'Dilbert';
	items[0]['u'] = response.link;
    items[0]['force_big_header'] = true;
    items[0]['force_no_fold'] = 1;

	nra(items);
}
