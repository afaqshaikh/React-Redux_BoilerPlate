

fuction App({
  return(
   const [name,setName] = useState('Afaque')
   const [email,setEmail] = useState('afaquesami4@gmail.com')
   const [arr,setArr] = useState(['car','mobile'])
   const handleChange =() => {
    setName('shaikh')
     setEmail('shaikh@gmail.com')
   }

   useEffect(()=>{
     console.log('runs on every time')
   })
  
   useEffect(()=>{
    console.log('runs only one  time')
   },[])
  
   useEffect(()=>{
    console.log('runs when name is added')
  },[name])

  useEffect(()=>{
     return()=>{
    console.log('unmount')

    }
   })

  )
}
)
