// const props = {
//     className: "aslkdfjsalkfjksl",
//     children: "salkdfjslkdfjslk"
// }

// const { className } = props

const Contenedor = ({ className, children }) => {
    return (
        <div
            className={` 
            w-[400px]
            h-[540px]
            rounded-lg
            p-[16px]
            shadow
            mb-5
            ${className}`}
        >
            {children}
        </div>
    )
}

export default Contenedor