const apiKey='VVQQ2GWqnyH-u4U1ZMQJXND7NVhUq4puh-j4Dd9UAPkg2jSseZWkbmAZ_21CLKJvq_-zmYewBSfbz5NvQ810EAQpp_wgRNcktL5agbKNZ6PO5tW28LZad1TAWEC-XHYx';

const Yelp={

};

const search = (term, location, sortBy) =>{
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
    ).then (response=>{
        return response.json();
    });
};