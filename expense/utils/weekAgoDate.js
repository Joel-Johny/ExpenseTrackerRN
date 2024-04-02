

function weekAgoDateFn(currentDate) {
  const today = new Date();
  today.setDate(today.getDate() - 7);
  return today  
}

export default weekAgoDateFn