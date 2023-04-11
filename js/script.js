$(document).ready(function(){
	$('#add').on('click', function(){
		var	inputVal = $('#input').val();
		if(inputVal === ''){
			alert('input not null');
		}else{
			var arrValToDo = [];
			$('.ip').each(function(index){
			arrValToDo[index] = $(this).text();
			});
			if ($.inArray(inputVal, arrValToDo) < 0) {
				var htmlContent = '<tr class="list">'+
										'<td class="checkbox"></td>'+
										'<td class="ip">'+inputVal+'</td>'+
										'<td class="btn"><span class="fa fa-times"></span></td>'
								+'</tr>';
				$('#content').append(htmlContent);
				$('#input').val('');
			}else{
				alert('input duplicate');
			}
		}
	})
	$(document).on('click', '.list',function(){
		$(this).find('.checkbox').html('<span class="fa fa-check"></span>');
		$(this).find('.ip').css('text-decoration-line','line-through');
	})
	$(document).on('click', '.btn span',function(){
		$(this).parent().parent().remove();
	})
})