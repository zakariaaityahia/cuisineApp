import React, {useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };


  return (
      <FormStyle onSubmit={submitHandler}>
          <div>
              <FaSearch/>
              <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
          </div>
    </FormStyle>
  )
}



const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        height: 4rem;
        padding: 0 3rem;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;
export default Search