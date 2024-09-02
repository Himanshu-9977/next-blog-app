'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        About DevBlog
      </motion.h1>
      
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>At DevBlog, we&apos;re passionate about web development and sharing knowledge. Our mission is to provide high-quality, accessible content that helps developers of all levels grow their skills and stay up-to-date with the latest trends.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>In-depth tutorials on frontend and backend technologies</li>
              <li>Best practices and coding patterns</li>
              <li>Insights into the latest web development trends</li>
              <li>Tips for career growth in tech</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.h2 
        className="text-3xl font-semibold my-8 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        Meet Our Team
      </motion.h2>

      <motion.div 
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.6 }}
      >
        {['Alice', 'Bob', 'Charlie'].map((name, index) => (
          <Card key={index}>
            <CardHeader>
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={``} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-center mt-4">{name}</CardTitle>
              <CardDescription className="text-center">Senior Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center">Passionate about creating intuitive and efficient web applications.</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  )
}

export default AboutPage