import {useState} from 'react'
import './Form1.css'
 const Form = () => {
    const[errors, setErrors]= useState({})
    const[user, setUser]= useState({
        fname:"",
        email:"",
        gender:"",
        course:[],
        date:"",
        country:"",
        
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationErrors={}
        if(!user.fname.trim()){
            validationErrors.fname="firstname is required"
          }
        if(!user.email.trim()){
            validationErrors.email="Valid Email is required"
          }else if(!/\S+@\S+\.\S+/.test(user.email)){
            validationErrors.email="email is not valid"
          }  
          if(!user.gender.trim()){
            validationErrors.gender="Gender required"
          }  
          if(user.course.length < 1){
            validationErrors.course="Any one course required"
          }
          if(!user.country.trim()){
            validationErrors.country="select country"
          } 
          if(!user.date.trim()){
            validationErrors.date="select Date of birth"
          } 
          setErrors(validationErrors)
          setUser({fname:"", email:"",gender:"",course:"", date:"",country:""})
    }
    
    const changeEvent=(e)=>{
        if(e.target.name==="course"){
            let copy={...user}
            if(e.target.checked){
              copy.course.push(e.target.value)
            }else{
              copy.course=copy.course=copy.course.filter(el=>el!==e.target.value)
            }
            setUser(copy)
          }else{
            setUser(()=>({
                ...user,
                [e.target.name]:e.target.value
            }))
           
          }
    }
    return (
        <form onSubmit={handleSubmit}>
<div className='main' >
<h3><u>Registration Form</u> </h3>
<div>
    <input type="text" name="fname" autoComplete='off'placeholder='Enter first name' value={user.fname} onChange={changeEvent}/><br/>
    {errors.fname && <span  className='error'>{errors.fname}</span>}
            
</div>
<div>
    <input type="email" name="email" autoComplete='off' placeholder='Enter your Email Id' value={user.email}onChange={changeEvent} /><br/>
    {errors.email && <span className='error' >{errors.email}</span>}
</div>
<label htmlFor='Gender'>Gender</label>
<div className='radio'>
    
    <label htmlFor='Gender'>Male</label>
    <input type="radio" name="gender" value='male'onChange={changeEvent}checked={user.gender==="male"}   />
    <label htmlFor='Gender'>Female</label>
    <input type="radio" name="gender" value='female' onChange={changeEvent}checked={user.gender==="female"}  />
   
</div>
{errors.gender && <span className='error' >{errors.gender}</span>}<br/>
<label htmlFor='Course'>Course Details</label>
<div className='check'>
    <label htmlFor='javascript'>Javascript</label>
    <input type="checkbox" name="course" value="Javascript"onChange={changeEvent}  checked={user.course.indexOf("Javascript")!==-1} />
    <label htmlFor='HTML'>HTML</label>
    <input type="checkbox" name="course" value="HTML"onChange={changeEvent} checked={user.course.indexOf("HTML")!==-1  }/>
    <label htmlFor='CSS'>CSS</label>
    <input type="checkbox" name="course" value="CSS" onChange={changeEvent} checked={user.course.indexOf("CSS")!==-1} />
    <label htmlFor='PHP'>PHP</label>
    <input type="checkbox" name="course" value="PHP" onChange={changeEvent} checked={user.course.indexOf("PHP")!==-1} />
   
</div>
{errors.course &&<span className='error'>{errors.course}</span>}<br/>
<div>
    <label htmlFor="date">Date of Birth</label>
    <input type="date" name="date" autoComplete='off' value={user.date} onChange={changeEvent} /><br/>
    {errors.date && <span className='error' >{errors.date}</span>}
</div>
<div className='select'>
    <select value={user.country}onChange={changeEvent} name="country" >
        <option value="" >select</option>
        <option value="India"  >India</option>
        <option value="USA"  >USA</option>
        <option value="UK" >UK</option>
    </select><br/>
    {errors.country && <span className='error'>{errors.country}</span>}<br/>  
</div>
<button type="submit">Submit</button>
</div>
</form>
    )
}
export default Form;