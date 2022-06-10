import React, { SyntheticEvent, useEffect, useState } from 'react';
import Login from './Login';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const styleTexArea = {
  height:'100%'
}

const CreatePost = () => {
  const [errorText, setError] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [subjectSelected, setSubjectSelected] = useState(1);

  const getSubjects = async () => {
    const req = await axios.get('http://localhost:8080/subject', {withCredentials:true});
    setSubjects(req.data);
    console.log(subjects);
  }

  useEffect(() => {
    getSubjects();
  }, [])

  const submit = async (e:SyntheticEvent) => {
    e.preventDefault()

    const data = {
      title,
      content,
      "subject_id":subjectSelected
    }

      const res = await axios.post('http://localhost:8080/post', data, {withCredentials: true});


    if(res.status === 201){
      setRedirect(true);
    }
  }



  if (redirect) {
    return <Navigate to='/'/>
  }

  return(
    <>
      <h2>{errorText}</h2>
      <form onSubmit={submit} className="form-signin w-100 m-auto">
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Naslov"
                 onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="floatingInput">Naslov</label>
        </div>
        <div className="form-floating">
          <select className ="form-control" id="floatingSelect"
          onChange = {(e: any) => setSubjectSelected(e.target.value)}>
            {subjects.map((subjects:any, i) => {
              return (<option value= {subjects.id} key = {subjects.id}>{subjects.title}</option> )
            })}
          </select>
          <label htmlFor="floatingSelect">Izberi predmet</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control" id ="floatingContent" placeholder="Vnesi vsebino"
                    onChange={(e) => setContent(e.target.value)}
                    rows={8} style={styleTexArea}>

          </textarea>
          <label htmlFor="floatingContent">Vsebina</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
      </form>
    </>
  )
}


export default CreatePost;