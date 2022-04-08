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
          fill: true,
          data: this.calculate(labels),
          backgroundColor: 'rgba(0, 164, 227, 0.5)',
          borderColor: 'rgba(0, 164, 227, 1)'
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
