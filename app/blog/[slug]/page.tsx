"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = {
  "daily-oral-care-tips": {
    title: "5 Essential Daily Oral Care Tips",
    author: "Dr. Swathi Yadav",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "/brushing-teeth-tips.png",
    excerpt:
      "Learn the fundamental practices for maintaining excellent oral health every day. These evidence-based tips will help you prevent cavities, gum disease, and maintain a bright smile.",
    content: `
      <h2>Why Daily Oral Care Matters</h2>
      <p>Your daily oral care routine is the foundation of good dental health. Consistent care prevents most dental problems and saves you from costly treatments later.</p>
      
      <h2>1. Brush Twice Daily with Proper Technique</h2>
      <p>Use a soft-bristled toothbrush and fluoride toothpaste. Brush for at least 2 minutes, making sure to:</p>
      <ul>
        <li>Hold your brush at a 45-degree angle to your gums</li>
        <li>Use gentle, circular motions</li>
        <li>Clean all surfaces: outer, inner, and chewing surfaces</li>
        <li>Don't forget your tongue!</li>
      </ul>
      
      <h2>2. Floss Daily Without Exception</h2>
      <p>Flossing removes plaque and food particles between teeth where your toothbrush can't reach. This prevents gum disease and cavities between teeth.</p>
      
      <h2>3. Use Antimicrobial Mouthwash</h2>
      <p>A good mouthwash kills bacteria, freshens breath, and can help prevent gum disease. Look for one with the ADA Seal of Acceptance.</p>
      
      <h2>4. Limit Sugary and Acidic Foods</h2>
      <p>Bacteria in your mouth feed on sugar and produce acid that erodes tooth enamel. When you do consume sugary foods, rinse with water afterward.</p>
      
      <h2>5. Stay Hydrated</h2>
      <p>Water helps wash away food particles and bacteria. It also helps maintain saliva production, which is your mouth's natural defense against decay.</p>
      
      <h2>Professional Care is Essential</h2>
      <p>Even with perfect home care, you need professional cleanings and checkups every 6 months. Our team can detect problems early and provide treatments you can't do at home.</p>
    `,
    relatedPosts: ["dental-implants-guide", "professional-vs-home-whitening"],
  },
  "dental-implants-guide": {
    title: "Complete Guide to Dental Implants",
    author: "Dr. Raju Khanna",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "/dental-implants-guide.png",
    excerpt:
      "Everything you need to know about dental implant procedures, recovery, and long-term care. Discover why implants are the gold standard for tooth replacement.",
    content: `
      <h2>What Are Dental Implants?</h2>
      <p>Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. They provide a strong foundation for fixed or removable replacement teeth.</p>
      
      <h2>The Implant Process</h2>
      <h3>1. Initial Consultation</h3>
      <p>We'll examine your mouth, take X-rays, and create a treatment plan tailored to your needs.</p>
      
      <h3>2. Implant Placement</h3>
      <p>The titanium implant is surgically placed into the jawbone. This procedure is typically done under local anesthesia.</p>
      
      <h3>3. Healing Period (Osseointegration)</h3>
      <p>Over 3-6 months, the implant fuses with your jawbone, creating a stable foundation.</p>
      
      <h3>4. Crown Placement</h3>
      <p>Once healed, we attach an abutment and custom crown that matches your natural teeth.</p>
      
      <h2>Benefits of Dental Implants</h2>
      <ul>
        <li>Look and feel like natural teeth</li>
        <li>Preserve jawbone and facial structure</li>
        <li>Don't affect adjacent teeth</li>
        <li>Can last a lifetime with proper care</li>
        <li>Restore full chewing function</li>
      </ul>
      
      <h2>Am I a Candidate?</h2>
      <p>Most people with good general health and adequate jawbone can receive implants. Factors we consider include:</p>
      <ul>
        <li>Overall health status</li>
        <li>Jawbone density and volume</li>
        <li>Gum health</li>
        <li>Smoking habits</li>
        <li>Commitment to oral hygiene</li>
      </ul>
      
      <h2>Recovery and Care</h2>
      <p>Initial healing takes 1-2 weeks, during which you should eat soft foods and avoid the implant site. Long-term success depends on good oral hygiene and regular dental visits.</p>
    `,
    relatedPosts: ["daily-oral-care-tips", "professional-vs-home-whitening"],
  },
  "professional-vs-home-whitening": {
    title: "Professional vs. At-Home Whitening: Which is Right for You?",
    author: "Dr. Swathi Yadav",
    date: "December 5, 2024",
    readTime: "6 min read",
    image: "/teeth-whitening-options.png",
    excerpt:
      "Compare different teeth whitening options to find the best solution for your needs. Learn about safety, effectiveness, and cost considerations for each method.",
    content: `
      <h2>Understanding Tooth Discoloration</h2>
      <p>Teeth can become discolored due to various factors including age, genetics, medications, and lifestyle choices like coffee, wine, and smoking.</p>
      
      <h2>Professional In-Office Whitening</h2>
      <h3>How It Works</h3>
      <p>We use high-concentration bleaching gel (15-35% hydrogen peroxide) activated by special lights or heat.</p>
      
      <h3>Advantages</h3>
      <ul>
        <li>Dramatic results in one session</li>
        <li>Professional supervision ensures safety</li>
        <li>Customized treatment for your needs</li>
        <li>Immediate results - up to 8 shades lighter</li>
      </ul>
      
      <h3>Considerations</h3>
      <ul>
        <li>Higher upfront cost</li>
        <li>May cause temporary sensitivity</li>
        <li>Requires office visit</li>
      </ul>
      
      <h2>Professional Take-Home Kits</h2>
      <p>Custom-fitted trays with professional-grade gel (10-22% carbamide peroxide) for use at home.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li>Convenience of home use</li>
        <li>Gradual, natural-looking results</li>
        <li>Less sensitivity than in-office</li>
        <li>Can touch up results as needed</li>
      </ul>
      
      <h2>Over-the-Counter Options</h2>
      <h3>Whitening Toothpastes</h3>
      <p>Remove surface stains but don't change intrinsic tooth color. Good for maintenance.</p>
      
      <h3>Whitening Strips</h3>
      <p>Convenient but may not fit all teeth properly, leading to uneven results.</p>
      
      <h3>Whitening Mouthwashes</h3>
      <p>Minimal whitening effect but can help maintain results from other treatments.</p>
      
      <h2>Which Option is Best for You?</h2>
      <p><strong>Choose professional in-office if:</strong> You want immediate, dramatic results and don't mind the higher cost.</p>
      
      <p><strong>Choose take-home professional kits if:</strong> You prefer gradual results and the convenience of home treatment.</p>
      
      <p><strong>Choose over-the-counter if:</strong> You have minor staining and want an affordable maintenance option.</p>
      
      <h2>Safety Considerations</h2>
      <p>Professional supervision ensures safe concentrations and proper application. Always consult with us before starting any whitening treatment.</p>
    `,
    relatedPosts: ["daily-oral-care-tips", "dental-implants-guide"],
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const relatedPostsData = post.relatedPosts.map((slug) => ({
    slug,
    ...blogPosts[slug as keyof typeof blogPosts],
  }))

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-600 font-sans">Power Dental</h1>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <Link href="/#blog" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">{post.title}</h1>

          <div className="flex items-center text-gray-600 mb-6 space-x-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-sans">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPostsData.map((relatedPost) => (
              <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg">
                  <img
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-sans">{relatedPost.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt.substring(0, 100)}...</p>
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
