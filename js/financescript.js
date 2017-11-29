google.load("visualization", "1", {
  packages: ["corechart"]
});
google.setOnLoadCallback(render_applicant_sources);

function render_applicant_sources() {
  var data = google.visualization.arrayToDataTable([
    ["Source", "Number of Applicants"],
    ["Principle", 700],
    ["PMI", 200],
    ["Escrow", 300],
    ["Interest", 100]
  ]);

  data.addColumn('string', 'Geocoder');
  data.addColumn('number', 'Geocodes');

  var chart = new google.visualization.PieChart(document.getElementById('donut'));

  var options = {
    title: '',
    pieHole: '.82',
    tooltip: {
      text: 'value'
    },
    is3D: false,
    pieStartAngle: '240',
    pieSliceText: 'none',
    enableInteractivity: true,
    slices: {
      0: {
        offset: 0
      },
      1: {
        offset: 0
      },
      2: {
        offset: 0
      },
      3: {
        offset: 0
      }
    },
    colors: ['cornflowerblue', 'grey', 'navy', 'lightblue'],
    titleTextStyle: {
      bold: false
    },
    legend: {
      position: 'labeled'
    }
  };

  google.visualization.events.addListener(chart, 'select', function(e) {
    var selection = chart.getSelection();
    if (selection.length > 0) {
      options.slices = [];
      options.slices[selection[0].row] = {
        offset: 0.4
      };
      chart.draw(data, options);
    } else {
      options.slices = [];
      chart.draw(data, options);
    }
  });

  chart.draw(data, options);
}