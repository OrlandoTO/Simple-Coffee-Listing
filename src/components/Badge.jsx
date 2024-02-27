export default function Badge({ content, onClick,active }) {
    const handleClick = () => {
        onClick()
    }
    return <span class={`p-2 ${active?'bg-[#6F757C]':''} text-sm text-[#FEF7EE] 
    font-semibold rounded-md inline-block cursor-pointer`}
        onClick={handleClick}
    >
        {content}
    </span>
}


