function histogram() {
	 
	var arr1=[];
	var arr2=[];
	var arr3=[];
	 
	//发送ajax请求  请求柱状图数据
	$(".pick_date2").change(function() {
		var year = $(".pick_date2").val();
		if(year==null&&year==undefined){
			year=2017
		}
		   arr1.splice(0,arr1.length)
		   arr2.splice(0,arr2.length)
		   arr3.splice(0,arr3.length)
		$.ajax({
			type: "get",
			url: "../tongji?method=tongjiLivePeople&year="+year+"",
			async: false,
			dataType:"json",
			success: function(data) {
				var data=data;
					 $.each(data.result, function(i,val){ 
						/*console.log(val2.tj_livepeople)*/
						    /*console.log(val);*/
							 $.each(val, function(i2,val2){
								 if(i==0){
									 arr1.push(val2.tj_livepeople) 
								 }
								 if(i==1){
									 arr2.push(val2.tj_livepeople) 
								 }
								 if(i==2){
									 arr3.push(val2.tj_livepeople) 
								 }
							 }) 
							 
					}); 
		 
						 /*console.log(arr1)
						 console.log(arr2)
						 console.log(arr3)*/
						//柱状图
							var myChartZhu = echarts.init(document.getElementById('myChartZhu'));
							var labelOption = {};

							Zhu_option = {
									color: ['#FF6347', '#87CEFA', '#B3EE3A'],
								tooltip: {
									trigger: 'axis',
									axisPointer: {
										type: 'shadow'
									}
								},
								legend: {
									data: [ '健身产业', '冰雪产业','体育产业',]
								},
								grid: {
									left: '3%',
									right: '4%',
									bottom: '3%',
									containLabel: true
								},
								toolbox: {
									//      show: true,
									//      orient: 'vertical',
									//      left: 'right',
									//      top: 'center',
									//      feature: {
									//          mark: {show: true},
									//          dataView: {show: true, readOnly: false},
									//          magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
									//          restore: {show: true},
									//          saveAsImage: {show: true}
									//      }
								},
								calculable: true,
								xAxis: [{
									type: 'category',
									axisTick: {
										show: false
									},
									data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
								}],
								yAxis: [{
									type: 'value',
									name: '总人数',
									axisLabel: {
									formatter: '{value} 人'
											}

						     	}],
								series: [{
									name: '健身产业',
									type: 'bar',
									label: labelOption,
									data: [arr1[0], arr1[1],arr1[2], arr1[3], arr1[4],arr1[5], arr1[6], arr1[7], arr1[8],arr1[9], arr1[10], arr1[11]]
								}, {
									name: '冰雪产业',
									type: 'bar',
									label: labelOption,
									data: [arr2[0], arr2[1],arr2[2], arr2[3], arr2[4],arr2[5], arr2[6], arr2[7], arr2[8],arr2[9], arr2[10], arr2[11]]
								},{
									name: '体育产业',
									type: 'bar',
									barGap: 0,
									label: labelOption,
									data: [arr3[0], arr3[1],arr3[2], arr3[3], arr3[4],arr3[5], arr3[6], arr3[7], arr3[8],arr3[9], arr3[10], arr3[11]]
								},]
							};
							// 使用刚指定的配置项和数据显示图表。
							 //myChartZhu.clear(); 
							myChartZhu.setOption(Zhu_option);
			}
		});
	})
	//柱状图
	
	$.ajax({
			type: "get",
			url: "../tongji?method=tongjiLivePeople&year=2017",
			async: false,
			dataType:"json",
			success: function(data) {
				var data=data;
					 $.each(data.result, function(i,val){ 
						/*console.log(val2.tj_livepeople)*/
						    /*console.log(val);*/
							 $.each(val, function(i2,val2){
								 if(i==0){
									 arr1.push(val2.tj_livepeople) 
								 }
								 if(i==1){
									 arr2.push(val2.tj_livepeople) 
								 }
								 if(i==2){
									 arr3.push(val2.tj_livepeople) 
								 }
							 }) 
							 
					}); 
					 var myChartZhu = echarts.init(document.getElementById('myChartZhu'));
						var labelOption = {};

						Zhu_option = {
							color: ['#FF6347', '#87CEFA', '#B3EE3A'],
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'shadow'
								}
							},
							legend: {
								data: [ '健身产业', '冰雪产业','体育产业',]
							},
							grid: {
								left: '3%',
								right: '4%',
								bottom: '3%',
								containLabel: true
							},
							toolbox: {
								//      show: true,
								//      orient: 'vertical',
								//      left: 'right',
								//      top: 'center',
								//      feature: {
								//          mark: {show: true},
								//          dataView: {show: true, readOnly: false},
								//          magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
								//          restore: {show: true},
								//          saveAsImage: {show: true}
								//      }
							},
							calculable: true,
							xAxis: [{
								type: 'category',
								axisTick: {
									show: false
								},
								data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
							}],
							yAxis: [{
								type: 'value',
								name: '总人数',
		                       	axisLabel: {
								formatter: '{value} 人'
										}

							}],
							series: [{
								name: '健身产业',
								type: 'bar',
								label: labelOption,
								data: [arr1[0], arr1[1],arr1[2], arr1[3], arr1[4],arr1[5], arr1[6], arr1[7], arr1[8],arr1[9], arr1[10], arr1[11]]
							}, {
								name: '冰雪产业',
								type: 'bar',
								label: labelOption,
								data: [arr2[0], arr2[1],arr2[2], arr2[3], arr2[4],arr2[5], arr2[6], arr2[7], arr2[8],arr2[9], arr2[10], arr2[11]]
							},{
								name: '体育产业',
								type: 'bar',
								barGap: 0,
								label: labelOption,
								data: [arr3[0], arr3[1],arr3[2], arr3[3], arr3[4],arr3[5], arr3[6], arr3[7], arr3[8],arr3[9], arr3[10], arr3[11]]
							},]
						};
						// 使用刚指定的配置项和数据显示图表。
						/*myChartZhu.clear();*/
						myChartZhu.setOption(Zhu_option);
			 }
	}); 
	
	
}