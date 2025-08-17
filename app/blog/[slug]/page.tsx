"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Calendar, Users, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = {
  "daily-oral-care-tips": {
    title: "5 Essential Daily Oral Care Tips for Healthy Teeth and Gums",
    author: "Dr. Nagesh MDS",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/brushing-teeth-tips.png",
    excerpt:
      "Discover the fundamental practices for maintaining excellent oral health every day. Learn proper brushing techniques, flossing methods, and preventive care strategies that will help you prevent cavities, gum disease, and maintain a bright smile for years to come.",
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
    title: "Complete Guide to Dental Implants: Everything You Need to Know",
    author: "Dr. Nagesh MDS",
    date: "December 10, 2024",
    readTime: "12 min read",
    image: "/dental-implants-guide.png",
    excerpt:
      "Everything you need to know about dental implant procedures, recovery, and long-term care. Discover why implants are the gold standard for tooth replacement, what to expect during treatment, and how to maintain them for life.",
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
    title: "Professional vs. At-Home Teeth Whitening: Which is Right for You?",
    author: "Dr. Nagesh MDS",
    date: "December 5, 2024",
    readTime: "10 min read",
    image: "/teeth-whitening-options.png",
    excerpt:
      "Compare different teeth whitening options to find the best solution for your needs. Learn about safety, effectiveness, cost considerations, and what to expect from professional and at-home whitening methods.",
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
        <li>Higher upfront cost (₹8,000-15,000)</li>
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
  "root-canal-myths": {
    title: "Debunking Common Root Canal Myths: What You Really Need to Know",
    author: "Dr. Meghana Sharma MDS",
    date: "December 1, 2024",
    readTime: "9 min read",
    image: "/damaged-teeth-before.png",
    excerpt:
      "Separate fact from fiction about root canal treatment. Learn why modern root canals are painless, how they save your natural teeth, and what the recovery process really involves.",
    content: `
      <h2>Why Root Canals Have a Bad Reputation</h2>
      <p>Root canal treatment has been unfairly demonized in popular culture. The truth is, modern root canals are comfortable, effective, and often painless procedures that save your natural teeth.</p>
      
      <h2>Myth #1: Root Canals Are Extremely Painful</h2>
      <h3>Fact: Modern Root Canals Are Painless</h3>
      <p>With today's advanced anesthesia and techniques, root canals are no more painful than getting a filling. Most patients report feeling no pain during the procedure.</p>
      
      <h2>Myth #2: Root Canals Cause Illness</h2>
      <h3>Fact: Root Canals Prevent Infection Spread</h3>
      <p>Root canals actually remove infected tissue and prevent the spread of infection to other parts of your body. They're a treatment for infection, not a cause.</p>
      
      <h2>Myth #3: Extraction is Better Than Root Canal</h2>
      <h3>Fact: Saving Natural Teeth is Always Preferred</h3>
      <p>Your natural teeth are designed to last a lifetime. Root canals preserve your natural tooth structure, which is better for chewing, speaking, and maintaining jawbone health.</p>
      
      <h2>The Modern Root Canal Process</h2>
      <h3>1. Diagnosis and Planning</h3>
      <p>We use advanced imaging to identify the problem and create a treatment plan.</p>
      
      <h3>2. Anesthesia</h3>
      <p>Local anesthesia ensures you're completely comfortable throughout the procedure.</p>
      
      <h3>3. Access and Cleaning</h3>
      <p>We create a small access point and remove infected pulp tissue.</p>
      
      <h3>4. Shaping and Filling</h3>
      <p>The canal is shaped and filled with biocompatible material.</p>
      
      <h3>5. Restoration</h3>
      <p>A crown or filling protects the treated tooth.</p>
      
      <h2>Recovery and Aftercare</h2>
      <p>Most patients return to normal activities the same day. You may experience mild sensitivity for a few days, which can be managed with over-the-counter pain relievers.</p>
      
      <h2>When Do You Need a Root Canal?</h2>
      <ul>
        <li>Severe toothache, especially when chewing</li>
        <li>Prolonged sensitivity to hot or cold</li>
        <li>Darkening of the tooth</li>
        <li>Swollen, tender gums</li>
        <li>Pimple on the gums</li>
      </ul>
      
      <h2>Prevention is Key</h2>
      <p>Good oral hygiene and regular dental checkups can prevent most problems that lead to root canals. Early detection and treatment of cavities can often avoid the need for root canal treatment.</p>
    `,
    relatedPosts: ["emergency-dental-care", "daily-oral-care-tips"],
  },
  "orthodontics-guide": {
    title: "Modern Orthodontics: From Traditional Braces to Clear Aligners",
    author: "Dr. Nagesh MDS",
    date: "November 25, 2024",
    readTime: "11 min read",
    image: "/crooked-teeth-before.png",
    excerpt:
      "Explore the latest advances in orthodontic treatment. Learn about traditional braces, clear aligners, and other options for achieving a perfectly aligned smile.",
    content: `
      <h2>The Evolution of Orthodontic Treatment</h2>
      <p>Orthodontics has come a long way from the bulky metal braces of the past. Today, patients have more options than ever to achieve a perfectly aligned smile.</p>
      
      <h2>Traditional Metal Braces</h2>
      <h3>Best For:</h3>
      <ul>
        <li>Complex orthodontic cases</li>
        <li>Severe crowding or spacing</li>
        <li>Bite correction</li>
        <li>Patients who prefer a proven, reliable option</li>
      </ul>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Most effective for complex cases</li>
        <li>Predictable results</li>
        <li>Cost-effective</li>
        <li>No compliance issues</li>
      </ul>
      
      <h2>Ceramic Braces</h2>
      <p>Similar to metal braces but with tooth-colored brackets that blend in with your teeth.</p>
      
      <h3>Best For:</h3>
      <ul>
        <li>Patients who want a less visible option</li>
        <li>Adults in professional settings</li>
        <li>Those who want the reliability of braces</li>
      </ul>
      
      <h2>Lingual Braces</h2>
      <p>Braces placed behind your teeth, making them completely invisible from the front.</p>
      
      <h3>Best For:</h3>
      <ul>
        <li>Patients who want invisible treatment</li>
        <li>Those who can't wear aligners</li>
        <li>Complex cases requiring precise control</li>
      </ul>
      
      <h2>Clear Aligners (Invisalign)</h2>
      <h3>How They Work:</h3>
      <p>Custom-made, removable plastic trays that gradually move your teeth into position.</p>
      
      <h3>Best For:</h3>
      <ul>
        <li>Mild to moderate orthodontic problems</li>
        <li>Patients who want removable treatment</li>
        <li>Those who prefer minimal visibility</li>
        <li>Adults and responsible teenagers</li>
      </ul>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Nearly invisible</li>
        <li>Removable for eating and cleaning</li>
        <li>No dietary restrictions</li>
        <li>Fewer office visits</li>
        <li>Comfortable to wear</li>
      </ul>
      
      <h3>Considerations:</h3>
      <ul>
        <li>Requires discipline to wear 20-22 hours daily</li>
        <li>May not be suitable for complex cases</li>
        <li>Higher cost than traditional braces</li>
      </ul>
      
      <h2>Which Option is Right for You?</h2>
      <p>During your consultation, we'll evaluate your specific needs and recommend the best treatment option. Factors we consider include:</p>
      <ul>
        <li>Severity of your orthodontic problem</li>
        <li>Your lifestyle and preferences</li>
        <li>Your commitment to treatment</li>
        <li>Your budget</li>
        <li>Your timeline for results</li>
      </ul>
      
      <h2>Treatment Timeline</h2>
      <p>Most orthodontic treatments take 12-24 months, depending on the complexity of your case and the treatment option chosen.</p>
      
      <h2>Maintaining Your Results</h2>
      <p>After treatment, you'll need to wear a retainer to maintain your new smile. This is crucial for long-term success.</p>
    `,
    relatedPosts: ["daily-oral-care-tips", "professional-vs-home-whitening"],
  },
  "emergency-dental-care": {
    title: "Emergency Dental Care: What to Do When Dental Problems Strike",
    author: "Dr. Meghana Sharma MDS",
    date: "November 20, 2024",
    readTime: "7 min read",
    image: "/damaged-teeth-before-dental-treatment.png",
    excerpt:
      "Learn how to handle common dental emergencies before you can reach a dentist. From toothaches to broken teeth, know the immediate steps to take for relief and prevention of further damage.",
    content: `
      <h2>Dental Emergencies: Be Prepared</h2>
      <p>Dental emergencies can happen at any time, often when you least expect them. Knowing what to do can save your tooth and reduce pain until you can reach professional care.</p>
      
      <h2>Severe Toothache</h2>
      <h3>Immediate Steps:</h3>
      <ul>
        <li>Rinse your mouth with warm water</li>
        <li>Use dental floss to remove any trapped food</li>
        <li>Take over-the-counter pain relievers (ibuprofen or acetaminophen)</li>
        <li>Apply a cold compress to the outside of your cheek</li>
      </ul>
      
      <h3>What NOT to Do:</h3>
      <ul>
        <li>Don't put aspirin directly on the tooth or gums</li>
        <li>Don't apply heat to the area</li>
        <li>Don't ignore the pain - seek professional help</li>
      </ul>
      
      <h2>Broken or Chipped Tooth</h2>
      <h3>Immediate Steps:</h3>
      <ul>
        <li>Save any broken pieces</li>
        <li>Rinse your mouth with warm water</li>
        <li>Apply gauze to stop any bleeding</li>
        <li>Use a cold compress to reduce swelling</li>
        <li>See a dentist immediately</li>
      </ul>
      
      <h2>Knocked-Out Tooth</h2>
      <h3>Critical Steps (Time is crucial):</h3>
      <ol>
        <li>Pick up the tooth by the crown (top), not the root</li>
        <li>Rinse gently with water (don't scrub)</li>
        <li>Try to reinsert it into the socket</li>
        <li>If you can't reinsert it, keep it moist in milk or saliva</li>
        <li>Get to a dentist within 30 minutes</li>
      </ol>
      
      <h2>Bleeding Gums</h2>
      <h3>Immediate Steps:</h3>
      <ul>
        <li>Rinse with warm salt water</li>
        <li>Apply gentle pressure with clean gauze</li>
        <li>Avoid aspirin (it can increase bleeding)</li>
        <li>See a dentist if bleeding persists</li>
      </ul>
      
      <h2>Lost Filling or Crown</h2>
      <h3>Immediate Steps:</h3>
      <ul>
        <li>Save the filling or crown</li>
        <li>Clean the area gently</li>
        <li>Use dental cement or sugarless gum as temporary protection</li>
        <li>See a dentist as soon as possible</li>
      </ul>
      
      <h2>When to Seek Immediate Care</h2>
      <p>Call us immediately if you experience:</p>
      <ul>
        <li>Severe pain that doesn't respond to pain relievers</li>
        <li>Swelling in your face or neck</li>
        <li>Difficulty breathing or swallowing</li>
        <li>Bleeding that won't stop</li>
        <li>A knocked-out tooth</li>
        <li>Signs of infection (fever, swelling, pus)</li>
      </ul>
      
      <h2>Preventing Dental Emergencies</h2>
      <ul>
        <li>Wear a mouthguard during sports</li>
        <li>Don't use your teeth as tools</li>
        <li>Avoid chewing hard foods or ice</li>
        <li>Maintain good oral hygiene</li>
        <li>Visit your dentist regularly</li>
      </ul>
      
      <h2>Our Emergency Services</h2>
      <p>At Power Dental, we understand that dental emergencies can't wait. We provide emergency care and are available to help when you need us most.</p>
    `,
    relatedPosts: ["root-canal-myths", "daily-oral-care-tips"],
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
                <ChevronLeft className="w-4 h-4 mr-2" />
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
            <ChevronLeft className="w-4 h-4 inline mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">{post.title}</h1>

          <div className="flex items-center text-gray-600 mb-6 space-x-6">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
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
