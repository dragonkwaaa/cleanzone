$( function() {
	$( "#startDate,#endDate").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		// yearSuffix: '년',
		//maxDate:0 // 오늘 이전 날짜 선택 불가
	});
} );


//날짜 검색시
function setSearchDate(start){

	var num = start.substring(0,1);
	var str = start.substring(1,2);

	var today = new Date();
	var year = today.getYear()+1900;

	//var year = today.getFullYear();
	//var month = today.getMonth() + 1;
	//var day = today.getDate();

	var endDate = $.datepicker.formatDate('yy-mm-dd', today);
	$('#endDate').val(endDate);

	if(str == 'd'){
		today.setDate(today.getDate() - num);
	}else if (str == 'w'){
		today.setDate(today.getDate() - (num*7));
	}else if (str == 'm'){
		today.setMonth(today.getMonth() - num);
		today.setDate(today.getDate() + 1);
	}else if (str == 'y'){
		today.setMonth(today.getYear() - num);
		today.setDate(today.getDate() + 1);
	}

	var startDate = $.datepicker.formatDate('yy-mm-dd', today);
	$('#startDate').val(startDate);

	// 종료일은 시작일 이전 날짜 선택하지 못하도록 비활성화
	$("#endDate").datepicker( "option", "minDate", startDate );

	// 시작일은 종료일 이후 날짜 선택하지 못하도록 비활성화
	$("#startDate").datepicker( "option", "maxDate", endDate );

}
