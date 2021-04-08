import React from 'react'

export default function TreeForm() {   
    return (
        <div id="form">
            <form class="ui form">
                <h4 class="ui dividing header">Sweet Pickings Tree Location Form</h4>
            
            {/* Your Name */}
                <div class="field">
                    <label>Your Name</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div class="field">
                            <input type="text" name="last-name" placeholder="Last Name" />
                        </div>
                    </div>
                </div>

            {/* Your Email Address */}
                <div class="field">
                    <label>Your Email Address</label>
                    <div class="eight wide field">
                        <input type="email" name="email" placeholder="human@mail.com" />
                    </div>
                </div>

            {/* Telephone */}
                <div class="field">
                    <label>Telephone</label>
                    <div class="five wide field">
                        <input type="tel" name="telephone" placeholder="012-345-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="12" />
                    </div>
                </div>

            {/* Tree Location */}
                <div class="field">
                    <label>Tree Location</label>
                    <div class="seven wide field">
                        <input type="text" name="tree-location" placeholder="Tree Location" />
                    </div>
                </div>

            {/* Tree Type */}
                <div class="field">
                    <label>Tree Type</label>
                    <div class="seven wide field">
                        <input type="text" name="tree-type" placeholder="Tree Type" />
                    </div>
                </div>

            {/* Number of Trees */}
                <div class="field">
                    <label>Number of Trees</label>
                    <div class="one wide field">
                        <input type="number" name="number-of-trees" min="1"  placeholder="Number of Trees" />
                    </div>
                </div>

            {/* Owner Type */}
                <div class="grouped fields">
                    <label>Owner Type</label>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="council-land" />
                            <label>Council Land</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="private-property" />
                            <label>Private Property</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="not-sure" />
                            <label>Not Sure</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="other" />
                            <div class="inline field">
                                <label>Other</label>
                                <input type="text" name="other" placeholder="Description" />
                            </div>
                        </div>
                    </div>
                </div>

            {/* Checkbox for "I am the owner" */}

            {/* Owner Name */}

            {/* Owner Email Address */}

            {/* Owner Telephone */}

            {/* Any additional comments or questions? */}
            </form>
        </div>
    )
}
