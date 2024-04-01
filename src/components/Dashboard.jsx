import HeroSection from "./HeroSection";
import SideBar from "./SideBar";

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="w-56">
                <SideBar />
            </div>
            <div className="grow">
                <HeroSection />
            </div>
        </div>
    )
}