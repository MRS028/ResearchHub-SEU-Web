import React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Bookmark, ThumbsUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400">
          Welcome to ResearchHub@SEU
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Manage, explore, and summarize research papers efficiently. Bookmark your favorite
          researches and track trending research at Southeast University.
        </p>
        <Button className="mt-6" variant="default">
          Explore Researches
        </Button>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Upload Research */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="text-center">
            <FileText className="mx-auto h-10 w-10 text-blue-600 dark:text-blue-400" />
            <CardTitle className="mt-4">Upload Research</CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
              Upload PDF or images of your research securely with Cloudinary integration.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Summarize Research */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="text-center">
            <BookOpen className="mx-auto h-10 w-10 text-green-600 dark:text-green-400" />
            <CardTitle className="mt-4">Summarize Research</CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
              AI-powered summarization helps you quickly understand research highlights.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Upvote & Trending */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="text-center">
            <ThumbsUp className="mx-auto h-10 w-10 text-purple-600 dark:text-purple-400" />
            <CardTitle className="mt-4">Upvote Research</CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
              Support valuable research by upvoting, and track trending papers easily.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Bookmark */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="text-center">
            <Bookmark className="mx-auto h-10 w-10 text-red-600 dark:text-red-400" />
            <CardTitle className="mt-4">Bookmark</CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
              Save researches to your personal library for easy access later.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Call-to-action */}
      <section className="mt-16 text-center py-16 bg-gray-100 dark:bg-gray-900 rounded-lg transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Ready to start your research journey?
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Join ResearchHub@SEU and make research management seamless and impactful.
        </p>
        <Button className="mt-6" variant="default">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default Home;
