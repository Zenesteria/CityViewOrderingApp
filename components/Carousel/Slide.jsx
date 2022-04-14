export const Slide = (props) => {
    return(
        <div key={props.key}>
            <div className="flex w-full h-[60vh] bg-blue-50 bg-center bg-cover bg-no-repeat darken" style={{backgroundImage:props.bg}}></div>
        </div>
    )
}

