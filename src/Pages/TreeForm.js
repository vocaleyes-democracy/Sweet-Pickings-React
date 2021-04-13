import { React, useState } from 'react'
import { Header, Form, Icon } from 'semantic-ui-react'

export default function TreeForm() {   
    // CONTACT INFO STATE
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');

    // TREE INFO STATE
    const [treeType, setTreeType] = useState('');
    
    const treeOptions = [
        {
            key: "Apple",
            text: "Apple",
            value: "Apple"
        },
        {
            key: "Pear",
            text: "Pear",
            value: "Pear"
        },
        {
            key: "Cherry",
            text: "Cherry",
            value: "Cherry"
        },
        {
            key: "Walnuts",
            text: "Walnuts",
            value: "Walnuts"
        },
    ]
    
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(treeType);
    }

    return (
        <div id="form">
        <Header as="h2" textAlign="center">Sweet Pickings Tree Location Form</Header>
        
        <Header as="h3"><Icon name="address card" color="green" />Your Contact Information</Header>
        <Form onSubmit={handleOnSubmit}>
            <Form.Group widths="equal">
                <Form.Input 
                    label="First Name" 
                    name="first-name"
                    type="text"
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)} 
                />
                <Form.Input 
                    label="Last Name" 
                    name="last-name"
                    type="text"
                    placeholder="Last Name" 
                    onChange={e => setLastName(e.target.value)} 
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="sweet.pickings@mail.com"
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Input 
                    label="Telephone"
                    name="telephone"
                    type="tel"
                    placeholder="012-345-6789"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    maxLength="12"
                    onChange={e => setTelephone}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    label="Address 1"
                    name="address1"
                    type="text"
                    placeholder="Address 1"
                    onChange={e => setAddress1(e.target.value)}
                />
                <Form.Input 
                    label="Address 2"
                    name="address2"
                    type="text"
                    placeholder="Address 2"
                    onChange={e => setAddress2(e.target.value)}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={e => setCity(e.target.value)}
                />
                <Form.Input 
                    label="Country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    onChange={e => setCountry(e.target.value)}
                />
                <Form.Input 
                    label="Zip Code"
                    name="zip"
                    type="num"
                    placeholder="Zip Code"
                    onChange={e => setZip(e.target.value)}
                />
            </Form.Group>

        <Header as="h3"><Icon name="leaf" color="green" />Tree Information</Header>
            <Form.Group widths="equal">
                <Form.Select 
                    label="Select Tree Type"
                    placeholder="Select Tree Type"
                    fluid
                    selection
                    options={treeOptions}
                    
                    // Need to get state from here
                
                />
                <Form.Input 
                    label="Number of Trees"
                    type="number"
                    name="tree-count"
                    min="1"
                />
            </Form.Group>
            <Form.Group grouped>
                <label>Owner Type</label>
                <Form.Field 
                    label="Council Land"
                    type="radio"
                    control="input"
                    name="owner-type"
                />
                <Form.Field 
                    label="Private Property"
                    type="radio"
                    control="input"
                    name="owner-type"
                />
                <Form.Field 
                    label="Not Sure"
                    type="radio"
                    control="input"
                    name="owner-type"
                />
                <Form.Field
                    inline
                    label="Other"
                    type="radio"
                    control="input"
                    name="owner-type"
                />
            </Form.Group>
            
            <Form.Checkbox 
                label="I am the owner" 
            />
            
            <Form.TextArea 
                label="Any additional comments or questions?"
                placeholder="Tell us more here"
            />

            <Form.Button type="submit" color="blue" >Submit</Form.Button>
        </Form>
        </div>
    )
}
