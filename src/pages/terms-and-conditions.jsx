import LegalScreen from "@/components/screens/legal/legal";
import SEO from "@/components/common/seo/seo";

export default function TermsAndConditionsPage() {
    return (
        <>
            <SEO title="Terms and Conditions" description="Terms and Conditions of World Wings Tours and Travels." />
            <LegalScreen title="Terms & Conditions">
                <p>Welcome to World Wings Tours and Travels.</p>
                <p>By using our website and services, you agree to the following Terms & Conditions.</p>

                <h2>1. Booking Confirmation</h2>
                <p>
                    All bookings are subject to availability and confirmation from airlines, hotels, cruise operators, embassies, and other service providers.
                    Bookings will be confirmed only after receipt of the required advance or full payment.
                </p>

                <h2>2. Payment Policy</h2>
                <ul>
                    <li>Payments can be made via bank transfer, UPI, debit/credit card, or approved payment gateways.</li>
                    <li>Prices are subject to change due to airfare fluctuations, currency exchange rates, taxes, and supplier revisions.</li>
                    <li>Failure to complete payments within the specified timeline may result in cancellation of services.</li>
                </ul>

                <h2>3. Visa Services</h2>
                <ul>
                    <li>Visa approval is solely at the discretion of the respective embassy or consulate.</li>
                    <li>Visa fees and processing charges are non-refundable.</li>
                    <li>Clients are responsible for submitting genuine and accurate documents.</li>
                </ul>

                <h2>4. Flight Tickets & Hotel Bookings</h2>
                <ul>
                    <li>Airline tickets and hotel reservations are subject to supplier policies.</li>
                    <li>Certain bookings may be non-refundable or partially refundable.</li>
                    <li>Schedule changes by airlines or hotels are beyond our control.</li>
                </ul>

                <h2>5. Travel Insurance</h2>
                <p>
                    Travel insurance is strongly recommended for all domestic and international travel.
                </p>

                <h2>6. Liability Disclaimer</h2>
                <p>
                    World Wings Tours and Travels acts only as an intermediary between clients and service providers and shall not be held responsible for:
                </p>
                <ul>
                    <li>Flight delays or cancellations</li>
                    <li>Visa rejections</li>
                    <li>Loss of baggage or belongings</li>
                    <li>Natural disasters or unforeseen events</li>
                    <li>Political unrest or travel restrictions</li>
                </ul>

                <h2>7. Amendments & Changes</h2>
                <p>
                    Changes to confirmed bookings may attract additional charges depending on supplier policies.
                </p>

                <h2>8. Acceptance of Terms</h2>
                <p>
                    By proceeding with bookings or payments, the client acknowledges and accepts these Terms & Conditions.
                </p>
            </LegalScreen>
        </>
    );
}
