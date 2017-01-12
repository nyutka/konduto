$(function () {
    Highcharts.chart('container', {
    		colors: ['#b2dae1', '#31a4b9'],
        chart: {
            type: 'column'
        },
        title: false,
        xAxis: {
            categories: ['18 - 20', '20 - 25', '25 - 35', '35 - 50', '50 - '],
            labels: {
                rotation: -45,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Avenir'
                }
            },
						minorTickLength: 0,
            minorGridLineWidth: 0,
						tickLength: 0,
            offset: 30
        },
        yAxis: {
            title: false,
						lineWidth: 1,
            gridLineColor: 'transparent'
        },
        legend: false,
        credits: {
					enabled: false
        },
//        tooltip: false,
        plotOptions: {
            column: {
                borderRadius: 5,
                maxPointWidth: 15,
                borderWidth: 0,
                grouping: false
            }
        },
        series: [{
            name: 'Male',
            data: [30, 33, 14, 17, 12]
        }, {
            name: 'Female',
            data: [22, 22, 13, 12, 10]
        }]
    });

    Highcharts.chart('pie-chart', {
            colors: ['#b2dae1', '#31a4b9'],
        chart: {
            type: 'pie'
        },
        exporting: false,
        credits: {
                        enabled: false
        },
        title: false,
        tooltip: false,
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                        useHTML: true,
                        connectorColor: 'transparent',
                    enabled: true,
                    format: '<div class="pie-label"><i style="background-color: {point.color}"></i><b>{point.percentage:.0f}%</b><span>{point.name}</span></div>'
                }
            }
        },
        series: [{
            data: [{
                name: 'Female',
                y: 67,
                sliced: true
            }, {
                name: 'Male',
                y: 33
            }]
        }]
    });

    Highcharts.chart('income', {
            colors: ['#31a4b9'],
        exporting: false,
        chart: {
            type: 'bar'
        },
        title: false,
        xAxis: {
            categories: ['250k+', '175k-200k', '150k-175k', '100k-150k', '50k-100k'],
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Avenir'
                }
            },
                        minorTickLength: 0,
            minorGridLineWidth: 0,
                        tickLength: 0,
            minPadding: 0.02,
            offset: 30
        },
        yAxis: {
            title: false,
                        lineWidth: 1,
            gridLineColor: 'transparent',
            min: 5
        },
        legend: false,
        credits: {
                        enabled: false
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
                maxPointWidth: 15,
                borderWidth: 0
            }
        },
        series: [{
            data: [30, 33, 14, 17, 12]
        }]
    });

        var dataSeries = [
        {
          name: 'Completed High School',
          y: 23
        }, {
          name: 'Completed College',
          y: 43
        }, {
          name: 'Completed Graduate School',
          y: 56
        }, {
          name: 'Attended Vocational/Technical',
          y: 45
        }, {
          name: 'Attended College',
          y: 10
        }
    ];

    Highcharts.chart('education', {
            colors: ['#c1e4ea'],
        exporting: false,
        chart: {
            type: 'bar'
        },
        title: false,
        tooltip: false,
        xAxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'Avenir'
                },
                formatter: function () {
                        return dataSeries[this.value].y + '%';
                }
            },
                        minorTickLength: 0,
            minorGridLineWidth: 0,
                        tickLength: 0,
            lineWidth: 0
        },
        yAxis: {
            title: false,
                        lineWidth: 0,
            gridLineColor: 'transparent',
            labels: false
        },
        legend: false,
        credits: {
                        enabled: false
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
                maxPointWidth: 30,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    inside: true,
                    x: 10,
                    useHTML: true,
                    format: '<span class="bar-data-label">{point.name}</span>'
                }
            }
        },
        series: [{
            data: dataSeries
        }]
    });
});
