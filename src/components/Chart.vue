<template>
    <canvas id="chart"></canvas>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    categoryName: {
      type: String,
      default: 'questionCategoryName'
    },
    indexAxis: {
      type: String,
      default: 'x',
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
  methods: {
    calculate(labels) {
      return labels.map(label => {
        const category = this.series.filter(item => item[this.categoryName] === label)          
        const count = category.length
        const yesCount = category.filter(item => item.answer).length
        return Math.round(yesCount/count * 100)
      })
    }
  },
  watch: {
    series (val)  {
      const labels = val
        .map(item => item[this.categoryName])
        .filter((item, index, self) => self.indexOf(item) === index)
        .sort((a, b) => a.localeCompare(b))
      
      this.chart.data = {
        labels,
        datasets: [{
          data: this.calculate(labels),
          backgroundColor: [
            '#e69f00',
            '#56b4e9',
            '#f0e442',
            '#019e73',
            '#0072b2',
            '#d55e00',
            '#cc79a7',
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
          indexAxis: this.indexAxis,
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
