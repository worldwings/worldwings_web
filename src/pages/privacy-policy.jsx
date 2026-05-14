import LegalScreen from "@/components/screens/legal/legal";
import SEO from "@/components/common/seo/seo";

export default function PrivacyPolicyPage() {
    return (
        <>
            <SEO title="Privacy Policy" description="Privacy Policy of World Wings Tours and Travels." />
            <LegalScreen title="Privacy Policy">
                <p>Welcome to World Wings Tours and Travels.</p>
                <p>
                    Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our website or travel services.
                </p>

                <h2>1. Information We Collect</h2>
                <p>We may collect the following information from clients and website visitors:</p>
                <ul>
                    <li>Full name</li>
                    <li>Contact details (phone number, email address, address)</li>
                    <li>Passport and visa information</li>
                    <li>Travel preferences and booking details</li>
                    <li>Payment and transaction information</li>
                    <li>Any documents submitted for visa or travel processing</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>Your information is collected to:</p>
                <ul>
                    <li>Process travel bookings and reservations</li>
                    <li>Assist with visa and passport services</li>
                    <li>Provide customer support and travel assistance</li>
                    <li>Send booking confirmations and travel updates</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h2>3. Payment Security</h2>
                <p>
                    All online payments are processed through secure and encrypted payment gateways.
                    World Wings Tours and Travels does not store customer debit/credit card details on its servers.
                </p>

                <h2>4. Sharing of Information</h2>
                <p>We may share necessary information with:</p>
                <ul>
                    <li>Airlines</li>
                    <li>Hotels</li>
                    <li>Embassies and consulates</li>
                    <li>Cruise operators</li>
                    <li>Insurance providers</li>
                    <li>Government authorities when legally required</li>
                </ul>
                <p>We do not sell or rent customer information to third parties.</p>

                <h2>5. Data Protection</h2>
                <p>
                    We implement reasonable security measures to protect personal information from unauthorized access, misuse, or disclosure.
                </p>

                <h2>6. Cookies & Website Usage</h2>
                <p>
                    Our website may use cookies and analytics tools to enhance browsing experience and improve website performance.
                </p>

                <h2>7. Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.
                </p>

                <h2>8. Policy Updates</h2>
                <p>
                    World Wings Tours and Travels reserves the right to update or modify this Privacy Policy at any time without prior notice.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                    For any privacy-related concerns, please contact us at our official email or phone number provided on our contact page.
                </p>
            </LegalScreen>
        </>
    );
}
