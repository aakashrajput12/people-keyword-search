
$(document).ready(function(){
    $('#search').click(function(){ 
		var keyword= encodeURIComponent('car');;
        // Bing Search API 
/*		var bing_url='http://api.search.live.net/json.aspx?JsonType=callback&JsonCallback=?&Appid= JW5mv1sISj+ioy0uL4Mv14squDiO+Qqlb0WGBZDfbLE&query='+keyword+'&sources=web';

		var bing_url ='http://api.bing.net/json.aspx?AppId=43073a45-48ae-4a5f-9d17-19200b664fb5&Version=2.2&Market=en-US&Query=testign&Sources=web+spell&Web.Count=1&JsonType=raw'
*/
//var bing_url = 'http://api.bing.net/xml.aspx?query=sushi&sources=web';
var bing_url = "'http://api.datamarket.azure.com/Bing/SearchWeb/Web?Query=%27hi%27";
//var bing_url =  "https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/Image?Query=%27Seattle%27&$top=50&$format=json"
		$.ajax
		({
			type: "GET",
			url: bing_url,
			//dataType:"jsonp",
			context: this,
			beforeSend: function(xhr){
				xhr.setRequestHeader('Authorization', base64_encode(':' + '43073a45-48ae-4a5f-9d17-19200b664fb5'));
			},
			success: function(data) {
					alert("success");
					alert(data);
            },
            error: function(hr, textStatus, thrownError, data) {
				alert("failed");
                alert(hr.responseText + "\n" + textStatus + "\n" + thrownError + "\n" + data);
                
            }
        });
    });
	
	function base64_encode(data) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Bayron Guevara
  // +   improved by: Thunder.m
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Rafal Kukawski (http://kukawski.pl)
  // *     example 1: base64_encode('Kevin van Zonneveld');
  // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof this.window['btoa'] == 'function') {
  //    return btoa(data);
  //}
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  do { // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}
});