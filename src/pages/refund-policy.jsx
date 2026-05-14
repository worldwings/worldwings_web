import LegalScreen from "@/components/screens/legal/legal";
import SEO from "@/components/common/seo/seo";

export default function RefundPolicyPage() {
    return (
        <>
            <SEO title="Refund Policy" description="Refund Policy of World Wings Tours and Travels." />
            <LegalScreen title="Cancellation & Refund Policy">
                <p>
                    At World Wings Tours and Travels, we understand that travel plans may change unexpectedly. Our cancellation and refund policies are designed to maintain transparency and fairness.
                </p>

                <h2>1. Cancellation Requests</h2>
                <p>
                    All cancellation requests must be submitted in writing via email or official communication channels.
                </p>

                <h2>2. Tour Package Cancellation</h2>
                <p>Cancellation charges may vary depending on:</p>
                <ul>
                    <li>Destination</li>
                    <li>Airline policies</li>
                    <li>Hotel policies</li>
                    <li>Cruise operators</li>
                    <li>Travel season and booking conditions</li>
                </ul>

                <h2>3. Flight Ticket Cancellation</h2>
                <p>
                    Airline ticket cancellations are governed by the respective airline’s fare rules. Certain promotional or discounted fares may be completely non-refundable.
                </p>

                <h2>4. Visa & Processing Fees</h2>
                <p>
                    Visa fees, appointment charges, courier fees, and service charges are strictly non-refundable under any circumstances, including visa rejection.
                </p>

                <h2>5. Hotel & Cruise Cancellation</h2>
                <p>
                    Refund eligibility for hotel and cruise bookings depends on the supplier’s cancellation policy and timelines.
                </p>

                <h2>6. Refund Processing Time</h2>
                <p>
                    Approved refunds may take approximately 7–30 working days depending on airlines, banks, payment gateways, or suppliers.
                </p>

                <h2>7. No-Show Policy</h2>
                <p>
                    No refund will be provided for unused services, missed flights, no-shows, or partially utilized packages.
                </p>

                <h2>8. Force Majeure</h2>
                <p>No refunds shall be applicable for cancellations or disruptions caused by:</p>
                <ul>
                    <li>Natural disasters</li>
                    <li>Weather conditions</li>
                    <li>Government restrictions</li>
                    <li>Political unrest</li>
                    <li>Pandemic or emergency situations</li>
                </ul>

                <h2>9. Refund Method</h2>
                <p>
                    Refunds will be processed through the original mode of payment wherever applicable.
                </p>

                <h2>10. Contact for Cancellation & Refund Assistance</h2>
                <p>
                    For assistance regarding cancellations or refunds, please reach out to our support team through the contact information provided on our website.
                </p>
            </LegalScreen>
        </>
    );
}
