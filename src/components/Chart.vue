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
        const category = val.filter(item => item[this.labelKey] === label)
        const count = category.length
        const yesCount = category.filter(item => item.answer).length
        return Math.round(yesCount/count * 100)
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
