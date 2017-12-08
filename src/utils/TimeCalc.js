export const timeCalc = (timeLeft) => {
  const mins = parseInt(timeLeft/60)
  const seconds = parseInt(timeLeft % 60)
  let displaySeconds

  (''+seconds).length < 2 ? 
    displaySeconds = `0${seconds}` : 
    displaySeconds =  seconds
  
  const showTimeLeft = `${mins}:${displaySeconds}`

  return showTimeLeft
} 