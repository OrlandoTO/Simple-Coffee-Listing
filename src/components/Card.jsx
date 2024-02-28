export default function Card({ image, name, price, rating, votes, available, popular }) {
    return <article className="flex flex-col items-center justify-center  relative gap-3">
        <img src={image} alt="Image" className="rounded-xl" />

        <div className="flex justify-between w-full items-center ">
            <div className="text-[#FEF7EE] font-semibold text-base">
                {name}
            </div>
            <div className="bg-[#BEE3CC] text-[#111315] text-xs text-center rounded-md px-2 py-1 inline-block font-semibold">
                {price}
            </div>
        </div>

        {
            rating ? (
                <div className="flex w-full text-sm font-semibold justify-between items-center">
                    <span className="flex items-center gap-1">
                        <img src="./public/img/Star_fill.svg" alt="Star fill" /> <span className="text-[#BEE3CC]">{ rating}</span> <span className="text-[#6F757C]">{"  (" + votes + " votes)"}</span>
                    </span>
                    {
                        available ? '' : (<span className="text-[#ED735D]">Sold out</span>)
                    }

                </div>
            ) : <div className="flex  w-full gap-2 text-sm items-center text-[#6F757C] font-semibold"><img src="./public/img/Star.svg" alt="Star fill" />No ratings</div>
        }

        {
            popular ? (<span className="absolute left-2 top-2 py-1 px-3 bg-[#F6C768] rounded-full text-[10px] font-medium">Popular</span>) : ''
        }

    </article>
}