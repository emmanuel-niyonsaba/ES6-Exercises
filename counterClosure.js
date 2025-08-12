

    const outerFun =()=>{
        counter =0
    const innerFun =()=>{
        counter++
        console.log(counter)
    }
    return innerFun
    }
   const myResult = outerFun()
   myResult()
   myResult()
   myResult()
   myResult()
