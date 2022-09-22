import React from "react";
import "./ChiknFaq.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Grid,
  Button
} from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTheme } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "?",
  "cloud",
  "cornhusk",
  "farm",
  "galastic",
  "miami",
  "moon",
  "nugget",
  "periwinkle",
  "plum",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChiknFaq() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div >
      <Stack direction="row">
        <Grid container justifyContent="center">
          <Grid xs={10} sx={{marginBottom:"20px"}}>
            <Accordion className="btn3" sx={{  background: "#222343" }}>
              <AccordionSummary
              
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="#fff" ><FilterListIcon/>Filters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container  >
                  <Grid xs="12" container justifyContent="start">
                  <Typography variant="h5" color="error">
                  Properties
                </Typography>
                  </Grid >
                  <Grid xs="12"  md="5" sm="5" xl="5"  >
                  <FormControl
                 
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px"  }}
                    >
                      <Typography variant="h6" color="error" >
                        Background
                      </Typography>
                      <Select
                      
                        sx={{
                         color:"lightblue",
              
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid md="2" xl="2" sm="2"></Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5">
                  <FormControl
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px" }}
                    >
                      <Typography variant="h6" color="error" >
                        Body
                      </Typography>
                      <Select
                        sx={{
                          color:"lightblue",
            
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em >Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                          
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5" container justifyContent="around" >
                  <FormControl
                 
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px"  }}
                    >
                      <Typography variant="h6" color="error" >
                        Feet
                      </Typography>
                      <Select
                      
                        sx={{
                         color:"lightblue",
              
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid md="2" xl="2" sm="2"></Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5">
                  <FormControl
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px" }}
                    >
                      <Typography variant="h6" color="error" >
                       Head
                      </Typography>
                      <Select
                        sx={{
                          color:"lightblue",
            
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em >Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                          
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5" container justifyContent="around" >
                  <FormControl
                 
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px"  }}
                    >
                      <Typography variant="h6" color="error" >
                     Neck
                      </Typography>
                      <Select
                      
                        sx={{
                         color:"lightblue",
              
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid md="2" xl="2" sm="2"></Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5">
                  <FormControl
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px" }}
                    >
                      <Typography variant="h6" color="error" >
                       Tail
                      </Typography>
                      <Select
                        sx={{
                          color:"lightblue",
            
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em >Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                          
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5" container justifyContent="around" >
                  <FormControl
                 
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px"  }}
                    >
                      <Typography variant="h6" color="error" >
                        Torso
                      </Typography>
                      <Select
                      
                        sx={{
                         color:"lightblue",
              
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid md="2" xl="2" sm="2"></Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5">
                  <FormControl
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px" }}
                    >
                      <Typography variant="h6" color="error" >
                       Trim
                      </Typography>
                      <Select
                        sx={{
                          color:"lightblue",
            
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em >Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                          
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5" container justifyContent="around" >
                  <FormControl
                 
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px"  }}
                    >
                      <Typography variant="h6" color="error" >
                        #Traits
                      </Typography>
                      <Select
                      
                        sx={{
                         color:"lightblue",
              
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                  <Grid md="2" xl="2" sm="2"></Grid>
                  <Grid xs="12"  md="5" sm="5" xl="5">
                  <FormControl
                      sx={{ m: 0, mt: 3, width: "100%", borderRadius: "10px" }}
                    >
                      <Typography variant="h6" color="error" >
                      Rarity
                      </Typography>
                      <Select
                        sx={{
                          color:"lightblue",
            
                          borderRadius: "12px",
                        }}
                        variant="outlined"
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput className="p-0" />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Choose a property...</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em >Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                          
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  </Grid>
                </Grid>
              
                

                  <Grid>
                    <Grid xs="12" container justifyContent="center" sx={{marginTop:"20px"}}> 
                    <Button size="large" variant="outlined" color="error" className="btn3" >Clear Filters</Button></Grid>
                  </Grid>
                  
               
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
