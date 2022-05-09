export default function handler(req, res){
    console.log('ready to start handler')
    const getData = async () => {
        console.log('start to get Data')
        //${process.env.CMC_API_KEY}
        
        const response = await fetch(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=436059cd-d8c8-4e80-80a8-ee606c28fa4e',
            {
                method: 'GET',
                headers: {
                    Accept: '*/*',
                },
            },
        )
        const data = await response.json()
        // let json = require('../../data/vendor.json')
        // const data = json
        
        console.log('cmc api data',data)
        res.status(200).json({ data })

        
    }

    getData()
}