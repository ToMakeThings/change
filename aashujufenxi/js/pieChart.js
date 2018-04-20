function peiChart() {
	//饼图
/*	gvChartInit();
	$(document).ready(function() {
		$('#tb').gvChart({
			chartType: 'PieChart',
			gvSettings: {
				vAxis: {
					title: 'No of players'
				},
				hAxis: {
					title: 'Month'
				},
				width: 375,
				height: 350,
			}
		});
	});*/
	/*var year = $(".pick_date").val();*/
	$.ajax({
		type: "get",
		url: "../tongji?method=tongjiAllPeople&year=2017",
		async: false,
		dataType:"json",
		success: function(data) {
			var data=data;
			var name1,name2,name3; 
			var sum1,sum2,sum3;
			var data1;
			/*console.log(data.result)*/
			$.each(data.result, function(i,val){ 
				 if(val.tj_hangye=="1"){
					  name1="健身产业";
					   sum1=val.tj_allpeople 
				}else if(val.tj_hangye=="2"){
					  name2="冰雪产业";
					  sum2=val.tj_allpeople 
				}else if(val.tj_hangye=="3"){
					  name3="体育产业";
					  sum3=val.tj_allpeople 
		  		} 
		});
			 $("#gvChartDiv1").remove();
			 gvChartInit();
			 $("#name1").html(name1);
			 $("#name2").html(name2);
			 $("#name3").html(name3);
			 $("#tbtd1").html(sum1);
			 $("#tbtd2").html(sum2);
			 $("#tbtd3").html(sum3);
			 $("#numAll").html(sum1+sum2+sum3)
				$('#tb').gvChart({
					chartType: 'PieChart',
					gvSettings: {
						vAxis: {
							title: 'No of players'
						},
						hAxis: {
							title: 'Month'
						},
						width: 375,
						height: 350,
					}
				});
		 
		}
	});
	
	//发送ajax请求  请求饼图数据
	$(".pick_date").change(function() {
		var year = $(".pick_date").val();
		$.ajax({
			type: "get",
			url: "../tongji?method=tongjiAllPeople&year="+year+"",
			async: false,
			dataType:"json",
			success: function(data) {
				 var name1,name2,name3; 
				var sum1,sum2,sum3;
				var data1;
				 if(data.result[0]==null){
					 alert("暂无数据,将显示原先数据")
				 }  
				$.each(data.result, function(i,val){ 
				 
					if(val.tj_hangye=="1"){
						  name1="健身产业";
						   sum1=val.tj_allpeople 
					}else if(val.tj_hangye=="2"){
						  name2="冰雪产业";
						  sum2=val.tj_allpeople 
					}else if(val.tj_hangye=="3"){
						  name3="体育产业";
						  sum3=val.tj_allpeople 
			  		} 
			});
				 $("#gvChartDiv1").remove();
				 gvChartInit();
				 $("#name1").html(name1);
				 $("#name2").html(name2);
				 $("#name3").html(name3);
				 $("#tbtd1").html(sum1);
				 $("#tbtd2").html(sum2);
				 $("#tbtd3").html(sum3);
				 $("#numAll").html(sum1+sum2+sum3)
					$('#tb').gvChart({
						chartType: 'PieChart',
						gvSettings: {
							vAxis: {
								title: 'No of players'
							},
							hAxis: {
								title: 'Month'
							},
							width: 375,
							height: 350,
						}
					});
			 
			}
		});
	})
	 
}