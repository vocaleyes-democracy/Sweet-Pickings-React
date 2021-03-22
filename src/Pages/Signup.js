import React from 'react';

export default function Signup() {
    return (
        <div>
            <h2>Create Account</h2>

            <form class="ui form">
                {/* NAME */}
                <div class="field">
                    <label>Name</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div class="field">
                            <input type="text" name="last-name" placeholder="Last Name" />
                        </div>
                    </div>
                </div>   

                {/* ADDRESS */}
                <div class="field">
                    <label>Address</label>
                    <div class="fields">
                        <div class="twelve wide field">
                            <input type="text" name="address-1" placeholder="Street Address" />
                        </div>
                        <div class="four wide field">
                            <input type="text" name="address-2" placeholder="Apt #" />
                        </div>
                    </div>
                </div>
                <div class="two fields">
                    <div class="field">
                    <label>Country/Region</label>
                        <input type="text" name="country-region" placeholder="Country/Region" />
                    </div>
                </div>
                <div class="four wide field">
                    <label>Zip/Postal Code</label>
                    <input id="zip" name="zip" type="text" pattern="[0-9]*" placeholder="Zip/Postal Code" />
                </div>

                {/* EMAIL */}
                <div class="five wide field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" />
                </div>

                {/* PHONE */}
                <div class="inline fields">
                    <label>Phone Number</label>
                    <div class="field">
                        <input type="text" placeholder="xxx" maxlength="3" />
                    </div>
                    <div class="field">
                        <input type="text" placeholder="xxx" maxlength="3" />
                    </div>
                    <div class="field">
                        <input type="text" placeholder="xxxx" maxlength="4" />
                    </div>
                </div>
                
                <button type="submit" class="ui green button">Signup</button>
            </form>
        </div>
    )
}
