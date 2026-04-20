import finance1 from '../assets/finance1.png'
import finance2 from '../assets/finance2.png'   
import finance3 from '../assets/finance3.png'
export default function LandingPage() {
    return (
        <>
            <div>
                <h1>Welcome to the Finance Tracker</h1>
                <p>Your personal financial management solution.</p>
            </div>
            <div>
                <img src={finance1} alt="Finance 1" />
                <h2>Have you ever wondered where you're spending your money?</h2>
            </div>
            <div>
                <img src={finance2} alt="Finance 2" />
                <h2>Do you constantly face financial challenges?</h2>
            </div>
            <div>
                <img src={finance3} alt="Finance 3" />
                <h2>Let us help you take control of your finances.</h2>
            </div>
            <div></div>
        </>
    )
}