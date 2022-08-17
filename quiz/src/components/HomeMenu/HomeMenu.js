import "./HomeMenu.scss"

export default function HomeMenu() {
    return (
        <div className="menu">
            <div className="btn-container">
                <button className="btn btn-login">Log In</button>
                <button className="btn btn-signup">Sign Up</button>
            </div>

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Find a quizzie"></input>
                <button className="search-icon">icon</button>
            </div>

            <div className="content-container">
                <h2>
                    Design custom quizzes from scratch or choose from 1,000+ templates
                </h2>
                <h1>FOR FREE!</h1>
            </div>
        </div>
    )
}