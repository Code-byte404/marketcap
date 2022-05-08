export default function handler(req, res){
    console.log('ready to start handler')
    const getData = async () => {
        console.log('start to get Data')
        const response = await fetch(
            `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}`,
            {
            method: 'GET',
            headers: {
                Accept: '*/*',
            },
            },
        )
        
    
        const data = await response.json()
        console.log('cmc api data',data)
        res.status(200).json({ data })
    }

    getData()
}