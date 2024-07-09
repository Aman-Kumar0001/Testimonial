import React, { useState } from 'react'
const testimonial = [
    {
        img: "https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028598.jpg?t=st=1720178466~exp=1720182066~hmac=e53d92ad6e5d615c97b083d643ae24f8e1c3f8046063afd1d83e5012df3a64d4?ga=GA1.1.1461989904.1705814989",
        test: "lorem sadjnoaiednc wenqoiend wenciw",
        author: "Aman"
    },

    {
        img: "https://img.freepik.com/free-photo/anime-style-clouds_23-2151071804.jpg?t=st=1720178466~exp=1720182066~hmac=37a2e1874a788c4645a398d5bfa64c5dc1733a9400aea200d22f3368c9e5125f?ga=GA1.1.1461989904.1705814989",
        test: "lorem sadjnoaiednc wenqoiend wenciw",
        author: "Shivang"
    },

    {
        img: "https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038431.jpg?t=st=1720178948~exp=1720182548~hmac=d2486b0f5c756c5f472c3c9411f0b046ad56bce5ea9950f02bd7d7d3b11bc36d?ga=GA1.1.1461989904.1705814989",
        test: "lorem sadjnoaiednc wenqoiend wenciw",
        author: "Yash"
    }
]


const Testimonial = () => {
    const [data, setData] = useState(0)

    const previous = () => {
        setData((x) => (x === 0 ? testimonial.length - 1 : x - 1))
    }

    const next = () => {
        setData((x) => (x === testimonial.length - 1 ? 0 : x + 1))
    }

    const navigaterDots = (index) => {
        setData(index)
    }

    return (
        <>


            <div className='carosel'>
                <div className="img">
                    <button className='pre-btn' onClick={previous}>←</button>
                    <img src={testimonial[data].img} alt="" width={"80%"} height={"50%"} />
                    <button className='next-btn' onClick={next}>→</button>
                </div>
                <div className="para">
                    <p>{testimonial[data].test}</p>
                    <p style={{fontSize:'26px'}}>{testimonial[data].author}</p>
                </div>

            </div>
            <div>
                {testimonial.map((_, index) => (
                    <span onClick={() => navigaterDots(index)} key={index} style={
                        {
                            width: "10px", height: "10px", borderRadius: "50%",
                            backgroundColor: data === index ? "blue" : "white",
                            display: "inline-block", marginLeft: "5px",
                            cursor: "pointer"
                        }
                    }></span>
                )
                )
                }
            </div>
        </>
    )
}

export default Testimonial