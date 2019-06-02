import App from "../App";
const clientId='wTEduhbLx1cEdiaNNwg-zw';
const apiKey='VVQQ2GWqnyH-u4U1ZMQJXND7NVhUq4puh-j4Dd9UAPkg2jSseZWkbmAZ_21CLKJvq_-zmYewBSfbz5NvQ810EAQpp_wgRNcktL5agbKNZ6PO5tW28LZad1TAWEC-XHYx';

export const Yelp={
    search :(term, location, sortBy) =>{
    return fetch((`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`), 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }
    ).then (response=>{
        return response.json();
    }).then(jsonResponse=>{
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business=>{
                return {
                    id: business.id, 
                    imageSrc: business.image_url, 
                    name: business.name, 
                    address: business.location.address1, 
                    city: business.location.city, 
                    state: business.location.state, 
                    zipCode: business.location.zip_code, 
                    category: business.category, 
                    rating: business.rating, 
                    reviewCount: business.review_count
                };
            });
        }
    });
}
}
