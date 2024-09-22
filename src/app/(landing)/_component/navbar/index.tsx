import LnadingPageMenu from "./menu"

export default function LandingPageNavbar() {
    return (
        <div className="sticky w-full flex justify-center z-50 top-0 py-5">
            <div className="text-2xl font-bold">skillWsie</div>
            <LnadingPageMenu orientation="desktop" />
        </div>
    )
}
