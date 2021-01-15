import React from 'react';
import { Box, TextInput, SelectInput, TextArea, Text, Button, Modal } from '@bdp-rps/ui';

const Filter = (places) => {
    
return (
    <Box>
         <SelectInput
                    label={"Platztyp"}
                    name="placetype"
                     onChange={name => setPlace({ ...place, name })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
    </Box>
);

}
export default Filter;
