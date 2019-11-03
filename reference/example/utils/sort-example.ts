
export interface IData {

}
export const getResponseDatas = (nextStepsData): IData[] => Object
// 1. for each question data key in the record
.keys(nextStepsData)
// 2. map to its corresponding question data value in the record
.map(questionName => {
  const data = nextStepsData[questionName]
  return {
    ...data,
    // 3. with percent property normalized to number, treat empty values as 0
    percent: data.percent || 0
  }
})
// 4. and sort based on percent -> highest to lowest
.sort((data1, data2) => {
  if (data1.percent !== data2.percent) {
    return data1.percent > data2.percent ? -1 : 1
  }
  if (data1.name !== data2.name) {
    return data1.name > data2.name ? 1 : -1
  }
  return -1
})
// 5. Take only question with data
.filter(data => data.percent > 0)
// 6. take top 5
.slice(0, 5)
