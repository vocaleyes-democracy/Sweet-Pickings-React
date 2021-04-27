import { React, useState } from 'react'
import { Header, Form, Radio } from 'semantic-ui-react'

// Data to be moved elsewhere
const fruitTypes = [
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

// Need to nest varieties under each fruit type
// const fruitVarieties = [

// ]

export default function TreeForm() {     
    const [address, setAddress] = useState('')
    const [fruitType, setFruitType] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [ownerType, setOwnerType] = useState(null)
    
    const handleOnSubmit = e => {
        e.preventDefault()

        const userObj = {
            address: address, 
        }

        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(r => r.json())
        .then(console.log)

        // fetch("http://localhost:4000/assets", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(assetObj)
        // })
        // .then(r => r.json())
        // .then(console.log)
    }

    const handleChange = (e, { ownerType }) => setOwnerType({ ownerType })
    console.log(ownerType)
    return (
        <div id="form">
        <Header as="h2" textAlign="center">LET US KNOW ABOUT A TREE</Header>
        
        <Form onSubmit={handleOnSubmit}>
            <Form.Input 
                label="Address"
                name="address"
                type="text"
                placeholder="Address"
                onChange={e => setAddress(e.target.value)}
            />

            <Form.Select 
                label="Fruit Type"
                placeholder="Select Fruit Type"
                name="fruit-type"
                fluid
                selection
                options={fruitTypes}
                onChange={e => setFruitType(e.target.firstChild.innerHTML)}
            />
            {/* <Form.Select
                label="Variety"
                placeholder="Select Fruit Variety"
                name="variety"
                fluidselection
                options={fruitVarieties}
                onChange={e => setFruitVariety(e.target.value)}
            /> */}
            <Form.Input 
                label="Quantity"
                type="number"
                name="quantity"
                min="1"
                width="4"
                onChange={e => setQuantity(e.target.value)}
            />

            <Form.Group grouped>
                <label>Owner Type</label>
                <Form.Field
                    control={Radio} 
                    label="Council Land"
                    // value="Council Land"
                    checked={ownerType === 'Council Land'}
                    name="owner-type"
                    onChange={handleChange}
                />
                <Form.Field
                    control={Radio} 
                    label="Private Property"
                    // value="Private Property"
                    checked={ownerType === 'Private Property'}
                    name="owner-type"
                    onChange={handleChange}
                />
                <Form.Field
                    control={Radio} 
                    label="Not Sure"
                    // value="Not Sure"
                    checked={ownerType === 'Not Sure'}
                    name="owner-type"
                    onChange={handleChange}
                />
                <Form.Field
                    control={Radio}
                    inline
                    label="Other"
                    // value="Other"
                    checked={ownerType === 'Other'}
                    name="owner-type"
                    onChange={handleChange}
                />
            </Form.Group>
            
            <Form.Checkbox 
                label="I am the owner" 
            />
            
            <Form.TextArea 
                label="Any additional comments or questions?"
                placeholder="Tell us more here"
            />

            <Form.Button type="submit" color="blue" >SIGN UP YOUR TREE</Form.Button>
        </Form>
        </div>
    )
}
