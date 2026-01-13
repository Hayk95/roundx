import QuoteForm from "@/components/QuoteForm";

export const metadata = {
    title: "Get Instant Vehicle Shipping Quote | RoundX Transport",
    description: "Calculate your vehicle shipping cost instantly with RoundX. Fill in details about your vehicle, origin, destination, and receive an accurate quote within minutes.",
    keywords: [
        "RoundX Transport",
        "Vehicle Shipping Quote",
        "Car Transport Cost",
        "Instant Quote",
        "Vehicle Transport USA",
        "Freight Shipping",
        "Auto Transport Services"
    ],
    openGraph: {
        title: "Get Instant Vehicle Shipping Quote | RoundX",
        description: "Fill out your vehicle details, origin, and destination to get an instant shipping quote from RoundX",
        url: "https://roundxtransport.com /quote",
        siteName: "RoundX Transport",
        images: [
            {
                url: "https://roundxtransport.com/og-image-quote.png", // replace with actual OG image
                width: 1200,
                height: 630,
            }
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true
    }
};

const Quote = () => {
    return <QuoteForm />;
};

export default Quote;
