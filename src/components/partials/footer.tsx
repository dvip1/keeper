export default function Footer() {
    let year: number = new Date().getFullYear()
    return (
        <>
            <footer className="footer py-3">
                <div className="container">
                    <p className="text-center mb-0">
                        <i className="fas fa-regular fa-copyright"></i> copyright {year}
                    </p>
                </div>
            </footer>
        </>
    )
}