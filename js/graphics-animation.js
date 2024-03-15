const ctx = document.getElementById('chart');
const customCanvasBackgroundColor = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

var ctx2 = document.getElementById('chart').getContext("2d");

var gradientStroke = ctx2.createLinearGradient(0, 0, 0, 200);
gradientStroke.addColorStop(0, 'rgba(250,250,250, 0.5)');
gradientStroke.addColorStop(1, 'rgba(250,250,250, 0)');


let delayed;
const chartAreaBorder = {
  id: 'chartAreaBorder',
  afterDraw: (chart, args, opts) => {
    const {
      chartArea: {
        top,
        left,
        width,
        height
      },
      ctx
    } = chart;
    const {
      borders: {
        tLtR,
        tLbL,
        tRbR,
        bLbR
      }
    } = opts;

    ctx.save();

    if (tLtR && tLtR.borderWidth !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = tLtR.borderColor || Chart.defaults.color;
      ctx.lineWidth = tLtR.borderWidth || 0;
      ctx.borderStyle = tLtR.borderDash || [];
      ctx.borderTopWidth = tLtR.borderTopWidth || 0;
      ctx.setLineDash(tLtR.borderDash || []);
      ctx.lineDashOffset = tLtR.borderDashOffset || 0;
      ctx.moveTo(left, top);
      ctx.lineTo(left + width, top)
      ctx.stroke();
    }

    if (tLbL && tLbL.borderWidth !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = tLbL.borderColor || Chart.defaults.color;
      ctx.lineWidth = tLbL.borderWidth || 0;
      ctx.borderStyle = tLbL.borderDash || [];
      ctx.borderTopWidth = tLbL.borderTopWidth || 0;
      ctx.setLineDash(tLbL.borderDash || []);
      ctx.lineDashOffset = tLbL.borderDashOffset || 0;
      ctx.moveTo(left, top);
      ctx.lineTo(left, top + height)
      ctx.stroke();
    }

    if (tRbR && tRbR.borderWidth !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = tRbR.borderColor || Chart.defaults.color;
      ctx.lineWidth = tRbR.borderWidth || 0;
      ctx.borderStyle = tRbR.borderDash || [];
      ctx.borderTopWidth = tRbR.borderTopWidth || 0;
      ctx.setLineDash(tLbL.borderDash || []);
      ctx.lineDashOffset = tRbR.borderDashOffset || 0;
      ctx.moveTo(left + width, top);
      ctx.lineTo(left + width, top + height)
      ctx.stroke();
    }

    if (bLbR && bLbR.borderWidth !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = bLbR.borderColor || Chart.defaults.color;
      ctx.lineWidth = bLbR.borderWidth || 0;
      ctx.borderStyle = bLbR.borderDash || [];
      ctx.borderTopWidth = bLbR.borderTopWidth || 0;
      ctx.setLineDash(bLbR.borderDash || []);
      ctx.lineDashOffset = bLbR.borderDashOffset || 0;
      ctx.moveTo(left, top + height);
      ctx.lineTo(left + width, top + height)
      ctx.stroke();
    }

    ctx.restore();
  }
}

const customePoint = new Image(24, 34)
// customePoint.src = '../images/point.svg';

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: 'Грудень',
      data: [6.8, 7.3, 11.1, 11.7, 14.3, 16.6, 18.4, 19.3, 23.9, 22.3, 20.2, 23.2, 24.3],
      borderWidth: 2,
      borderColor: 'white',
      pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
      cubicInterpolationMode: 'monotone',
      fill: true,
      backgroundColor: gradientStroke,
      pointHitRadius: 20,
      pointStyle: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, customePoint],
    }]
  },
  options: {
    animation: {
      duration: 1000,
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 100 + context.datasetIndex * 500;
        }
        return delay;
      },
    },
    plugins: {
      customCanvasBackgroundColor: {
        color: 'transparent',
      },
      chartAreaBorder: {
        borders: {
          tLtR: {
            borderWidth: 0,
          },
          tLbL: {
            borderWidth: 2,
            borderColor: 'white',
          },
          tRbR: {
            borderWidth: 0,
          },
          bLbR: {
            borderWidth: 2,
            borderColor: 'white',
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {

      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },

      },
      y: {
        offset: true,
        aspectRatio: 1,
        min: 0,
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          beginAtZero: true,
          stepSize: 5,

        }
      }
    },
  },
  plugins: [customCanvasBackgroundColor, chartAreaBorder],
});

var oData = {

  "2011"
    :
    6.8,
  "2012"
    :
    7.3,
  "2013"
    :
    11.1,
  "2014"
    :
    11.7,
  "2015"
    :
    14.3,
  "2016"
    :
    16.6,
  "2017"
    :
    18.4,
  "2018"
    :
    19.3,
  "2019"
    :
    23.9,
  "2020"
    :
    22.3,
  "2021"
    :
    20.2,
  "2022"
    :
    23.2
};
