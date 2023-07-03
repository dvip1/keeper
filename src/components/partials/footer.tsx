export default function Footer(){
    let year = new Date().getFullYear()
    return(
        <>  
            <footer>
                 <p>
                 <i className="fa-regular fa-copyright"></i> copyright {year}</p>
            </footer>
        </>
    )
}