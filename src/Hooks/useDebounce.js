import { useEffect, useState } from "react"

const handler = (debounceValue, setDebounceValue, value) =>{
    setDebounceValue(value);
}

const useDebounce = (value,delay=500)=>{
    console.log('### : '+value)
    const [debounceValue, setDebounceValue] =useState(value);
    //  return function(){
    //     let timer;
    //     clearTimeout(timer);
    //     timer = setTimeout(()=>{
    //             setDebounceValue(value);
    //     },delay)
    //  }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value);
        },delay)

        return ()=>{
            clearTimeout(timer);
        }
    },[value,delay])

   return debounceValue
}

export default useDebounce;