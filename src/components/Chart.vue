<template>
    <canvas id="chart"></canvas>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    labelKey: {
      type: String,
      default: 'questionCategoryName'
    },
    orderKey: {
      type: String,
      default: 'questionCategoryOrdering'
    },
    series: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      chart: undefined
    }
  },  
  watch: {
    series (val) {
      const labels = val
        .map(item => item[this.labelKey])
        .filter((item, index, self) => self.indexOf(item) === index)
      
      const data = labels.map(label => {
        const categories = val.filter(item => item[this.labelKey] === label)
        const yesCounts = categories
          .map(cat => cat.yesCount)
          .reduce((total, current) => total + current, 0)

        const noCounts = categories
          .map(cat => cat.noCount)
          .reduce((total, current) => total + current, 0)
        
        return Math.round(yesCounts / (yesCounts + noCounts) *100)
      })

      this.chart.data = {
        labels,
        datasets: [{
          data,
          backgroundColor: [
            '#e69f00',
            '#019e73',
            '#0072b2',
            '#cc79a7',
            '#d55e00',
            '#56b4e9',
            '#f0e442',
          ],
        }]
      }
      
      this.chart.update()
    }
  },
  mounted() {
    try {
      this.chart = new Chart('chart', {
        type: 'bar',
        options: {
          indexAxis: 'x',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: false
          },
          scale: { 
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 10,
          },
        },
        data: {}
      })
    }
    catch (e) {}
  }
}
</script>
