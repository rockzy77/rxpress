

const Brands = () => {

    const brands = [
        {
            name: 'Cipla Limited',
            image: 'main.jpg'
        },
        {
            name: 'Sun Pharmaceutical',
            image: 'main.jpg'
        },
        {
            name: 'Dr Reddies Laroratory',
            image: 'main.jpg'
        },
        {
            name: 'Torrent Pharmaceuticals',
            image: 'main.jpg'
        },
        {
            name: 'Zydus Cadila',
            image: 'main.jpg'
        },
        {
            name: 'Dabur',
            image: 'main.jpg'
        },
        {
            name: 'Pankajakasthuri',
            image: 'main.jpg'
        },
        {
            name: 'Abbott India',
            image: 'main.jpg'
        },
    ];

    return <div className="brandSection">

        <h1>Featured Brands</h1>

        <div className="brandRow">

           {
            brands.map((item)=>{
                return  <div className="brand-item">
                <div className="brand-img">
                    <img src={process.env.PUBLIC_URL+"/Assets/main.jpg"} alt="" />
                </div>
                <span>{item.name}</span>
            </div>
            })
           }

        </div>
    </div>
}

export default Brands;