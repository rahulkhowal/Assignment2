import React from 'react'
import UserInterface from './UserInterface'
import Select from '@material-ui/core/Select';
import './style.css'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
const Input = (props) => {
    return (
        <div className="Input" >
            <form onSubmit={props.getupdates}>
                <Select name="country" className="text-input">
                    <MenuItem value=''>Select a country</MenuItem>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='au'>Australia </MenuItem>
                    <MenuItem value='be'>Belgium</MenuItem>
                    <MenuItem value='ca'>Canada </MenuItem>
                    <MenuItem value='eg'>Egypt </MenuItem>
                    <MenuItem value='fr'>France</MenuItem>
                    <MenuItem value='de'>Germany </MenuItem>
                    <MenuItem value='id'>Indonesia </MenuItem>
                    <MenuItem value='il'>Israel </MenuItem>
                    <MenuItem value='jp'>Japan </MenuItem>
                    <MenuItem value='mx'>Mexico</MenuItem>
                </Select><br></br>
                <Select name="catagory" className="text-input" >
                    <MenuItem value=''>select a category</MenuItem>
                    <MenuItem value='business'>business</MenuItem>
                    <MenuItem value='entertainment'>entertainment</MenuItem>
                    <MenuItem value='health'>health</MenuItem>
                    <MenuItem value='science'>science</MenuItem>
                    <MenuItem value='technology'>technology</MenuItem>
                </Select><br></br><br></br>
                <Button variant="contained" color="primary" onClick={props.getupdates}>
                   GetNews
                 </Button>
            </form>
            <UserInterface NewsItems={props.NewsItems} />
        </div>
    )
}
export default Input