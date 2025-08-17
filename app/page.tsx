"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Phone,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Shield,
  Sparkles,
  Zap,
  Heart,
  Play,
  ExternalLink,
  X,
  Mail,
  Award,
  Users,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function DentalClinicPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50)
  const [currentCase, setCurrentCase] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })
  const [email, setEmail] = useState("")
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = heroRef.current.querySelector(".floating-icons") as HTMLElement
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      name: "Krishna Kumar",
      rating: 5,
      text: "Amazing experience! Dr. Smith transformed my smile completely. The staff is incredibly professional and caring.",
      treatment: "Cosmetic Dentistry",
      video: true,
    },
    {
      name: "Abhimanyu Singh",
      rating: 5,
      text: "Best dental clinic in the city! The technology they use is cutting-edge and the results speak for themselves.",
      treatment: "Dental Implants",
      video: false,
    },
    {
      name: "Pirya Gupta",
      rating: 5,
      text: "I was terrified of dentists, but the team here made me feel so comfortable. Highly recommend!",
      treatment: "General Dentistry",
      video: true,
    },
  ]

  const beforeAfterCases = [
    {
      before: "/damaged-teeth-before-dental-treatment.png",
      after: "/dental-after-treatment-smile.png",
      service: "Cosmetic Dentistry",
      description: "Complete smile makeover with veneers",
    },
    {
      before: "/crooked-teeth-before.png",
      after: "/straight-teeth-after-braces.png",
      service: "Orthodontics",
      description: "Teeth straightening with clear aligners",
    },
    {
      before: "/yellow-stained-teeth-before-whitening.png",
      after: "/bright-white-teeth-whitening.png",
      service: "Teeth Whitening",
      description: "Professional whitening treatment",
    },
  ]

  const services = [
    {
      icon: Shield,
      title: "Implants",
      description: "Permanent tooth replacement solutions that look and feel natural.",
      steps: ["Bone Assessment", "Implant Placement", "Healing Period", "Crown Attachment", "Final Adjustment"],
      duration: "3-6 months total",
      recovery: "1-2 weeks initial healing, soft foods recommended",
    },
    {
      icon: Sparkles,
      title: "Root Canals",
      description: "Advanced endodontic treatment to save damaged teeth and relieve pain.",
      steps: ["Diagnosis & X-rays", "Local Anesthesia", "Access Opening", "Cleaning & Shaping", "Filling & Sealing"],
      duration: "1-2 appointments",
      recovery: "1-2 days sensitivity, avoid hard foods initially",
    },
    {
      icon: Zap,
      title: "Aligners",
      description: "Modern teeth straightening with clear, removable aligners.",
      steps: ["3D Scan", "Treatment Plan", "Aligner Fitting", "Progress Monitoring", "Retention Phase"],
      duration: "12-24 months",
      recovery: "Mild discomfort first few days, regular adjustments",
    },
    {
      icon: Star,
      title: "Trauma Care",
      description: "Emergency dental care for accidents and dental injuries.",
      steps: ["Emergency Assessment", "Pain Management", "Treatment Planning", "Immediate Care", "Follow-up"],
      duration: "30-90 minutes",
      recovery: "Varies based on injury severity",
    },
    {
      icon: Heart,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, bonding, and aesthetic treatments.",
      steps: ["Smile Analysis", "Digital Mock-up", "Preparation", "Custom Fabrication", "Final Placement"],
      duration: "2-3 appointments",
      recovery: "1-2 days sensitivity, avoid hard foods initially",
    },
    {
      icon: Users,
      title: "Crowns & Bridges",
      description: "Restore damaged teeth and replace missing teeth with natural-looking solutions.",
      steps: ["Tooth Preparation", "Impressions", "Temporary Crown", "Custom Fabrication", "Final Placement"],
      duration: "2-3 appointments",
      recovery: "1-2 days sensitivity, normal activities same day",
    },
    {
      icon: Shield,
      title: "Gum Care",
      description: "Comprehensive periodontal care for healthy gums and overall oral health.",
      steps: ["Gum Assessment", "Deep Cleaning", "Treatment Plan", "Ongoing Care", "Maintenance"],
      duration: "30-60 minutes",
      recovery: "Minimal downtime, normal activities same day",
    },
    {
      icon: Sparkles,
      title: "Smile Design",
      description: "Complete smile makeover with personalized treatment planning.",
      steps: ["Smile Analysis", "Digital Design", "Treatment Planning", "Progressive Treatment", "Final Results"],
      duration: "Varies by case",
      recovery: "Depends on treatments involved",
    },
  ]

  const doctors = [
    {
      name: "Dr. Nagesh MDS",
      degree: "MDS",
      specialization: "Oral and Maxillofacial Surgeon & Implantologist",
      experience: "3+ years",
      image: "/dr-nagesh-makapurett.jpg",
      bio: "Specializes in complex oral surgeries, dental implants, and maxillofacial procedures with advanced technology.",
    },
    {
      name: "Dr. Meghana Sharma MDS",
      degree: "MDS",
      specialization: "Endodontist",
      experience: "3+ years",
      image: "/dr-meghana-sharma.jpg",
      bio: "Expert in root canal treatments and endodontic procedures with a gentle, patient-focused approach.",
    },
  ]

  const blogPosts = [
    {
      slug: "daily-oral-care-tips",
      title: "5 Essential Daily Oral Care Tips for Healthy Teeth and Gums",
      excerpt:
        "Discover the fundamental practices for maintaining excellent oral health every day. Learn proper brushing techniques, flossing methods, and preventive care strategies that will help you prevent cavities, gum disease, and maintain a bright smile for years to come.",
      image: "/brushing-teeth-tips.png",
      author: "Dr. Nagesh MDS",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Oral Care",
      content: {
        intro: "Maintaining good oral hygiene is crucial for overall health. Poor dental care can lead to cavities, gum disease, and even systemic health issues.",
        tips: [
          "Brush twice daily with fluoride toothpaste for 2 minutes",
          "Floss daily to remove plaque between teeth",
          "Use mouthwash to kill bacteria and freshen breath",
          "Replace toothbrush every 3-4 months",
          "Visit dentist every 6 months for checkups"
        ],
        benefits: "Following these tips can prevent 90% of dental problems and save you from expensive treatments."
      }
    },
    {
      slug: "dental-implants-guide",
      title: "Complete Guide to Dental Implants: Everything You Need to Know",
      excerpt:
        "Everything you need to know about dental implant procedures, recovery, and long-term care. Discover why implants are the gold standard for tooth replacement, what to expect during treatment, and how to maintain them for life.",
      image: "/dental-implants-guide.png",
      author: "Dr. Nagesh MDS",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Dental Implants",
      content: {
        intro: "Dental implants are the most advanced and permanent solution for missing teeth, offering natural look and function.",
        procedure: "The implant process involves 3 stages: implant placement, healing period, and crown attachment.",
        benefits: [
          "Natural appearance and function",
          "Prevents bone loss",
          "Long-lasting (20+ years)",
          "No damage to adjacent teeth",
          "Easy maintenance"
        ],
        care: "Proper oral hygiene and regular dental visits are essential for implant longevity."
      }
    },
    {
      slug: "professional-vs-home-whitening",
      title: "Professional vs. At-Home Teeth Whitening: Which is Right for You?",
      excerpt:
        "Compare different teeth whitening options to find the best solution for your needs. Learn about safety, effectiveness, cost considerations, and what to expect from professional and at-home whitening methods.",
      image: "/teeth-whitening-options.png",
      author: "Dr. Nagesh MDS",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Cosmetic Dentistry",
      content: {
        intro: "Teeth whitening is one of the most popular cosmetic dental procedures, but choosing between professional and at-home options can be confusing.",
        comparison: {
          professional: {
            effectiveness: "8-10 shades lighter",
            duration: "1-2 hours",
            cost: "₹8,000-15,000",
            safety: "Supervised by dentist"
          },
          atHome: {
            effectiveness: "2-4 shades lighter",
            duration: "2-4 weeks",
            cost: "₹2,000-5,000",
            safety: "Self-administered"
          }
        },
        recommendation: "Professional whitening is recommended for faster, safer, and more dramatic results."
      }
    },
    {
      slug: "root-canal-myths",
      title: "Debunking Common Root Canal Myths: What You Really Need to Know",
      excerpt:
        "Separate fact from fiction about root canal treatment. Learn why modern root canals are painless, how they save your natural teeth, and what the recovery process really involves.",
      image: "/damaged-teeth-before.png",
      author: "Dr. Meghana Sharma MDS",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Endodontics",
      content: {
        intro: "Root canal treatment has an undeserved reputation for being painful. Modern techniques make it comfortable and effective.",
        myths: [
          "Myth: Root canals are extremely painful",
          "Fact: Modern anesthesia makes it painless",
          "Myth: Root canals cause illness",
          "Fact: They prevent infection spread",
          "Myth: Extraction is better than root canal",
          "Fact: Saving natural teeth is always preferred"
        ],
        process: "The procedure involves removing infected pulp, cleaning the canal, and sealing it to prevent reinfection."
      }
    },
    {
      slug: "orthodontics-guide",
      title: "Modern Orthodontics: From Traditional Braces to Clear Aligners",
      excerpt:
        "Explore the latest advances in orthodontic treatment. Learn about traditional braces, clear aligners, and other options for achieving a perfectly aligned smile.",
      image: "/crooked-teeth-before.png",
      author: "Dr. Nagesh MDS",
      date: "November 25, 2024",
      readTime: "11 min read",
      category: "Orthodontics",
      content: {
        intro: "Orthodontic treatment has evolved significantly, offering more options than ever for straightening teeth.",
        options: {
          traditional: "Metal braces for complex cases",
          ceramic: "Less visible braces",
          lingual: "Braces behind teeth",
          aligners: "Removable clear trays"
        },
        benefits: "Properly aligned teeth improve oral health, function, and appearance."
      }
    },
    {
      slug: "emergency-dental-care",
      title: "Emergency Dental Care: What to Do When Dental Problems Strike",
      excerpt:
        "Learn how to handle common dental emergencies before you can reach a dentist. From toothaches to broken teeth, know the immediate steps to take for relief and prevention of further damage.",
      image: "/damaged-teeth-before-dental-treatment.png",
      author: "Dr. Meghana Sharma MDS",
      date: "November 20, 2024",
      readTime: "7 min read",
      category: "Emergency Care",
      content: {
        intro: "Dental emergencies can happen anytime. Knowing what to do can save your tooth and reduce pain.",
        emergencies: [
          "Severe toothache: Rinse with warm water, use pain relievers",
          "Broken tooth: Save pieces, rinse mouth, see dentist immediately",
          "Knocked-out tooth: Keep moist, seek immediate care",
          "Bleeding gums: Apply pressure, avoid aspirin"
        ],
        prevention: "Regular checkups and good oral hygiene prevent most emergencies."
      }
    }
  ]

  const handleWhatsAppBooking = (formData: FormData) => {
    const name = formData.get("name")
    const mobile = formData.get("mobile")
    const service = formData.get("service")
    const date = formData.get("date")
    const time = formData.get("time")

    const message = `Hi! I'd like to book an appointment at Power Dental.
    
Name: ${name}
Mobile: ${mobile}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}

Please confirm my appointment. Thank you!`

    const whatsappUrl = `https://wa.me/8686210205?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Thank you for subscribing with email: ${email}`)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 power-dental-brown-bg rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h1 className="text-2xl font-bold power-dental-brown font-sans">Power Dental</h1>
            </div>
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">
                Doctors
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </a>
            </nav>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white glow-button"
              onClick={() =>
                window.open("https://wa.me/8686210205?text=Hi! I would like to contact Power Dental.", "_blank")
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section ref={heroRef} className="parallax-hero py-20 relative">
          <div className="floating-icons">
            <div className="floating-tooth" style={{ top: "10%", left: "10%", fontSize: "2rem" }}>
              🦷
            </div>
            <div className="floating-sparkle" style={{ top: "20%", right: "15%", fontSize: "1.5rem" }}>
              ✨
            </div>
            <div className="floating-tooth" style={{ bottom: "20%", left: "20%", fontSize: "1.8rem" }}>
              🦷
            </div>
            <div className="floating-sparkle" style={{ top: "60%", right: "25%", fontSize: "1.2rem" }}>
              ✨
            </div>
            <div className="floating-tooth" style={{ top: "40%", left: "80%", fontSize: "2.2rem" }}>
              🦷
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <h2 className="text-5xl font-bold text-gray-900 mb-6 font-sans">
                  Power Dental
                  <span className="power-dental-gold block">Dedicated to giving you the best</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Advanced care, modern technology, and a passion for perfect smiles. Experience premium dental care with
                  state-of-the-art technology and compassionate service.
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 h-auto glow-button"
                  onClick={() =>
                    window.open("https://wa.me/8686210205?text=Hi! I would like to book an appointment.", "_blank")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Book Appointment on WhatsApp
                </Button>
              </div>
              <div className="relative scroll-reveal">
                <img
                  src="/smiling-dental-patient.png"
                  alt="Professional dental patient with perfect smile at Power Dental clinic in Hyderabad"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl animate-spin">
                  🦷
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="py-12 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4 animate-pulse" />
                <h3 className="font-semibold text-lg mb-2 font-sans">Opening Hours</h3>
                <p className="text-gray-600">Sunday: 10AM-10PM</p>
                <p className="text-gray-600">Mon-Sat: 9AM-10PM</p>
                <p className="text-gray-600">Emergency: 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4 animate-bounce" />
                <h3 className="font-semibold text-lg mb-2 font-sans">Emergency Contact</h3>
                <p className="text-gray-600">24/7 Emergency Line</p>
                <p className="text-lg font-semibold text-red-600">+91 8686210205</p>
                <p className="text-lg font-semibold text-red-600">+91 8019656546</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4 animate-bounce" />
                <h3 className="font-semibold text-lg mb-2 font-sans">Location</h3>
                <p className="text-gray-600">Ground Floor, Santhoshi Maa Residency</p>
                <p className="text-gray-600">Beside Hanuman Temple, Road No. 4</p>
                <p className="text-gray-600">Sriramkrishnapuram, Hyderabad</p>
                <Button variant="outline" size="sm" className="mt-2 bg-transparent glow-button">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Smile Transformation Gallery</h2>
            <p className="text-xl text-gray-600">Witness the incredible transformations we've achieved</p>
          </div>

          <div className="space-y-12">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {beforeAfterCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentCase === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="before-after-container">
              <div className="text-center mb-6">
                <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-lg font-semibold">
                  {beforeAfterCases[currentCase].service}
                </Badge>
                <p className="text-gray-600 mt-3 text-lg">{beforeAfterCases[currentCase].description}</p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <div className="before-after-slider relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <img
                      src={beforeAfterCases[currentCase].before || "/placeholder.svg"}
                      alt="Before dental treatment"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "/damaged-teeth-before.png"
                      }}
                    />
                  </div>

                  {/* After Image with clip-path */}
                  <div
                    className="absolute inset-0 overflow-hidden transition-all duration-300"
                    style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
                  >
                    <img
                      src={beforeAfterCases[currentCase].after || "/placeholder.svg"}
                      alt="After dental treatment"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.currentTarget.src = "/radiant-smile-dental.png"
                      }}
                    />
                  </div>

                  {/* Draggable Handle */}
                  <div
                    className="before-after-handle absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg z-10 flex items-center justify-center"
                    style={{ left: `${beforeAfterPosition}%`, transform: "translateX(-50%)" }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      const rect = e.currentTarget.parentElement!.getBoundingClientRect()
                      const handleMouseMove = (e: MouseEvent) => {
                        const newPosition = ((e.clientX - rect.left) / rect.width) * 100
                        setBeforeAfterPosition(Math.max(0, Math.min(100, newPosition)))
                      }
                      const handleMouseUp = () => {
                        document.removeEventListener("mousemove", handleMouseMove)
                        document.removeEventListener("mouseup", handleMouseUp)
                      }
                      document.addEventListener("mousemove", handleMouseMove)
                      document.addEventListener("mouseup", handleMouseUp)
                    }}
                    onTouchStart={(e) => {
                      const rect = e.currentTarget.parentElement!.getBoundingClientRect()
                      const handleTouchMove = (e: TouchEvent) => {
                        const touch = e.touches[0]
                        const newPosition = ((touch.clientX - rect.left) / rect.width) * 100
                        setBeforeAfterPosition(Math.max(0, Math.min(100, newPosition)))
                      }
                      const handleTouchEnd = () => {
                        document.removeEventListener("touchmove", handleTouchMove)
                        document.removeEventListener("touchend", handleTouchEnd)
                      }
                      document.addEventListener("touchmove", handleTouchMove)
                      document.addEventListener("touchend", handleTouchEnd)
                    }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-1 h-4 bg-gray-400"></div>
                      <div className="w-1 h-4 bg-gray-400 ml-1"></div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg font-semibold">
                    Before
                  </div>
                  <div className="absolute bottom-6 right-6 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg font-semibold">
                    After
                  </div>
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 z-20"
                  onClick={() =>
                    setCurrentCase((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length)
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 z-20"
                  onClick={() => setCurrentCase((prev) => (prev + 1) % beforeAfterCases.length)}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Case Information */}
              <div className="text-center mt-6">
                <p className="text-gray-600">Drag the slider or use the arrows to see the transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Our Premium Dental Services in Hyderabad</h2>
            <p className="text-xl text-gray-600">Comprehensive dental care with cutting-edge technology at Power Dental</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-flip-card">
                <div className="service-flip-inner">
                  <div className="service-flip-front bg-white shadow-lg">
                    <service.icon className="w-16 h-16 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 font-sans">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    <p className="text-xs text-gray-500 mt-4">Hover to see details</p>
                  </div>
                  <div className="service-flip-back">
                    <h3 className="text-lg font-bold mb-4 font-sans">{service.title}</h3>
                    <div className="text-left space-y-2 text-sm">
                      <div>
                        <strong>Procedure Steps:</strong>
                        <ol className="list-decimal list-inside mt-1 space-y-1">
                          {service.steps.map((step, i) => (
                            <li key={i} className="text-xs">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <strong>Duration:</strong> {service.duration}
                      </div>
                      <div>
                        <strong>Recovery:</strong> {service.recovery}
                      </div>
                    </div>
                    <Button size="sm" className="mt-4 bg-white text-blue-600 hover:bg-gray-100">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Meet Our Expert Dentists in Hyderabad</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your oral health at Power Dental</p>
          </div>

          {/* Team Banner */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <img src="/professional-dentists.png" alt="Power Dental team of expert dentists in Hyderabad" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 power-dental-dark-brown-bg bg-opacity-80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2 font-sans power-dental-gold">Your Smile, Our Passion</h3>
                <p className="text-lg text-white">Combining expertise with compassionate care since 2010</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {doctors.map((doctor, index) => (
              <Card key={index} className="doctor-card overflow-hidden">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={`${doctor.name} - ${doctor.specialization} at Power Dental Hyderabad`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-sans">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{doctor.degree}</p>
                  <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                  <div className="flex items-center mb-3">
                    <Award className="w-4 h-4 text-gold-accent mr-2" />
                    <span className="text-sm text-gray-600">{doctor.experience} Experience</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{doctor.bio}</p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent"
                    onClick={() => window.open(`https://wa.me/8686210205?text=Hey Dr.${doctor.name.split(" ")[1]}, I have a doubt. Would you please clear it?`, "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Any doubts, click here to chat
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50 scroll-reveal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Patient Success Stories</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.9/5 on Google Reviews</span>
            </div>
          </div>

          <div className="relative">
            <Card className="testimonial-card max-w-2xl mx-auto">
              <CardContent className="pt-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <div>
                  <h4 className="font-semibold text-lg font-sans">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].treatment}</p>
                  {testimonials[currentTestimonial].video && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 bg-transparent"
                      onClick={() => setShowVideoModal(true)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden scroll-reveal">
        <div className="absolute inset-0 opacity-10">
          <div className="floating-sparkle" style={{ top: "10%", left: "10%", fontSize: "3rem" }}>
            ✨
          </div>
          <div className="floating-tooth" style={{ top: "20%", right: "15%", fontSize: "2.5rem" }}>
            🦷
          </div>
          <div className="floating-sparkle" style={{ bottom: "20%", left: "20%", fontSize: "2rem" }}>
            ✨
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="offer-banner rounded-2xl p-8 mb-8">
            <div className="rotating-offer mb-4">
              <h2 className="text-3xl font-bold font-sans">🎉 Limited Time Special Offer! 🎉</h2>
            </div>
            <p className="text-xl mb-6">Get 20% off your first consultation and professional cleaning</p>
            <Badge className="gold-bg text-black text-lg px-4 py-2 font-sans">New Patients Only</Badge>
          </div>

          <div className="countdown-timer rounded-xl p-6 inline-block">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 font-sans">Offer Expires In:</h3>
            <div className="flex justify-center space-x-4 text-gray-900">
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-16 bg-gray-50 scroll-reveal">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
            <p className="text-xl text-gray-600">Schedule your visit in just a few clicks</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form action={handleWhatsAppBooking} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input name="name" required placeholder="Enter your full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                  <Input name="mobile" type="tel" required placeholder="Enter your mobile number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Seeking *</label>
                  <select name="service" required className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">Select a service</option>
                    <option value="Implants">Implants</option>
                    <option value="Root Canals">Root Canals</option>
                    <option value="Aligners">Aligners</option>
                    <option value="Trauma Care">Trauma Care</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Crowns & Bridges">Crowns & Bridges</option>
                    <option value="Gum Care">Gum Care</option>
                    <option value="Smile Design">Smile Design</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                    <Input name="date" type="date" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                    <select name="time" required className="w-full p-3 border border-gray-300 rounded-md">
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our friendly team</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Power+Dental+Sri+Rd+Number+4+beside+hanuman+temple+SRK+Puram+RK+Puram+Alakapuri+Kothapet+Hyderabad+Telangana+500035"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Power Dental Location"
                ></iframe>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Ground Floor, Santhoshi Maa Residency</p>
                      <p className="text-gray-600">Beside Hanuman Temple, Road No. 4</p>
                      <p className="text-gray-600">Sriramkrishnapuram, Hyderabad, Telangana - 500035</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 8686210205</p>
                      <p className="text-gray-600">+91 8019656546</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-gray-600">+91 8686210205</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://maps.app.goo.gl/6W7DuyykttxE7AgR7?g_st=aw', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Dental Health Tips & Expert Guides</h2>
            <p className="text-xl text-gray-600">Stay informed about your oral health with expert advice from Power Dental</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={`${post.title} - Dental health guide by ${post.author}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="font-medium text-blue-600">{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-sans group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Quick Tips Preview */}
                  {post.content && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Quick Highlights:</h4>
                      <ul className="text-xs text-blue-700 space-y-1">
                        {post.content.tips && post.content.tips.slice(0, 2).map((tip, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            {tip}
                          </li>
                        ))}
                        {post.content.benefits && (
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            {post.content.benefits}
                          </li>
                        )}
                        {post.content.comparison && (
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            Compare professional vs at-home options
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="bg-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all"
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Read Our Dental Guides?</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <h4 className="font-semibold mb-2">Expert Knowledge</h4>
                  <p className="text-sm text-gray-600">Written by experienced dentists with years of practice</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2">Practical Tips</h4>
                  <p className="text-sm text-gray-600">Actionable advice you can implement immediately</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 text-xl">💡</span>
                  </div>
                  <h4 className="font-semibold mb-2">Latest Information</h4>
                  <p className="text-sm text-gray-600">Up-to-date dental care practices and technology</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 power-dental-brown-bg rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">P</span>
                </div>
                <h3 className="text-2xl font-bold font-sans">Power Dental</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Dedicated to giving you the best. Premium dental care with cutting-edge technology since 2010.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <h4 className="font-semibold font-sans">Stay Updated</h4>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input bg-gray-800 border-gray-700 text-white"
                    required
                  />
                  <Button type="submit" className="ml-2 bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-sans">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Implants</li>
                <li>Root Canals</li>
                <li>Aligners</li>
                <li>Trauma Care</li>
                <li>Cosmetic Dentistry</li>
                <li>Crowns & Bridges</li>
                <li>Gum Care</li>
                <li>Smile Design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-sans">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 8686210205</li>
                <li>+91 8019656546</li>
                <li>Ground Floor, Santhoshi Maa Residency</li>
                <li>Sriramkrishnapuram, Hyderabad</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-sans">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sunday: 10AM-10PM</li>
                <li>Monday-Saturday: 9AM-10PM</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Power Dental Clinic. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showVideoModal && (
        <div className="video-modal" onClick={() => setShowVideoModal(false)}>
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold font-sans">Patient Testimonial</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowVideoModal(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-gray-400" />
              <span className="ml-2 text-gray-600">Video testimonial would play here</span>
            </div>
          </div>
        </div>
      )}
      </main>
    </div>
  )
}
