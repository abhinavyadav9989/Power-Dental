import type React from "react"
import type { Metadata } from "next"
import { Poppins, Lato } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Power Dental - Best Dental Clinic in Hyderabad | Implants, Root Canal, Cosmetic Dentistry",
  description: "Power Dental - Leading dental clinic in Hyderabad. Expert dentists Dr. Nagesh MDS (Oral Surgeon & Implantologist) & Dr. Meghana Sharma MDS (Endodontist). Services: Implants, Root Canal, Aligners, Cosmetic Dentistry, Trauma Care, Crowns & Bridges, Gum Care, Smile Design. Located in Sriramkrishnapuram, Hyderabad. Book appointment: +91 8686210205",
  keywords: "dental clinic hyderabad, best dentist hyderabad, dental implants hyderabad, root canal treatment hyderabad, cosmetic dentistry hyderabad, orthodontics hyderabad, teeth whitening hyderabad, dental surgery hyderabad, emergency dentist hyderabad, power dental, dr nagesh hyderabad, dr meghana sharma hyderabad, dental clinic sriramkrishnapuram, dental clinic kothapet, dental clinic rk puram",
  authors: [{ name: "Power Dental" }],
  creator: "Power Dental",
  publisher: "Power Dental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://powerdentalhyderabad.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Power Dental - Best Dental Clinic in Hyderabad | Expert Dental Care",
    description: "Leading dental clinic in Hyderabad with expert dentists. Services: Implants, Root Canal, Cosmetic Dentistry, Aligners, Trauma Care. Book appointment: +91 8686210205",
    url: 'https://powerdentalhyderabad.com',
    siteName: 'Power Dental',
    images: [
      {
        url: '/power-dental-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Power Dental Clinic - Best Dental Care in Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power Dental - Best Dental Clinic in Hyderabad',
    description: 'Expert dental care with Dr. Nagesh MDS & Dr. Meghana Sharma MDS. Implants, Root Canal, Cosmetic Dentistry. Book: +91 8686210205',
    images: ['/power-dental-twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'health',
  classification: 'dental clinic',
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.367612839161403;78.55045320167879',
    'ICBM': '17.367612839161403, 78.55045320167879',
    'DC.title': 'Power Dental - Best Dental Clinic in Hyderabad',
    'DC.description': 'Leading dental clinic in Hyderabad with expert dentists. Services: Implants, Root Canal, Cosmetic Dentistry, Aligners, Trauma Care.',
    'DC.subject': 'dental clinic, dentist, dental implants, root canal, cosmetic dentistry, hyderabad',
    'DC.creator': 'Power Dental',
    'DC.publisher': 'Power Dental',
    'DC.contributor': 'Dr. Nagesh MDS, Dr. Meghana Sharma MDS',
    'DC.date': '2024-01-01',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://powerdentalhyderabad.com',
    'DC.language': 'en',
    'DC.coverage': 'Hyderabad, Telangana, India',
    'DC.rights': 'Copyright 2024 Power Dental',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Power Dental",
              "description": "Leading dental clinic in Hyderabad with expert dentists Dr. Nagesh MDS (Oral Surgeon & Implantologist) and Dr. Meghana Sharma MDS (Endodontist).",
              "url": "https://powerdentalhyderabad.com",
              "telephone": "+91-8686210205",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, Santhoshi Maa Residency, Beside Hanuman Temple, Road No. 4",
                "addressLocality": "Sriramkrishnapuram",
                "addressRegion": "Hyderabad",
                "postalCode": "500035",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.367612839161403,
                "longitude": 78.55045320167879
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00",
                "Su 10:00-14:00"
              ],
              "priceRange": "₹₹",
              "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
              "currenciesAccepted": "INR",
              "medicalSpecialty": [
                "Dental Implants",
                "Root Canal Treatment", 
                "Cosmetic Dentistry",
                "Orthodontics",
                "Oral Surgery",
                "Endodontics",
                "Trauma Care",
                "Gum Care",
                "Smile Design"
              ],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Dental Implants",
                  "description": "Permanent tooth replacement solutions"
                },
                {
                  "@type": "MedicalProcedure", 
                  "name": "Root Canal Treatment",
                  "description": "Advanced endodontic treatment"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Cosmetic Dentistry", 
                  "description": "Smile makeover and aesthetic treatments"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Orthodontics",
                  "description": "Teeth straightening with aligners"
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "Dr. Nagesh MDS",
                  "jobTitle": "Oral and Maxillofacial Surgeon & Implantologist",
                  "description": "Specializes in complex oral surgeries, dental implants, and maxillofacial procedures"
                },
                {
                  "@type": "Person", 
                  "name": "Dr. Meghana Sharma MDS",
                  "jobTitle": "Endodontist",
                  "description": "Expert in root canal treatments and endodontic procedures"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "16",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Patient"
                  },
                  "reviewBody": "Amazing experience! Dr. Nagesh transformed my smile completely. The staff is incredibly professional and caring."
                }
              ],
              "image": [
                "https://powerdentalhyderabad.com/power-dental-clinic.jpg",
                "https://powerdentalhyderabad.com/dr-nagesh.jpg", 
                "https://powerdentalhyderabad.com/dr-meghana.jpg"
              ],
              "sameAs": [
                "https://maps.app.goo.gl/6W7DuyykttxE7AgR7"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Hyderabad"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Hyderabad"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
