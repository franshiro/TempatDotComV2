export const branchName = (word) => {
  let newWord = word.replace(' - ', ', ')

  return newWord
}

export const tagArray = (tags) => {
  let allTag = []

  if(tags.length > 0){
    for(let i = 0; i < tags.length; i++){
      allTag.push(tags[i].tag.tag)
    }
    return ` - ${allTag.join(' ,')}`
  } else {
    return ''
  }
}

export const activityGroup = (groups) => {
  let allGroup = []

  if(groups){
    for(let i = 0; i < groups.length; i++){
      allGroup.push(groups[i].activity_group.group_name)
    }

    return `${allGroup.join(' ,')}`
  } else {
    return ''
  }
}

export const ratingColor = (value) => {
  let number = parseFloat(value).toFixed(1)
  if(number == 0.0){
    return '#ee5253'
  } else if (number > 0 && number <= 3 ) {
    return '#ff9f43'
  } else if (number > 3 && number <= 5) {
    return '#1dd1a1'
  }
}  

export const paginationCount = (number, value) => {
  let totalPage = number
  let pageLoad = parseInt(value)

  if(totalPage % pageLoad > 0 ){
    return parseInt(totalPage / pageLoad) + 1
  } else {
    return parseInt(totalPage / pageLoad)
  }
}