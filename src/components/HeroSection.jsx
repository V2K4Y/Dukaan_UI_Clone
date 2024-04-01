import Footer from "./Footer";
import OverView from "./OverView";
import TopBar from "./TopBar";
import Transactions from "./Transactions";

export default function HeroSection() {
    return (
        <div className="min-h-lvh">
                <TopBar />
                <OverView />
                <Transactions />
                <Footer />
        </div>
    )
}