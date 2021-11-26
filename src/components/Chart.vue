<template>
    <canvas id="radarChart"></canvas>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    series: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      radarchart: undefined
    }
  },
  methods: {
    calculate(labels) {
      return labels.map(label => {
        const category = this.series.filter(item => item.questionCategoryName === label)
        const count = category.length
        const yesCount = category.filter(item => item.answer).length
        return Math.round(yesCount/count * 100)
      })
    }
  },
  watch: {
    series (val)  {
      const labels = val.map(item => item.questionCategoryName).filter((item, index, self) => self.indexOf(item) === index)
      this.radarchart.data = {
        labels,
        datasets: [{
          fill: true,
          data: this.calculate(labels),
          backgroundColor: 'rgba(0, 164, 227, 0.5)',
          borderColor: 'rgba(0, 164, 227, 1)'
        }]
      }
      
      this.radarchart.update()
    }
  },
  mounted() {
    try {
      this.radarchart = new Chart('radarChart', {
        type: 'radar',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: false
          },
          scale: { 
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 20,                       
          },
          scales: {
            r: {
              pointLabels: {
                font: {
                  size: 16
                }
              },
              ticks: {
                callback: function (value) {
                  return value + '%'
                }
              }, 
            }
          }
        },
        data: {}
      })
    }
    catch (e) {}
  }
}
</script>
