
var chart = c3.generate({
    data: {
     xs: {
         'Tuberculosis': 'x1',
         'Neonatal': 'x1',
         'Ischaemic': 'x2',
         'Copd': 'x3',
         'Diarrhoeal': 'x4',
         'Stroke': 'x1',
         'GDP per capita':'x1',
     },
        columns: [
            ['x1', 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
            ['x2', 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
            ['x3', 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
            ['x4', 2000, 2001, 2002, 2002, 2004, 2005, 2006, 2007, 2008, 2009, 2012, 2013],
            ['GDP per capita', 418.07, 415.03, 413.08, 446.31, 475.29, 499.46, 509.64, 558.05, 634.99, 702.26, 781.15, 861.76, 883.12, 981.86, 1118.87, 1248.45, 1401.56, 1563.77, 1698.13, 1855.74],
            ['Tuberculosis', 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3 , 3, 3, 3, 4, 5],
            ['Neonatal', 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3 ],
            ['Ischaemic', 4, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            ['Copd', 5, 5, 5, 5, 5, 5, 5, 3],
            ['Diarrhoeal', 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5],
           ['Stroke', 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        ],
        type: 'bar',
        point: {
               show: false
            },
        order: 'asc',
        types: {
            Tuberculosis: 'spline',
            Neonatal: 'spline',
            Ischaemic: 'spline',
            Copd: 'spline',
            Diarrhoeal: 'spline',
            Stroke: 'spline',
        },
        axes: {
          Tuberculosis: 'y2',
          Neonatal: 'y2',
          Ischaemic: 'y2',
          Copd: 'y2',
          Diarrhoeal: 'y2',
          Stroke: 'y2',
 // ADD
        }
      },
      axis: {

        y: {
        label: 'GDP per Capita',
        tick: {
                  format: d3.format("$")
              }
        },
        y2: {
          show: true,
         label: 'Leading cause of death (first to fifth)',
         padding: {
           right: 500
         },
         inverted: true,
         tick: { format: d3.format("d") } // ADD
    }}
});
