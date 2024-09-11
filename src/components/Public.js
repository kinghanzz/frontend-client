import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">king. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown close to centrum, king k. Repairs  provides a trained staff ready to meet your tech repair needs.feel free to state your issues</p>
                <address className="public__addr">
                    king. Repairs<br />
                    jana pawla <br />
                    warsaw city, 99-300<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: king kingston</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public