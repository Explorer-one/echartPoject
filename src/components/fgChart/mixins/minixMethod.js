export default {
  methods: {
    disposeData (data, key) {
      let result = []
      if (data.length < 1) {
        return result
      }
      let name = ''
      result = data.map((item, i) => {
        const row = [1, 1]
        if (item[key] !== name) {
          name = item[key]
          for (let m = i + 1; m < data.length; m++) {
            if (data[m][key] !== name) {
              break
            }
            row[0]++
          }
          if (row[0] !== 1) {
            item.rowspan = row
          }
        } else {
          item.rowspan = [0, 0]
        }
        return item
      })
      return result
    }
  }
}
