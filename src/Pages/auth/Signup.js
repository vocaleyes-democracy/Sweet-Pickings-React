import { React, useState } from 'react';

export default function Signup() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    
    const [email, setEmail] = useState('');

    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [phone3, setPhone3] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(`Phone: ${phone1} ${phone2} ${phone3}`);
    }

    // const userObj = {
    //   address: address,
    // }

    // fetch("http://localhost:4000/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(userObj)
    // })
    //   .then(r => r.json())
    //   .then(console.log)

    return (
        <div id="form">
            <h1 style={{textAlign: "center"}}>SIGN UP</h1>

            <form className="ui form" onSubmit={handleOnSubmit}>
                
                {/* NAME */}
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                        <div className="field">
                            <input 
                                type="text" 
                                name="first-name" 
                                placeholder="First Name" 
                                onChange={e => setFirstName(e.target.value)}
                        />
                        </div>
                        <div className="field">
                            <input
                                type="text" 
                                name="last-name" 
                                placeholder="Last Name" 
                                onChange={e => setLastName(e.target.value)}
                        />
                        </div>
                    </div>
                </div>   

                {/* ADDRESS */}
                <div className="field">
                    <label>Address</label>
                    <div className="fields">
                        <div className="twelve wide field">
                            <input 
                                type="text" 
                                name="address-1" 
                                placeholder="Street Address"
                                onChange={e => setAddress1(e.target.value)}
                                />
                        </div>
                        <div className="four wide field">
                            <input 
                                type="text" 
                                name="address-2" 
                                placeholder="Apt #" 
                                onChange={e => setAddress2(e.target.value)}
                                />
                        </div>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                    <label>Country/Region</label>
                        <input 
                            type="text" 
                            name="country-region" 
                            placeholder="Country/Region"
                            onChange={e => setCountry(e.target.value)}
                            />
                    </div>
                </div>
                <div className="four wide field">
                    <label>Zip/Postal Code</label>
                    <input 
                        name="zip" 
                        type="text" 
                        pattern="[0-9]*" 
                        placeholder="Zip/Postal Code" 
                        onChange={e => setZip(e.target.value)}
                        />
                </div>

                {/* EMAIL */}
                <div className="five wide field">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)}
                        />
                </div>

                {/* PHONE */}
                <div className="inline fields">
                    <label>Phone Number</label>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="xxx" 
                            maxLength="3"
                            onChange={e => setPhone1(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="xxx"
                            maxLength="3" 
                            onChange={e => setPhone2(e.target.value)}
                            />
                    </div>
                    <div className="field">
                        <input 
                        type="text" 
                        placeholder="xxxx" 
                        maxLength="4" 
                        onChange={e => setPhone3(e.target.value)}
                    />
                    </div>
                </div>
                
                <button type="submit" className="ui green button">Signup</button>
            </form>
        </div>
    )
}
