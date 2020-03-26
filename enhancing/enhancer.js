module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement <20){
    item.enhancement += 1; 
    const newItem = item;
     return newItem
  } else{ return item}
}

function fail(item) {
  if(item.enhancement <15){
    item.durability += -5;
    const newItem = item;
    return newItem
  }else{
    if(item.enhancement>16){
      item.enhancement += -1;
      item.durability += -10;
      const newItem = item;
      return newItem;
    }else{
      item.durability += -10;
      const newItem = item;
      return newItem;
    }
  }
}

function repair(item) {
  item.durability = 100;
  const newItem = item;
  return newItem;
}

function get(item) {
  if(item.enhancement >0){
    item.name = `[+${item.enhancement}] ${item.name}`
    const newItem = item;
    return newItem;
  }else{
    return item
  }
}
