/*
Template Name: Material Pro Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";
    // ============================================================== 
    // Sales overview
    // ============================================================== 
    var chart2 = new Chartist.Bar('.amp-pxl', {
        labels: ['Gestor'],
        series: [
            [50],
            [20],
			[30],
        ]
    }, {
        axisX: {
            // On the x-axis start means top and end means bottom
            position: 'end',
            showGrid: false
        },
        axisY: {
            // On the y-axis start means left and end means right
            position: 'start'
        },
        high: '100',
        low: '0',
        plugins: [
            Chartist.plugins.tooltip()
        ],
		seriesBarDistance: 50
    });

    var chart = [chart2];

    // ============================================================== 
    // This is for the animation
    // ==============================================================

    for (var i = 0; i < chart.length; i++) {
        chart[i].on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 500 * data.index,
                        dur: 500,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeInOutElastic
                    }
                });
            }
            if (data.type === 'bar') {
                data.element.animate({
                    y2: {
                        dur: 500,
                        from: data.y1,
                        to: data.y2,
                        easing: Chartist.Svg.Easing.easeInOutElastic
                    },
                    opacity: {
                        dur: 500,
                        from: 0,
                        to: 1,
                        easing: Chartist.Svg.Easing.easeInOutElastic
                    }
                });
            }
        });
    }

    // ============================================================== 
    // Índice
    // ============================================================== 

    var chart = c3.generate({
        bindto: '#indice',
        data: {
            columns: [
                ['CDI', 60],                
                ['IBOVESPA', 30],
                ['IMA-B', 10],               
            ],

            type: 'donut',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                show: false
            },
            title: "Índices",
            width: 20,

        },

        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#745af2', '#26c6da', '#1e88e5']
        }
    });


    // ============================================================== 
    // Gestor
    // ============================================================== 

    var chart = c3.generate({
        bindto: '#gestor',
        data: {
            columns: [
                ['CAIXA ECONÔMICA', 29],                
                ['BANCO DO BRASIL', 62],
                ['ITAÚ', 9],               
            ],

            type: 'donut',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                show: false
            },
            title: "Gestores",
            width: 20,

        },

        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#745af2', '#26c6da', '#1e88e5']
        }
    });
	
	// ============================================================== 
    // Perfil do Fundo
    // ============================================================== 

    var chart = c3.generate({
        bindto: '#perfilFundo',
        data: {
            columns: [
                ['Renda fixa', 33],                
                ['Ações', 33],
                ['Imobiliários', 34],               
            ],

            type: 'donut',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                show: false
            },
            title: "Perfis de fundo",
            width: 20,

        },

        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#745af2', '#26c6da', '#1e88e5']
        }
    });

	// ============================================================== 
    // Liquidez
    // ============================================================== 

    var chart = c3.generate({
        bindto: '#liquidez',
        data: {
            columns: [
                ['Acima de 4 anos', 75],                
                ['Até 4 anos', 20],
                ['Imediata', 5],               
            ],

            type: 'donut',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                show: false
            },
            title: "Liquidez",
            width: 20,

        },

        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#745af2', '#26c6da', '#1e88e5']
        }
    });	


});
