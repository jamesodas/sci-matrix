const isMatrix = C => {
  if(!Array.isArray(C) || C.length < 1) return false;
  let length1 = Array.isArray(C[0]) ? C[0].length : undefined;
  var simpleArray = false;
  for(let i = 0; i < C.length; i++){
      if(Array.isArray(C[i]) && !simpleArray){
          if(i === 0) length1 = C[i].length;
          else if(C[i].length !== length1) return false;
          for(let j = 0; j < C[i].length; j++){
              if (typeof C[i][j] !== 'number') return false;
          }
      }else{
          if (typeof C[i] !== 'number') return false;
          simpleArray = true;
      }
  }
  return true;
}

export default isMatrix;
