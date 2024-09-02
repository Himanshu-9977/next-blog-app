'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Code, PenTool, Rocket } from 'lucide-react'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("frontend")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="container mx-auto px-4">
      <motion.header 
        className="py-20 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to DevBlog</h1>
        <p className="text-xl mb-8">Your go-to resource for web development insights and tutorials</p>
        <Link href="/blogs">
          <Button variant="default" size="lg" className="group">
            Explore Our Blogs
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.header>

      <motion.section 
        className="py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <Code className="mb-2 h-6 w-6" />
                In-depth Tutorials
              </CardTitle>
              <CardDescription>Step-by-step guides to master web technologies</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <PenTool className="mb-2 h-6 w-6" />
                Best Practices
              </CardTitle>
              <CardDescription>Learn industry-standard coding practices and patterns</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Rocket className="mb-2 h-6 w-6" />
                Latest Trends
              </CardTitle>
              <CardDescription>Stay updated with the newest web development trends</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </motion.section>

      <motion.section 
        className="py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Focus Areas</h2>
        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>Master modern frontend frameworks and libraries</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our frontend content covers React, Vue, Angular, and more. Learn to create responsive and interactive user interfaces.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="backend">
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Build robust and scalable server-side applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Explore backend technologies like Node.js, Python, and Ruby on Rails. Learn about databases, APIs, and server architecture.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="devops">
            <Card>
              <CardHeader>
                <CardTitle>DevOps and Cloud</CardTitle>
                <CardDescription>Streamline development and deployment processes</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Dive into DevOps practices, cloud platforms like AWS and Azure, and containerization with Docker and Kubernetes.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.section>

      <motion.section 
        className="py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-8">Ready to Start Learning?</h2>
        <Link href="/blogs">
          <Button variant="default" size="lg">
            Browse Our Articles
          </Button>
        </Link>
      </motion.section>
    </div>
  )
}

export default HomePage