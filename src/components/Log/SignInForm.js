import React, { useState } from 'react';
import axios from 'axios';


const SignInForm = () => {
    const [data, setData] = useState({email:'', password:''});
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    

    const handleLogin  = async (e) => {
        e.preventDefault();

        const  url = "http://localhost:5000/api/user/login";
        const {data:res} = await axios.post(url, data);
        
        localStorage.setItem("token", res.data);

                    window.location = '/post';
                    
        



    //     const emailError = document.querySelector('.email.error');
    //     const passwordError = document.querySelector('.password.error');
 
    //     console.log(email, password);
    //    axios({ 
    //         method: "post",
    //         url: `${process.env.REACT_APP_API_URL}api/user/login`,
    //         // withCredentials: true,
    //         data: {
    //             email,
    //             password,
    //         },
           
    //     })
    //      .then((res) => {
    //          console.log(res.data);
    //         if (res.data.errors) {
    //             emailError.innerHTML = res.data.errors.email;
    //             passwordError.innerHTML = res.data.errors.password;
    //         } else {
    //             localStorage.setItem("token", res.data);
    //             window.location = '/post';
    //         } 
    //     }).catch((err) => {
    //             console.log(err); 
    //         });
 
    };
    


    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="email"
                name='email'
                id='email'
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleChange}
                required
                value={data.email} className="champ" /> 

            <div className="email error"></div>
            <br />
            <label htmlFor="password">Mot de Pass</label>
            <br />
            <input
                type="password"
                name="password"
                id='password'
                required
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handleChange}
                value={data.password} 
                className="champ" /> 

            <div className="password error"></div>
            <br />
            <input type="submit" value="Se connecter" id='sub' />
        </form>
    );
};

export default SignInForm;